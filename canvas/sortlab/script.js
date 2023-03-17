
"use strict";

var algorithmName = ["", "Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort"];

function log(algorithm, arrayCt, arraySize, comparisons, copies, elapsedTime) {
  function padright(str, size) {
    if (str.length < size) {
      str = "                    ".substring(0, size - str.length) + str;
    }
    return str;
  }
  function padleft(str, size) {
    if (str.length < size) {
      str += "                    ".substring(0, size - str.length);
    }
    return str;
  }
  if (!document.getElementById("enablelog").checked) {
    return;
  }
  algorithm = padleft("" + algorithm, 15);
  arrayCt = padright("" + arrayCt, 11) + "  ";
  arraySize = padright("" + arraySize, 11) + "  ";
  comparisons = padright("" + comparisons, 15) + "  ";
  copies = padright("" + copies, 15) + "  ";
  elapsedTime = elapsedTime ? padright(elapsedTime.toFixed(3), 8) : "";
  var text = document.createTextNode(algorithm + arrayCt + arraySize + comparisons + copies + elapsedTime);
  document.getElementById("log").appendChild(text);
  document.getElementById("log").appendChild(document.createElement("br"));
}

// Part 1: ---------------------------------- Visual Sort -----------------------------------------

var borderColor = "#0000Dd";
var barColor = "#888888";
var finishedBarColor = "#000000";
var movingBarColor = "#DDDDDD";
var movingBarOutlineColor = "#888888";
var boxColor = "#DD00DD";
var multiBoxColor = "#00BB00";
var maxColor = "#FF0000";

var barGap = 10;

var IDLE = 0;     // possible values for the "state" variable.
var STARTING = 1;
var RUN = 2;
var STEPPING = 3;
var PAUSED = 4;

var state = IDLE;

var g;  // graphic context for drawing on the canvas.
var width, height;  // width and height of the canvas.

var barWidth, barHeight, minBarHeight, barIncrement; // measurements used for drawing.
var leftOffset, firstRow_y, secondRow_y, textAscent;

var method;  // The sorting method that is being used, coded as 1,2,3,4,5; controlled by a select element.

var fast = false;  // Things move faster when this is true;  the value is controlled by a checkbox.

var item = new Array();  // a 33-element array containing the numbers to be sorted in positions 1 to 16.
// item[0] holds the value of temp.  positions 17 - 33 are used in MergeSort.
// a value of -1 in this array means that no item is present.  When an item
// is in its final position, 100 is added to the value as a signal that the
// item should be drawn in black.

var tempOn = false;     // Variables that control the extra stuff that is sometimes drawn, in addition to items.
var mergeBox = [-1, -1, -1];;
var multiBoxLoc = { x: -1, y: -1 };
var movingItemLoc = { x: -1, y: -1 };
var maxLoc, hiLoc, loLoc, box1Loc, box2Loc, movingItem;

var copyCt; // Number of copies done so far in the current sort.
var compCt; // Number of comparisons done so far in the current sort.

var timeout = null;  // When non-null, indicates a pending timeout (so it can be cleared to stop the animation).

function say1(message) { // put the message in the paragraph with id "message1"
  document.getElementById("message1").innerHTML = message;
}

function say2(message) {  // put the message in the paragraph with id "message2", unless running at "fast" speed
  if (!fast || state != RUN || message == "")
    document.getElementById("message2").innerHTML = message;
}

function stopRunning() {  // does any pending actions in the action queue (with no delay) and cancels any timeout.
  while (actionQueue.length > 0) {
    doAction(actionQueue.shift());
  }
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
}

function setState(newState) {  // called whenever the state changes; sets enabled/disabled status of various elements.
  state = newState;
  document.getElementById("runBtn").disabled = state == RUN || state == IDLE || state == STEPPING;
  document.getElementById("pauseBtn").disabled = state != RUN;
  document.getElementById("stepBtn").disabled = state == RUN || state == IDLE || state == STEPPING;
  document.getElementById("sortSelect").disabled = state == RUN || state == PAUSED || state == STEPPING;
}

function newSort() {  // Set up to get ready for a new sort by storing items in random array positions, etc.
  stopRunning();
  setState(STARTING);
  valid = false;
  maxLoc = -1;
  hiLoc = -1;
  loLoc = -1;
  box1Loc = -1;
  box2Loc = -1;
  multiBoxLoc.x = -1;
  mergeBox[0] = [-1, -1, -1];
  movingItem = -1;
  tempOn = false;
  for (var i = 1; i <= 16; i++)
    item[i] = i;
  for (var i = 16; i >= 2; i--) {
    var j = 1 + Math.floor(Math.random() * i);
    var temp = item[i];
    item[i] = item[j];
    item[j] = temp;
  }
  item[0] = -1;
  for (var i = 17; i < 33; i++)
    item[i] = -1;
  document.getElementById("compCt").innerHTML = "0";
  document.getElementById("moveCt").innerHTML = "0";
  compCt = 0;
  copyCt = 0;
  valid = false;
  say1("Click \"Run\" or \"Step\" to begin sorting.");
  say2("");
  draw();
}

//-------------------------------- Drawing ------------------------------------------

function putItem(i) {  // draws item i from the array item[]; if item[i] is -1, nothing is drawn.
  var h = item[i];
  if (h == -1)
    return;
  var x, y, ht;
  if (h > 16) {
    ht = (h - 100) * barIncrement + minBarHeight;
    g.fillStyle = finishedBarColor;
  }
  else {
    ht = h * barIncrement + minBarHeight;
    g.fillStyle = barColor;
  }
  if (i == 0) {
    x = leftOffset + ((barWidth + barGap) * 15) / 2;
    y = secondRow_y - ht;
  }
  else if (i < 17) {
    x = leftOffset + (i - 1) * (barWidth + barGap);
    y = firstRow_y - ht;
  }
  else {
    x = leftOffset + (i - 17) * (barWidth + barGap);
    y = secondRow_y - ht;
  }
  try {
    g.fillRect(x, y, barWidth, ht);
    g.strokeStyle = finishedBarColor;
    g.strokeRect(x, y, barWidth, ht);
  }
  catch (e) { // (Got an error during development when item[i] was undefined.  Shouldn't happen again. :-)
    if (timeout != null)
      timeout.cancel();
    setState(IDLE);
    alert("Internal error while drawing!!??");
  }
}

function drawMovingItem() { // Draws an item that is being moved to animate the copying of an item from one place to another.
  var ht = movingItem * barIncrement + minBarHeight;
  g.fillStyle = movingBarColor;
  g.fillRect(movingItemLoc.x, movingItemLoc.y - ht, barWidth, ht);
  g.strokeColor = movingBarOutlineColor;
  g.strokeRect(movingItemLoc.x, movingItemLoc.y - ht, barWidth, ht);
}

function drawMax() { // Writes "Max" under one of the items, with an arrow pointing to the item.
  var sw = 30;  // (guess at string width)
  var x = leftOffset + (maxLoc - 1) * (barWidth + barGap) + barWidth / 2;
  var y = firstRow_y + 38 + textAscent;
  g.fillStyle = maxColor;
  g.fillText("Max", x - sw / 2, y + textAscent);
  g.strokeStyle = maxColor;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x, y - 29);
  g.moveTo(x, y - 29);
  g.lineTo(x + 6, y - 24);
  g.moveTo(x, y - 29);
  g.lineTo(x - 6, y - 24);
  g.stroke();
}

function drawBox(boxLoc) { // draws a box aroud one of the items (indicated by boxLoc)
  var x, y;
  if (boxLoc == 0) {
    x = leftOffset + ((barWidth + barGap) * 15) / 2;
    y = secondRow_y;
  }
  else if (boxLoc < 17) {
    x = leftOffset + (boxLoc - 1) * (barWidth + barGap);
    y = firstRow_y;
  }
  else {
    x = leftOffset + (boxLoc - 17) * (barWidth + barGap);
    y = secondRow_y;
  }
  g.strokeStyle = boxColor;
  g.strokeRect(x - 2, y - barHeight - 2, barWidth + 4, barHeight + 4);
}

function drawMultiBox() {  // draws a box around items number multiBoxLoc.x through multiBoxLoc.y
  var x, y, wd;
  if (multiBoxLoc.x < 17) {
    y = firstRow_y;
    x = leftOffset + (multiBoxLoc.x - 1) * (barWidth + barGap);
  }
  else {
    y = secondRow_y;
    x = leftOffset + (multiBoxLoc.x - 17) * (barWidth + barGap);
  }
  wd = (multiBoxLoc.y - multiBoxLoc.x) * (barGap + barWidth) + barWidth;
  g.strokeStyle = multiBoxColor;
  g.strokeRect(x - 4, y - barHeight - 4, wd + 8, barHeight + 8);
}

function drawMergeListBoxes() { // Draws a pair of boxes around lists that are being merged in MergeSort
  var x, y, wd1, wd2;
  y = firstRow_y;
  x = leftOffset + (mergeBox[0] - 1) * (barWidth + barGap);
  wd1 = (mergeBox[1] - mergeBox[0]) * (barGap + barWidth) + barWidth;
  wd2 = (mergeBox[2] - mergeBox[0]) * (barGap + barWidth) + barWidth;
  g.strokeStyle = multiBoxColor;
  g.strokeRect(x - 4, y - barHeight - 4, wd1 + 8, barHeight + 8);
  g.strokeRect(x - 4, y - barHeight - 4, wd2 + 8, barHeight + 8);
}

function draw() {  // Completely redraws the canvas to show the current state.
  g.clearRect(0, 0, width, height);
  g.strokeStyle = borderColor;
  g.strokeRect(0, 0, width, height);
  g.strokeRect(1, 1, width - 2, height - 2);
  for (var i = 1; i <= 16; i++)
    putItem(i);
  g.fillStyle = borderColor;
  for (var i = 1; i <= 16; i++) {
    var sw = (i < 10) ? 6 : 12;
    g.fillText("" + i, leftOffset + (i - 1) * (barWidth + barGap) + (barWidth - sw) / 2, firstRow_y + 6 + textAscent);
  }
  for (var i = 17; i <= 32; i++)
    putItem(i);
  if (tempOn) {
    g.fillStyle = borderColor;
    var sw = 40;
    g.fillText("Temp", leftOffset + (16 * barWidth + 15 * barGap - sw) / 2, secondRow_y + 5 + textAscent);
    putItem(0);
  }
  if (maxLoc >= 0)
    drawMax();
  if (box1Loc >= 0)
    drawBox(box1Loc);
  if (box2Loc >= 0)
    drawBox(box2Loc);
  if (multiBoxLoc.x > 0)
    drawMultiBox();
  if (mergeBox[0] > 0)
    drawMergeListBoxes();
  if (movingItem >= 0)
    drawMovingItem();
}

// ---------------------------- Stepping through the sorts ------------------------------

var actionQueue = new Array(); // A queue of pending actions for implmenting some aspects of the animation.

var done = false;  // state variables for scripting the various sorting algorithms.
var i, j, k;
var hi, lo;
var stack = new Array();
var stackCt;
var sortLength, end_i, end_j;
var valid = false;  // false when a sort is just ready to start; set to true when the first step is taken.

function copyItem(toItem, fromItem) {  // copy an item from one place to another (actually just enqueue actions to do so)
  if (fast) { // enqueue a single copy action when the "fast" checkbox is seledted.
    actionQueue.push({ action: "copy", from: fromItem, to: toItem, delay: 200 });
  }
  else {  // enqueue a series of actions that move the item gradually from old position to new.
    var x1, y1, x2, y2;
    if (toItem == 0) {
      x2 = leftOffset + ((barWidth + barGap) * 15) / 2;
      y2 = secondRow_y;
    }
    else if (toItem < 17) {
      x2 = leftOffset + (toItem - 1) * (barWidth + barGap);
      y2 = firstRow_y;
    }
    else {
      x2 = leftOffset + (toItem - 17) * (barWidth + barGap);
      y2 = secondRow_y;
    }
    if (fromItem == 0) {
      x1 = leftOffset + ((barWidth + barGap) * 15) / 2;
      y1 = secondRow_y;
    }
    else if (fromItem < 17) {
      x1 = leftOffset + (fromItem - 1) * (barWidth + barGap);
      y1 = firstRow_y;
    }
    else {
      x1 = leftOffset + (fromItem - 17) * (barWidth + barGap);
      y1 = secondRow_y;
    }
    var dist = Math.round(Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)));
    var ct = Math.round(dist / 3);
    if (ct > 25)
      ct = 25;
    else if (ct < 6)
      ct = 6;
    actionQueue.push({ action: "startmove", from: fromItem, x: x1, y: y1, delay: 100 });
    for (var i = 0; i <= ct; i++) {
      actionQueue.push({ action: "move", x: x1 + Math.round(((x2 - x1) * i) / ct), y: y1 + Math.round(((y2 - y1) * i) / ct), delay: 25 });
    }
    actionQueue.push({ action: "donemove", to: toItem, delay: 200 });
  }
}

function swapItems(a, b) { // swaps two items; actually just enqueues actions to do that
  copyItem(0, a);
  copyItem(a, b);
  copyItem(b, 0);
}

function greaterThan(itemA, itemB) {  // test if one item is greater than another; boxes are shown around the two items.
  compCt++;
  document.getElementById("compCt").innerHTML = "" + compCt;
  putBoxes(itemA, itemB);
  return (item[itemA] > item[itemB]);
}

function putBoxes(itemA, itemB) {  // show boxes around two items
  box1Loc = itemA;
  box2Loc = itemB;
}

function scriptSetup() {  // The first step in a sort
  method = document.getElementById("sortSelect").value;
  say2("");
  switch (method) {
    case "1": {
      j = 16;
      i = 1;
      say1("Phase 1:  largest item \"bubbles\" up to position 16");
      tempOn = true;
      break;
    }
    case "2": {
      j = 16;
      i = 2;
      say1("Phase 1:  Find the largest item and swap it with item 16");
      say2("Item 1 is the largest item seen so far during this phase");
      maxLoc = 1;
      tempOn = true;
      break;
    }
    case "3": {
      j = 0;
      multiBoxLoc.x = 1;
      multiBoxLoc.y = 1;
      say1("The sublist in the box -- just item 1 for now -- is correctly sorted");
      break;
    }
    case "4": {
      sortLength = 1;
      i = 1;
      end_i = 1;
      j = 2;
      end_j = 2;
      k = 17;
      lo = 0;
      hi = 1;
      say1("Phase 1:  Merge lists of length 1 into lists of length 2");
      say2("First, merge item 1 with item 2.");
      multiBoxLoc.x = 17;
      multiBoxLoc.y = 18;
      mergeBox = [1, 1, 2];
      break;
    }
    case "5": {
      stackCt = 0;
      hi = 16;
      lo = 1;
      k = 0;
      i = 1;     // i and j are starting valuse for lo and hi
      j = 16;
      say1("Apply \"QuickSortStep\" to items 1 through 16.");
      say2("The range of possible final positions for item 1 is boxed.");
      multiBoxLoc.x = 1;
      multiBoxLoc.y = 16;
      tempOn = true;
      break;
    }
  }
}


function scriptStep() {  // Do one step in a sort.  (A very long function!)
  switch (method) {
    case "1": // bubble sort
      if (i == j) {
        say2("");
        putBoxes(-1, -1);
        if (j == 2) {
          say1("The sort is finished.");
          done = true;
          tempOn = false;
          item[1] = 100 + item[1];
        }
        else {
          j = j - 1;
          i = 1;
          say1("Phase " + (17 - j) + ":  next largest item bubbles up to position " + j);
        }
      }
      else {
        if (greaterThan(i, i + 1)) {
          say2("Is item " + i + " bigger than item " + (i + 1) + "?  Yes, so swap them.");
          swapItems(i, i + 1);
        }
        else {
          say2("Is item " + i + " bigger than item " + (i + 1) + "?  No, so don't swap them.");
        }
        i = i + 1;
        if (i == j) {
          actionQueue.push({ action: "finishItem", itemNum: j, delay: 100 });
        }
      } // end case 1
      break;
    case "2":  // selection sort
      if (j == 1) {
        say1("The sort is finished.");
        say2("");
        done = true;
        item[1] = 100 + item[1];
        tempOn = false;
      }
      else if (i == -1) {
        say1("Phase " + (17 - j) + ":   Find the next largest item and move it to position " + j);
        say2("Item 1 is the largest item seen so far during this phase");
        i = 2;
        maxLoc = 1;
      }
      else if (i > j) {
        putBoxes(-1, -1);
        k = maxLoc;
        actionQueue.push({ action: "maxoff", delay: 0 });
        if (k == j)
          say2("Item " + j + " is already in its correct location.");
        else {
          if (j == 2)
            say2("Swap item 2 with item 1");
          else
            say2("Swap item " + j + " with maximum among items 1 through " + (j - 1));
          swapItems(k, j);
        }
        actionQueue.push({ action: "finishItem", itemNum: j, delay: 100 });
        j = j - 1;
        i = -1;
      }
      else if (greaterThan(i, maxLoc)) {
        say2("Item " + i + " is bigger than item " + maxLoc + ", so item " + i + " is now the max seen.");
        maxLoc = i;
        i = i + 1;
      }
      else {
        say2("Item " + i + " is smaller than item " + maxLoc + ", so item " + maxLoc + " is still the max seen.");
        i = i + 1;
      } // end case 2
      break;
    case "3": // insertions sort
      if (j == 0) {
        say1("Phase 1: Insert item 2 into its correct position in the sorted list.");
        say2("Copy item 2 to Temp.");
        copyItem(0, 2);
        j = 2;
        i = 1;
        tempOn = true;
      }
      else if (j == 17) {
        multiBoxLoc.x = -1;
        multiBoxLoc.y - 1;
        for (var x = 1; x <= 16; x++)
          item[x] += 100;
        say1("The sort is finished.");
        done = true;
        say2("");
        tempOn = false;
      }
      else if (i == 0) {
        say2("Temp is smaller than all items in the sorted list; copy it to position 1.");
        copyItem(1, 0);
        i = -1;
      }
      else if (i == -1) {
        putBoxes(-1, -1);
        say1("Items 1 through " + j + " now form a sorted list.");
        say2("");
        multiBoxLoc.x = 1;
        multiBoxLoc.y = j;
        j = j + 1;
        i = -2;
      }
      else if (i == -2) {
        say1("Phase " + (j - 1) + ": Insert item " + j + "  into its correct position in the sorted list.");
        say2("Copy item " + j + " to Temp.");
        copyItem(0, j);
        i = j - 1;
      }
      else if (greaterThan(i, 0)) {
        say2("Is item " + i + " bigger than Temp?  Yes, so move it up to position " + (i + 1));
        copyItem(i + 1, i);
        i = i - 1;
      }
      else {
        say2("Is item " + i + " bigger than Temp?  No, so Temp belongs in position " + (i + 1));
        copyItem(i + 1, 0);
        i = -1;
      }  // end case 3
      break;
    case "4": // merge sort
      if ((lo == 1) && (sortLength == 8)) {
        for (var x = 1; x <= 16; x++)
          item[x] += 100;
        say1("The sort is finished.");
        say2("");
        done = true;
      }
      else if (lo == 1) {
        hi = hi + 1;
        sortLength = sortLength * 2;
        say1("Phase " + hi + ":  Merge lists of length " + sortLength + " into lists of length " + (sortLength * 2));
        k = 17;
        i = 1;
        j = sortLength + 1;
        end_i = i + sortLength - 1;
        end_j = j + sortLength - 1;
        say2("First, merge items " + i + " through " + end_i + " with items " + j + " through " + end_j);
        multiBoxLoc.x = i + 16;
        multiBoxLoc.y = end_j + 16;
        mergeBox = [i, end_i, end_j];
        lo = 0;
      }
      else if ((end_i < i) && (end_j < j)) {
        if (k == 33) {
          multiBoxLoc.x = -1;
          multiBoxLoc.y = -1;
          mergeBox = [-1, -1, -1];
          say2("Copy merged items back to original list.");
          for (var n = 1; n < 17; n++) {
            actionQueue.push({ action: "copy", from: n + 16, to: n, delay: 100 });
          }
          lo = 1;
        }
        else {
          end_i = end_i + 2 * sortLength;
          end_j = end_j + 2 * sortLength;
          j = end_i + 1;
          i = j - sortLength;
          if (sortLength == 1)
            say2("Next, merge item " + i + " with item " + j);
          else
            say2("Next, merge items " + i + " through " + end_i + " with items " + j + " through " + end_j);
          multiBoxLoc.x = i + 16;
          multiBoxLoc.y = end_j + 16;
          mergeBox = [i, end_i, end_j];
        }
      }
      else if (end_i < i) {
        putBoxes(-1, -1);
        say2("List 1 is empty; move item " + j + " to the merged list.");
        copyItem(k, j);
        j = j + 1;
        k = k + 1;
      }
      else if (end_j < j) {
        putBoxes(-1, -1);
        say2("List 2 is empty; move item " + i + " to the merged list.");
        copyItem(k, i);
        i = i + 1;
        k = k + 1;
      }
      else if (greaterThan(i, j)) {
        say2("Is item " + j + " smaller than item " + i + "?  Yes, so move item " + j + " to merged list");
        copyItem(k, j);
        j = j + 1;
        k = k + 1;
      }
      else {
        say2("Is item " + j + " smaller than item " + i + "?  No, so move item " + i + " to merged list");
        copyItem(k, i);
        i = i + 1;
        k = k + 1;
      }  // end case 4      
      break;
    case "5": // quicksort
      if (k == 0) {
        if (hi == lo) {
          say2("There is only one item in the range; it is already in its final position.");
          item[hi] = 100 + item[hi];
          multiBoxLoc.x = -1;
          multiBoxLoc.y = -1;
          k = 1;
        }
        else {
          say2("Copy item " + lo + " to Temp");
          copyItem(0, lo);
          k = -1;
        }
      }
      else if (k == 1) {
        if (stackCt == 0) {
          say1("The sort is finished.");
          say2("");
          tempOn = false;
          done = true;
        }
        else {
          hi = stack[stackCt];
          lo = stack[stackCt - 1];
          j = hi;
          i = lo;
          stackCt = stackCt - 2;
          say1("Apply \"QuickSortStep\" to items " + lo + " through " + hi);
          say2("The range of possible final positions for item " + lo + " is boxed");
          multiBoxLoc.x = lo;
          multiBoxLoc.y = hi;
          k = 0;
        }
      }
      else if (k == 2) {
        say2("Item " + hi + " is in final position; smaller items below and bigger items above");
        multiBoxLoc.x = -1;
        multiBoxLoc.y = -1;
        item[hi] = 100 + item[hi];
        if (hi < j) {
          stack[stackCt + 1] = hi + 1;
          stack[stackCt + 2] = j;
          stackCt = stackCt + 2;
        }
        if (hi > i) {
          stack[stackCt + 1] = i;
          stack[stackCt + 2] = hi - 1;
          stackCt = stackCt + 2;
        }
        k = 1;
      }
      else if (hi == lo) {
        putBoxes(-1, -1);
        say2("Only one possible position left for Temp; copy Temp to position " + hi);
        copyItem(hi, 0);
        k = 2;
      }
      else if (item[lo] == -1) {
        if (greaterThan(0, hi)) {
          say2("Item " + hi + " is smaller than Temp, so move it; Temp will end up above it");
          copyItem(lo, hi);
          lo = lo + 1;
          multiBoxLoc.x = lo;
          multiBoxLoc.y = hi;
        }
        else {
          say2("Item " + hi + " is bigger than Temp, so Temp will end up below it");
          hi = hi - 1;
          multiBoxLoc.x = lo;
          multiBoxLoc.y = hi;
        }
      }
      else if (item[hi] == -1) {
        if (greaterThan(lo, 0)) {
          say2("Item " + lo + " is bigger than Temp, so move it; Temp will end up below it");
          copyItem(hi, lo);
          hi = hi - 1;
          multiBoxLoc.x = lo;
          multiBoxLoc.y = hi;
        }
        else {
          say2("Item " + lo + " is smaller than Temp, so Temp will end up above it");
          lo = lo + 1;
          multiBoxLoc.x = lo;
          multiBoxLoc.y = hi;
        }
      }  // end case 5
  } // end switch
}  // end scriptStep()

function doAction(what) {  // perform one action from the action queue; actions are encoded as objects.
  switch (what.action) {
    case "copy":
      item[what.to] = item[what.from];
      item[what.from] = -1;
      copyCt++;
      document.getElementById("moveCt").innerHTML = "" + copyCt;
      break;
    case "startmove": //alert("start move " + what.from);
      movingItem = item[what.from];
      item[what.from] = -1;
      movingItemLoc.x = what.x;
      movingItemLoc.y = what.y;
      break;
    case "move":
      movingItemLoc.x = what.x;
      movingItemLoc.y = what.y;
      break;
    case "donemove":  //alert("end move " + what.to + "," + movingItem);
      item[what.to] = movingItem;
      movingItem = -1;
      copyCt++;
      document.getElementById("moveCt").innerHTML = "" + copyCt;
      break;
    case "finishItem":
      item[what.itemNum] += 100;
      break;
    case "maxoff":
      maxLoc = -1;
      break;
  }
}

function frame() {  // do one frame of the animation; set timeout for next frame if appropriate.
  timeout = null;
  fast = document.getElementById("fastCheckbox").checked;
  if (actionQueue.length > 0) {
    var what;
    do {
      what = actionQueue.shift();
      doAction(what);
    } while (actionQueue.length > 0 && what.delay == 0);
    timeout = setTimeout(frame, Math.max(5, what.delay));
  }
  else {
    if (!valid) {
      scriptSetup();
      valid = true;
      done = false;
      if (state == RUN)
        timeout = setTimeout(frame, fast ? 100 : 1000);
    }
    else {
      scriptStep();
      if (!done && state == RUN)
        timeout = setTimeout(frame, fast ? 100 : 1000);
    }
    if (done) {
      setState(IDLE);
      log(algorithmName[method], 1, 16, compCt, copyCt);
    }
    else if (state == STEPPING)
      setState(PAUSED);
  }
  if (done && actionQueue.length == 0)
    setState(IDLE);
  else if (state == STEPPING && actionQueue.length == 0)
    setState(PAUSED);
  draw();
}


// ---------------------------- Control and Initialization -------------------------------

function doRun() { // handler for "Run" button
  if (state == RUN || state == IDLE || state == STEPPING)
    return; // won't happen if button enable/disable is functioning
  setState(RUN);
  frame();
}

function doStep() { // handler for "Step" button
  if (state == RUN || state == IDLE || state == STEPPING)
    return; // won't happen if button enable/disable is functioning
  setState(STEPPING);
  frame();
}

function doPause() { // handler for "Pause" button
  if (state != RUN)
    return; // won't happen if button enable/disable is functioning
  stopRunning();
  setState(PAUSED);
  draw();
}

function doNew() { // handler for "New" button
  newSort();
}


// Part 2: ---------------------------------- Timed Sort -----------------------------------------

var worker; // non-null when a timed sort operation is in progress
var jobNum = 0;
var currentJob;
var tCopies, tComparisons, tArraysSorted, tElapsedTime;
var algorithm;
var arrayCount, arraySize;

function doTimedSort() {
  if (worker != null) {
    worker.terminate();
    worker = null;
    doneTimedSort();
    document.getElementById("t-arraysSorted").innerHTML = "";
    document.getElementById("t-elapsedTime").innerHTML = "";
    document.getElementById("t-comparisons").innerHTML = "";
    document.getElementById("t-copies").innerHTML = "";
    return;
  }
  var count = Number(document.getElementById("t-arrayCt").value.trim());
  if (isNaN(count) || count < 1 || count > 250000000) {
    document.getElementById("t-message").innerHTML =
      "Number of Arrays must be a number between 1 and 250 million (250000000).";
    return;
  }
  count = Math.floor(count);
  var size = Number(document.getElementById("t-arrayLength").value.trim());
  if (isNaN(size) || size < 2 || size > 500000000) {
    document.getElementById("t-message").innerHTML =
      "Items per Array must be a number between 2 and 500 million (500000000)";
    return;
  }
  size = Math.floor(size);
  if (size * count > 1000000000) {
    document.getElementById("t-message").innerHTML =
      "The total number of items in all arrays cannot be more than 500 million.";
    return;
  }
  document.getElementById("t-message").innerHTML = "";
  if (worker) {
    worker.terminate();
  }
  try {
    worker = new Worker("timed-sort-worker.js");
  }
  catch (e) {
    document.getElementById("t-message").innerHTML =
      "Could not start web worker to do the sorting.<br>" +
      "Maybe the file 'timed-sort-worker.js' is missing?  (Some browers won't load it from the local disk.)<br>" +
      "Timed sorting will not be possible!";
    document.getElementById("t-head").innerHTML = "Timed Sort: NOT AVAILABLE";
    worker = null;
    return;
  }
  arrayCount = count;
  arraySize = size;
  document.getElementById("t-arraysSorted").innerHTML = "0";
  document.getElementById("t-elapsedTime").innerHTML = "0";
  document.getElementById("t-comparisons").innerHTML = "0";
  document.getElementById("t-copies").innerHTML = "0";
  algorithm = Number(document.getElementById("t-algorithm").value);
  jobNum++;
  currentJob = jobNum;
  worker.onmessage = workerMessage;
  worker.postMessage([jobNum, count, size, algorithm]);
  document.getElementById("t-head").innerHTML = "Timed Sort: Initializing Arrays";
  document.getElementById("t-algorithm").disabled = true;
  document.getElementById("t-arrayLength").disabled = true;
  document.getElementById("t-arrayCt").disabled = true;
  document.getElementById("t-run").innerHTML = "Cancel the sort";
}

function doneTimedSort() {
  document.getElementById("t-algorithm").disabled = false;
  document.getElementById("t-arrayLength").disabled = false;
  document.getElementById("t-arrayCt").disabled = false;
  document.getElementById("t-run").innerHTML = "Run the sort!";
}

function workerMessage(msg) {
  var data = msg.data;
  //console.log("message from worker " + data);
  if (data[0] != currentJob) {
    return;  // should never happen?
  }
  if (data[1] == "Initialized") {
    document.getElementById("t-head").innerHTML = "Timed Sort: Sorting";
    return;
  }
  if (data[1] == "Error") {
    worker.terminate();
    worker = null;
    document.getElementById("t-head").innerHTML = "Timed Sort: Error";
    document.getElementById("t-message").innerHTML =
      "Sorry, an error occurred:<br>" + data[2];
    doneTimedSort();
    return;
  }
  tArraysSorted = data[1];
  tComparisons = data[2];
  tCopies = data[3];
  tElapsedTime = data[4] / 1000;
  document.getElementById("t-arraysSorted").innerHTML = "" + tArraysSorted;
  document.getElementById("t-elapsedTime").innerHTML = "" + tElapsedTime + " seconds";
  document.getElementById("t-comparisons").innerHTML = "" + tComparisons;
  document.getElementById("t-copies").innerHTML = "" + tCopies;
  var done = data[5];
  if (done) {
    worker.terminate();
    worker = null;
    document.getElementById("t-head").innerHTML = "Timed Sort: Done";
    log(algorithmName[algorithm], arrayCount, arraySize, tComparisons, tCopies, tElapsedTime);
    doneTimedSort();
  }
}

// ---------------------------------- Initialization -----------------------------------------

function init() { // initialization; called when the document has loaded

  // initialization for visual sort

  var canvas = document.getElementById("sortcanvas"); // A reference to the canvas element.
  if (!canvas || !canvas.getContext) {
    // This browser apparently does not support canvasses since the canvas
    // element has no getContext function (or doesn't even exist).  Give up!
    document.getElementById("#message1").innerHTML =
      "Sorry, your browser doesn't support the canvas element.";
    return;
  }
  g = canvas.getContext("2d");
  g.font = "bold 11pt sans-serif";
  width = canvas.width;
  height = canvas.height;
  var x = (width - 20 + barGap) / 16;
  barWidth = x - barGap;
  textAscent = 15;
  leftOffset = (width - 16 * barWidth - 15 * barGap) / 2;
  barHeight = (height - 40 - 2 * textAscent) / 2;
  barIncrement = (barHeight - 3) / 17;
  minBarHeight = barHeight - 17 * barIncrement;
  firstRow_y = barHeight + 10;
  secondRow_y = 2 * barHeight + 25 + textAscent;
  document.getElementById("sortSelect").value = "2";
  document.getElementById("fastCheckbox").checked = false;
  document.getElementById("runBtn").onclick = doRun;
  document.getElementById("stepBtn").onclick = doStep;
  document.getElementById("pauseBtn").onclick = doPause;
  document.getElementById("newBtn").onclick = doNew;
  document.getElementById("fastCheckbox").onchange = function () {
    if (document.getElementById("fastCheckbox").checked)
      say2("");
  };
  newSort();

  // intialization for timed sort

  if (!window.Worker) {
    document.getElementById("t-message").innerHTML =
      "<b>Sorry, Timed sort requires support for Web Workers<br>" +
      "which is not available in your browser.<br>Try a newer browser!";
    document.getElementById("t-head").innerHTML = "Timed Sort: NOT AVAILABLE";
    document.getElementById("t-arrayCt").disabled = true;
    document.getElementById("t-arrayLength").disabled = true;
    document.getElementById("t-algorithm").disabled = true;
    document.getElementById("t-run").disabled = true;
  }
  else {
    document.getElementById("t-arrayCt").value = "10";
    document.getElementById("t-arrayLength").value = "10000";
    document.getElementById("t-algorithm").value = "1";
    document.getElementById("t-run").onclick = doTimedSort;
  }

  document.getElementById("enablelog").checked = true;
}