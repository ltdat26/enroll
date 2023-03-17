// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

//Button Add to List and Text Area
document.getElementById("add").onclick = function() {
    var node = document.createElement("li")
    var text = document.getElementById("input").value;

    //Check if exists
    if((document.getElementById("list").textContent || document.getElementById("list").innerText).indexOf(text) > -1) {
        document.getElementById("warning").innerHTML = "Từ này đã có!";
        sleep(2000).then(() => {
            document.getElementById("warning").innerHTML = "Words input by Datrix";
        });
    }
    else {
        //Add text to List
        var new_words = document.createTextNode(text);
        node.appendChild(new_words);
        document.getElementById("list").appendChild(node);

        //Add text to textarea
        if(document.getElementById("output").value.slice(-2) == "") {
            document.getElementById("output").value += text;
        }
        else {
            document.getElementById("output").value += ", ";
            document.getElementById("output").value += text;
        }

        //Clear Text in input
        document.getElementById("input").value = "";
    }
}

//Button Copy all text in Textarea
document.getElementById("copy").onclick = function() {
    /* Get the text field */
    var copyText = document.getElementById("output");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

//Button Save
function saveTextAsFile() {
    var textToWrite = document.getElementById('output').value;
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    var fileNameToSaveAs = "Skribbl-words-byDatrix26.txt"; //filename.extension

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

var button = document.getElementById('save');
button.addEventListener('click', saveTextAsFile);

function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
}


//Button Clear
document.getElementById("clear").onclick = function(){
    sleep(100).then(() => {
        document.getElementById("input").value = "";
        document.getElementById("list").innerHTML = "";
        document.getElementById("output").value = "";
    });
}