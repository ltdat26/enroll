const FooterData = [
  {
    link: '#',
    title: 'Contact Us'
  },
  {
    link: '#',
    title: 'Press Resources'
  },
  {
    link: '#',
    title: 'Legal Info'
  },
  {
    link: '#',
    title: 'Privacy Policy'
  },
  {
    link: '#',
    title: 'Cookie Settings'
  },
  {
    link: '#',
    title: 'Imprint'
  },
]

const Footer = () => {
  return (
    <div className="md:px-20 px-16 md:py-32 py-16">
      <h2 className="md:text-5xl text-4xl font-bold md:pb-16 pb-10">Ableton</h2>
      <div className="flex md:flex-row flex-col pb-16">
        <div className="flex flex-col w-2/5 bg-red-500">
          <div className="flex flex-col">
            <a className="after:content-['>'] after:ml-0.5" href="#">Register Live or Push</a>
            <a className="after:content-['>'] after:ml-0.5" href="#">About Ableton</a>
            <a className="after:content-['>'] after:ml-0.5" href="#">Jobs</a>
          </div>
          <div className="flex flex-row">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="40" height="40"
                viewBox="0 0 48 48"><linearGradient id="CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1" x1="9.993" x2="40.615" y1="-299.993" y2="-330.615" gradientTransform="matrix(1 0 0 -1 0 -290)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1)" d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"></path><path d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z" opacity=".05"></path><path d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z" opacity=".05"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"></path></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="40" height="40"
                viewBox="0 0 48 48"><linearGradient id="MJy9k6AlNL0BTsRkEkukAa_bUGbDbW2XLqs_gr1" x1="8.455" x2="40.88" y1="7.883" y2="41.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#MJy9k6AlNL0BTsRkEkukAa_bUGbDbW2XLqs_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path d="M20,35c-3.24,0-6.351-0.794-8.535-2.178l-0.337-0.213l0.592-1.671l0.396,0.046	c0.149,0.018,0.266,0.021,0.385,0.021L12.995,31c0.997,0,2.452-0.16,3.846-0.577c-1.396-0.476-3.166-1.401-3.72-3.115L12.697,26	h1.027C12.625,24.997,12,23.602,12,22.057v-1.62l0.609,0.281c-0.395-0.765-0.604-1.537-0.604-2.262c0-1.049,0.278-2.075,0.806-2.966	l0.729-1.228l0.906,1.102c1.997,2.431,5.244,5.096,8.554,5.563V20c0-3.364,2.468-6,5.617-6c1.545,0,2.883,0.442,3.888,1.281	c1.039-0.261,2.308-0.743,2.989-1.144l2.264-1.332l-0.807,2.5c-0.038,0.12-0.086,0.24-0.144,0.362l1.939-0.859l-2.158,3.233	c-0.449,0.683-0.875,1.332-1.595,1.939C34.998,20.239,35,20.511,35,20.63C35,27.596,29.743,35,20,35z" opacity=".05"></path><path d="M20,34.5c-3.147,0-6.161-0.766-8.268-2.101l0.325-0.919c0.172,0.02,0.306,0.025,0.442,0.025L13,31.5	c1.613,0,3.799-0.369,5.475-1.163c-2.026-0.377-4.306-1.415-4.878-3.184L13.385,26.5h0.688c0.476,0,0.855-0.025,1.165-0.065	c-1.703-0.855-2.737-2.454-2.737-4.378v-0.838l0.737,0.341c0.215,0.116,0.501,0.249,0.813,0.378c-0.88-1.01-1.545-2.255-1.545-3.481	c0-0.959,0.255-1.897,0.736-2.711l0.364-0.614l0.453,0.551c2.209,2.689,5.804,5.554,9.44,5.8V20c0-3.084,2.248-5.5,5.117-5.5	c1.529,0,2.819,0.458,3.751,1.328c1.124-0.252,2.585-0.792,3.379-1.259l1.132-0.666l-0.403,1.25	c-0.191,0.594-0.654,1.192-1.197,1.726c0.174-0.068,0.348-0.14,0.52-0.216l1.577-0.699l-1.202,1.801	c-0.483,0.736-0.906,1.38-1.683,1.981c0.006,0.303,0.01,0.727,0.01,0.883C34.5,27.354,29.418,34.5,20,34.5z" opacity=".07"></path><path fill="#fff" d="M36,15c-0.951,0.559-2.671,1.156-3.793,1.372C31.311,15.422,30.033,15,28.617,15	C25.897,15,24,17.305,24,20v2c-4,0-7.9-3.047-10.327-6c-0.427,0.721-0.667,1.565-0.667,2.457c0,1.819,1.671,3.665,2.994,4.543	c-0.807-0.025-2.335-0.641-3-1v0.057c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27	c0.626,1.935,3.773,2.958,5.928,3c-1.686,1.307-4.692,2-7,2c-0.399,0-0.615,0.022-1-0.023C14.178,33.357,17.22,34,20,34	c9.057,0,14-6.918,14-13.37c0-0.212-0.007-0.922-0.018-1.13c0.968-0.682,1.36-1.396,2.018-2.38c-0.882,0.391-1.999,0.758-3,0.88	C34.018,17.396,35.633,16.138,36,15z"></path></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="40" height="40"
                viewBox="0 0 48 48"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="40" height="40"
                viewBox="0 0 48 48"><path fill="#f55376" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fac8d5" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fac8d5"></circle><path fill="#fac8d5" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18 z"></path></svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-2/5 bg-amber-500">
          <p className="font-bold">Education</p>
          <a className="after:content-['>'] after:ml-0.5" href="#">Offers for students and teachers</a>
          <a className="after:content-['>'] after:ml-0.5" href="#">Ableton for the Classroom</a>
          <a className="after:content-['>'] after:ml-0.5" href="#">Ableton for Colleges and Universities</a>
        </div>
        <div className="flex flex-col w-3/4 bg-green-500">
          <p className="font-bold">Sign up to our newsletter</p>
          <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
          <div className="flex flex-row">
            <input className="bg-gray-200 px-3 w-3/5" type="text" placeholder="Email Address" />
            <a className="text-white font-medium bg-[#0000ff] text-center px-4 py-2" href="#">Sign up</a>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col pb-16">
        <div className="flex flex-col w-2/5">
          <p className="font-bold">Community</p>
          <a className="after:content-['>'] after:ml-0.5" href="#">Find Ableton User Groups</a>
          <a className="after:content-['>'] after:ml-0.5" href="#">Find Certified Training</a>
          <a className="after:content-['>'] after:ml-0.5" href="#">Become a Certified Trainer</a>
        </div>
        <div className="flex flex-col w-2/5">
          <p className="font-bold">Distributors</p>
          <a className="after:content-['>'] after:ml-0.5" href="#">Find Distributors</a>
          <a className="after:content-['>'] after:ml-0.5" href="#">Try Push in-store</a>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Language and Location</p>
          <div className="flex flex-row">
            <select className="bg-gray-200 p-1.5" name="language"><option value="en">English</option><option value="de">Deutsch</option><option value="fr">Français</option><option value="ja">日本語</option><option value="zh-cn">简体中文</option></select>

            <select className="max-w-xs bg-gray-200 ml-1 p-1.5" name="country_code"><option value="">Please choose</option><optgroup label="Common Countries"><option value="us">United States</option><option value="uk">United Kingdom</option><option value="fr">France</option><option value="de">Germany</option><option value="ca">Canada</option><option value="jp">Japan</option><option value="cn">China</option></optgroup><optgroup label="All Countries/Regions"><option value="af">Afghanistan</option><option value="ax">Aland Islands</option><option value="al">Albania</option><option value="dz">Algeria</option><option value="as">American Samoa</option><option value="ad">Andorra</option><option value="ao">Angola</option><option value="ai">Anguilla</option><option value="aq">Antarctica</option><option value="ag">Antigua And Barbuda</option><option value="ar">Argentina</option><option value="am">Armenia</option><option value="aw">Aruba</option><option value="au">Australia</option><option value="at">Austria</option><option value="az">Azerbaijan</option><option value="bs">Bahamas</option><option value="bh">Bahrain</option><option value="bd">Bangladesh</option><option value="bb">Barbados</option><option value="by">Belarus</option><option value="be">Belgium</option><option value="bz">Belize</option><option value="bj">Benin</option><option value="bm">Bermuda</option><option value="bt">Bhutan</option><option value="bo">Bolivia</option><option value="bq">Bonaire, Sint Eustatius and Saba</option><option value="ba">Bosnia And Herzegovina</option><option value="bw">Botswana</option><option value="bv">Bouvet Island</option><option value="br">Brazil</option><option value="io">British Indian Ocean Territory</option><option value="bn">Brunei Darussalam</option><option value="bg">Bulgaria</option><option value="bf">Burkina Faso</option><option value="bi">Burundi</option><option value="kh">Cambodia</option><option value="cm">Cameroon</option><option value="ca">Canada</option><option value="cv">Cape Verde</option><option value="ky">Cayman Islands</option><option value="cf">Central African Republic</option><option value="td">Chad</option><option value="cl">Chile</option><option value="cn">China</option><option value="cx">Christmas Island</option><option value="cc">Cocos (Keeling) Islands</option><option value="co">Colombia</option><option value="km">Comoros</option><option value="cg">Congo</option><option value="cd">Congo, The Democratic Republic Of The</option><option value="ck">Cook Islands</option><option value="cr">Costa Rica</option><option value="ci">Cote D'Ivoire</option><option value="hr">Croatia</option><option value="cu">Cuba</option><option value="cw">Curacao</option><option value="cy">Cyprus</option><option value="cz">Czech Republic</option><option value="dk">Denmark</option><option value="dj">Djibouti</option><option value="dm">Dominica</option><option value="do">Dominican Republic</option><option value="ec">Ecuador</option><option value="eg">Egypt</option><option value="sv">El Salvador</option><option value="gq">Equatorial Guinea</option><option value="er">Eritrea</option><option value="ee">Estonia</option><option value="et">Ethiopia</option><option value="fk">Falkland Islands (Malvinas)</option><option value="fo">Faroe Islands</option><option value="fj">Fiji</option><option value="fi">Finland</option><option value="fr">France</option><option value="gf">French Guiana</option><option value="pf">French Polynesia</option><option value="ga">Gabon</option><option value="gm">Gambia</option><option value="ge">Georgia</option><option value="de">Germany</option><option value="gh">Ghana</option><option value="gi">Gibraltar</option><option value="gr">Greece</option><option value="gl">Greenland</option><option value="gd">Grenada</option><option value="gp">Guadeloupe</option><option value="gu">Guam</option><option value="gt">Guatemala</option><option value="gg">Guernsey</option><option value="gn">Guinea</option><option value="gw">Guinea-Bissau</option><option value="gy">Guyana</option><option value="ht">Haiti</option><option value="hm">Heard Island And McDonald Islands</option><option value="hn">Honduras</option><option value="hk">Hong Kong SAR, China</option><option value="hu">Hungary</option><option value="is">Iceland</option><option value="in">India</option><option value="id">Indonesia</option><option value="ir">Iran (Islamic Republic Of)</option><option value="iq">Iraq</option><option value="ie">Ireland</option><option value="im">Isle Of Man</option><option value="il">Israel</option><option value="it">Italy</option><option value="jm">Jamaica</option><option value="jp">Japan</option><option value="je">Jersey</option><option value="jo">Jordan</option><option value="kz">Kazakhstan</option><option value="ke">Kenya</option><option value="ki">Kiribati</option><option value="kp">Korea, Democratic People's Republic</option><option value="kr">Korea, Republic Of</option><option value="kw">Kuwait</option><option value="kg">Kyrgyzstan</option><option value="la">Lao People's Democratic Republic</option><option value="lv">Latvia</option><option value="lb">Lebanon</option><option value="ls">Lesotho</option><option value="lr">Liberia</option><option value="ly">Libya</option><option value="li">Liechtenstein</option><option value="lt">Lithuania</option><option value="lu">Luxembourg</option><option value="mo">Macao SAR, China</option><option value="mk">Macedonia, Republic of</option><option value="mg">Madagascar</option><option value="mw">Malawi</option><option value="my">Malaysia</option><option value="mv">Maldives</option><option value="ml">Mali</option><option value="mt">Malta</option><option value="mh">Marshall Islands</option><option value="mq">Martinique</option><option value="mr">Mauritania</option><option value="mu">Mauritius</option><option value="yt">Mayotte</option><option value="mx">Mexico</option><option value="fm">Micronesia, Federated States Of</option><option value="md">Moldova, Republic Of</option><option value="mc">Monaco</option><option value="mn">Mongolia</option><option value="me">Montenegro</option><option value="ms">Montserrat</option><option value="ma">Morocco</option><option value="mz">Mozambique</option><option value="mm">Myanmar</option><option value="na">Namibia</option><option value="nr">Nauru</option><option value="np">Nepal</option><option value="nl">Netherlands</option><option value="nc">New Caledonia</option><option value="nz">New Zealand</option><option value="ni">Nicaragua</option><option value="ne">Niger</option><option value="ng">Nigeria</option><option value="nu">Niue</option><option value="nf">Norfolk Island</option><option value="mp">Northern Mariana Islands</option><option value="no">Norway</option><option value="om">Oman</option><option value="pk">Pakistan</option><option value="pw">Palau</option><option value="ps">Palestinian Territory, Occupied</option><option value="pa">Panama</option><option value="pg">Papua New Guinea</option><option value="py">Paraguay</option><option value="pe">Peru</option><option value="ph">Philippines</option><option value="pn">Pitcairn</option><option value="pl">Poland</option><option value="pt">Portugal</option><option value="pr">Puerto Rico</option><option value="qa">Qatar</option><option value="re">Reunion</option><option value="ro">Romania</option><option value="ru">Russian Federation</option><option value="rw">Rwanda</option><option value="sh">Saint Helena</option><option value="kn">Saint Kitts And Nevis</option><option value="lc">Saint Lucia</option><option value="mf">Saint Martin (French Part)</option><option value="pm">Saint Pierre And Miquelon</option><option value="vc">Saint Vincent And The Grenadines</option><option value="ws">Samoa</option><option value="sm">San Marino</option><option value="st">Sao Tome And Principe</option><option value="sa">Saudi Arabia</option><option value="sn">Senegal</option><option value="rs">Serbia</option><option value="sc">Seychelles</option><option value="sl">Sierra Leone</option><option value="sg">Singapore</option><option value="sx">Sint Maarten</option><option value="sk">Slovakia</option><option value="si">Slovenia</option><option value="sb">Solomon Islands</option><option value="so">Somalia</option><option value="za">South Africa</option><option value="gs">South Georgia And The South Sandwich Islands</option><option value="ss">South Sudan</option><option value="es">Spain</option><option value="ic">Canary Islands (Spain)</option><option value="lk">Sri Lanka</option><option value="sd">Sudan</option><option value="sr">Suriname</option><option value="sj">Svalbard And Jan Mayen</option><option value="sz">Swaziland</option><option value="se">Sweden</option><option value="ch">Switzerland</option><option value="sy">Syrian Arab Republic</option><option value="tw">Taiwan</option><option value="tj">Tajikistan</option><option value="tz">Tanzania, United Republic Of</option><option value="tf">Territory of the French Southern and Antarctic Lands</option><option value="th">Thailand</option><option value="tl">Timor-Leste</option><option value="tg">Togo</option><option value="tk">Tokelau</option><option value="to">Tonga</option><option value="tt">Trinidad And Tobago</option><option value="tn">Tunisia</option><option value="tr">Turkey</option><option value="tm">Turkmenistan</option><option value="tc">Turks And Caicos Islands</option><option value="tv">Tuvalu</option><option value="ug">Uganda</option><option value="ua">Ukraine</option><option value="ae">United Arab Emirates</option><option value="uk">United Kingdom</option><option value="us">United States</option><option value="um">United States Minor Outlying Islands</option><option value="uy">Uruguay</option><option value="uz">Uzbekistan</option><option value="vu">Vanuatu</option><option value="va">Vatican City State (Holy See)</option><option value="ve">Venezuela</option><option value="vn">Viet Nam</option><option value="vg">Virgin Islands (British)</option><option value="vi">Virgin Islands (U.S.)</option><option value="wf">Wallis And Futuna</option><option value="eh">Western Sahara</option><option value="ye">Yemen</option><option value="zm">Zambia</option><option value="zw">Zimbabwe</option></optgroup></select>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between text-xs font-semibold">
        <div className="flex md:flex-row flex-col ">
          {FooterData.map((item) => (
            <a className="md:px-3 py-2 md:first:pl-0" href={item.link}>{item.title}</a>
          ))}
        </div>
        <div className="flex flex-row-reverse justify-end md:flex-row">
          <p className="mr-5">Made in Verlin</p>
          <svg width='45' height='21' viewBox='0 0 45 21'>
            <title>Abletoon</title>
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Footer