import {ChangeEvent, useState} from "react"

function DeloppgaveA() {

  const [inputText, setInputText] = useState("");
  let language = " ";   

      if (inputText == 'ac'){
       language = "You're from Ascension Island";
      } else if (inputText == 'ad'){
        language = "You're from Andorra";
      } else if (inputText == 'ae'){
       language = "You're from the United Arab Emirates";
      } else if (inputText == 'af'){
       language = "You're from Afghanistan";
      } else if (inputText == 'ag'){
       language = "You're from Antigua and barbuda";
      } else if (inputText == 'ai'){
       language = "You're from Anguilla";
      } else if (inputText == 'al'){
        language = "You're from albania";
      } else if (inputText == 'am'){
        language = "You're from Armenia";
      } else if (inputText == 'ao'){
        language = "You're from Angola";
      } else if (inputText == 'aq'){
        language = "You're from Antarctica";
      } else if (inputText == 'ar'){
        language = "You're from Argentina";
      } else if (inputText == 'as'){
        language = "You're from American Samoa";
      } else if (inputText == 'at'){
        language = "You're from Austria";
      } else if (inputText == 'au'){
        language = "You're from Australia";
      } else if (inputText == 'aw'){
        language = "You're from Aruba";
      } else if (inputText == 'ax'){
        language = "You're from Åland";
      } else if (inputText == 'az'){
        language = "You're from Azerbaijan";
      } else if (inputText == 'ba'){
        language = "You're from Bosnia and Herzegovina";
      } else if (inputText == 'bb'){
        language = "You're from Barbados";
      } else if (inputText == 'bd'){
        language = "You're from Bangladesh";
      } else if (inputText == 'be'){
        language = "You're from Belgium";
      } else if (inputText == 'bf'){
        language = "You're from Burkina Faso";
      } else if (inputText == 'bg'){
        language = "You're from Bulgaria";
      } else if (inputText == 'bh'){
        language = "You're from Bahrain";
      } else if (inputText == 'bi'){
        language = "You're from Burundi";
      } else if (inputText == 'bj'){
        language = "You're from Benin";
      } else if (inputText == 'bm'){
        language = "You're from Bermuda";
      } else if (inputText == 'bn'){
        language = "You're from Brunei";
      } else if (inputText == 'bo'){
        language = "You're from Bolivia";
      } else if (inputText == 'bq'){
        language = "You're from the Caribbean Netherlands, Bonaire, Saba and/or Sint Eustatius";
      } else if (inputText == 'br'){
        language = "You're from Brazil";
      } else if (inputText == 'bs'){
        language = "You're from Bahamas";
      } else if (inputText == 'bt'){
        language = "You're from Bhutan";
      } else if (inputText == 'bw'){
        language = "You're from Botswana";
      } else if (inputText == 'by'){
        language = "You're from Belarus";
      } else if (inputText == 'bz'){
        language = "You're from Belize";
      } else if (inputText == 'ca'){
        language = "You're from Canada";
      } else if (inputText == 'cc'){
        language = "You're from Cocos";
      } else if (inputText == 'cd'){
        language = "You're from the Democratic Republic of the Congo";
      } else if (inputText == 'cf'){
        language = "You're from The Central African Republic";
      } else if (inputText == 'cg'){
        language = "You're from the Republic of Congo";
      } else if (inputText == 'ch'){
        language = "You're from Switzerland";
      } else if (inputText == 'ci'){
        language = "You're from the Ivory Coast";
      } else if (inputText == 'ck'){
        language = "You're from Cook Islands";
      } else if (inputText == 'cl'){
        language = "You're from Chile";
      } else if (inputText == 'cm'){
        language = "You're from Cameroon";
      } else if (inputText == 'cn'){
        language = "You're from China";
      } else if (inputText == 'co'){
        language = "You're from Colombia";
      } else if (inputText == 'cr'){
        language = "You're from Costa Rica";
      } else if (inputText == 'cu'){
        language = "You're from Cuba";
      } else if (inputText == 'cv'){
        language = "You're from Cape Verde";
      } else if (inputText == 'cw'){
        language = "You're from Curaçao";
      } else if (inputText == 'cx'){
        language = "You're from Christmas Island";
      } else if (inputText == 'cy'){
        language = "You're from Cyprus";
      } else if (inputText == 'cz'){
        language = "You're from the Czech Republic";
      } else if (inputText == 'de'){
        language = "You're from Germany";
      } else if (inputText == 'dj'){
        language = "You're from Djibouti";
      } else if (inputText == 'dk'){
        language = "You're from Denmark";
      } else if (inputText == 'dm'){
        language = "You're from Dominica";
      } else if (inputText == 'do'){
        language = "You're from the Dominican Republic";
      } else if (inputText == 'dz'){
        language = "You're from Algeria";
      } else if (inputText == 'ec'){
        language = "You're from Ecuador";
      } else if (inputText == 'ee'){
        language = "You're from Estonia";
      } else if (inputText == 'eg'){
        language = "You're from Egypt";
      } else if (inputText == 'eh'){
        language = "You're from Western Sahara";
      } else if (inputText == 'er'){
        language = "You're from Eritrea";
      } else if (inputText == 'es'){
        language = "You're from Spain";
      } else if (inputText == 'et'){
        language = "You're from Ethiopia";
      } else if (inputText == 'fi'){
        language = "You're from Finland";
      } else if (inputText == 'fj'){
        language = "You're from Fiji";
      } else if (inputText == 'fk'){
        language = "You're from the Falkland Islands";
      } else if (inputText == 'fm'){
        language = "You're from the Federated states of Micronesia";
      } else if (inputText == 'fo'){
        language = "You're from the Faroe Islands";
      } else if (inputText == 'fr'){
        language = "You're from France";
      } else if (inputText == 'ga'){
        language = "You're from Gabon";
      } else if (inputText == 'gd'){
        language = "You're from Grenada";
      } else if (inputText == 'ge'){
        language = "You're from Georgia";
      } else if (inputText == 'gf'){
        language = "You're from French Guiana";
      } else if (inputText == 'gg'){
        language = "You're from Guernsey";
      } else if (inputText == 'gh'){
        language = "You're from Ghana";
      } else if (inputText == 'gi'){
        language = "You're from Gibraltar";
      } else if (inputText == 'gl'){
        language = "You're from Greenland";
      } else if (inputText == 'gm'){
        language = "You're from The Gambia";
      } else if (inputText == 'gn'){
        language = "You're from Guinea";
      } else if (inputText == 'gp'){
        language = "You're from Guadeloupe";
      } else if (inputText == 'gq'){
        language = "You're from Equatorial Guinea";
      } else if (inputText == 'gr'){
        language = "You're from Greece";
      } else if (inputText == 'gs'){
        language = "You're from South Georgia and the South Sandwich Islands";
      } else if (inputText == 'gt'){
        language = "You're from Guatemala";
      } else if (inputText == 'Gu'){
        language = "You're from Guam";
      } else if (inputText == 'gw'){
        language = "You're from Guinea-Bissau";
      } else if (inputText == 'gy'){
        language = "You're from Guyana";
      } else if (inputText == 'hk'){
        language = "You're from Hong Kong";
      } else if (inputText == 'hm'){
        language = "You're from Heard Island and McDonald Islands";
      } else if (inputText == 'hn'){
        language = "You're from Honduras";
      } else if (inputText == 'hr'){
        language = "You're from Croatia";
      } else if (inputText == 'ht'){
        language = "You're from Haiti";
      } else if (inputText == 'hu'){
        language = "You're from Hungary";
      } else if (inputText == 'id'){
        language = "You're from Indonesia";
      } else if (inputText == 'ie'){
        language = "You're from Ireland";
      } else if (inputText == 'il'){
        language = "You're from Isreal";
      } else if (inputText == 'im'){
        language = "You're from Isle of Man";
      } else if (inputText == 'in'){
        language = "You're from India";
      } else if (inputText == 'io'){
        language = "You're from the British Indian Ocean Territory";
      } else if (inputText == 'iq'){
        language = "You're from Iraq";
      } else if (inputText == 'ir'){
        language = "You're from Iran";
      } else if (inputText == 'is'){
        language = "You're from Iceland";
      } else if (inputText == 'it'){
        language = "You're from Italy";
      } else if (inputText == 'je'){
        language = "You're from Jersey";
      } else if (inputText == 'jm'){
        language = "You're from Jamaica";
      } else if (inputText == 'jo'){
        language = "You're from Jordan";
      } else if (inputText == 'jp'){
        language = "You're from Japan";
      } else if (inputText == 'ke'){
        language = "You're from Kenya";
      } else if (inputText == 'kg'){
        language = "You're from Kyrgyzstan";
      } else if (inputText == 'kh'){
        language = "You're from Cambodia";
      } else if (inputText == 'ki'){
        language = "You're from Kiribati";
      } else if (inputText == 'km'){
        language = "You're from Comoros";
      } else if (inputText == 'kn'){
        language = "You're from Saint Kitts and Nevis";
      } else if (inputText == 'kp'){
        language = "You're from North Korea";
      } else if (inputText == 'kr'){
        language = "You're from South Korea";
      } else if (inputText == 'kw'){
        language = "You're from Kuwait";
      } else if (inputText == 'ky'){
        language = "You're from the Cayman Islands";
      } else if (inputText == 'kz'){
        language = "You're from Kazakhstan";
      } else if (inputText == 'la'){
        language = "You're from Laos";
      } else if (inputText == 'lb'){
        language = "You're from Lebanon";
      } else if (inputText == 'lc'){
        language = "You're from Saint Lucia";
      } else if (inputText == 'li'){
        language = "You're from Liechtenstein";
      } else if (inputText == 'lk'){
        language = "You're from Sri Lanka";
      } else if (inputText == 'lr'){
        language = "You're from Liberia";
      } else if (inputText == 'ls'){
        language = "You're from lesotho";
      } else if (inputText == 'lt'){
        language = "You're from Lithuania";
      } else if (inputText == 'lu'){
        language = "You're from Luxembourg";
      } else if (inputText == 'lv'){
        language = "You're from Latvia";
      } else if (inputText == 'ly'){
        language = "You're from Libya";
      } else if (inputText == 'ma'){
        language = "You're from Morocco";
      } else if (inputText == 'mc'){
        language = "You're from Monaco";
      } else if (inputText == 'md'){
        language = "You're from Moldova";
      } else if (inputText == 'me'){
        language = "You're from Montenegro";
      } else if (inputText == 'mg'){
        language = "You're from Madagascar";
      } else if (inputText == 'mh'){
        language = "You're from the Marshall Islands";
      } else if (inputText == 'mk'){
        language = "You're from North Macedonia";
      } else if (inputText == 'ml'){
        language = "You're from Mali";
      } else if (inputText == 'mm'){
        language = "You're from Myanmar";
      } else if (inputText == 'mn'){
        language = "You're from Mongolia";
      } else if (inputText == 'mo'){
        language = "You're from Macau";
      } else if (inputText == 'mp'){
        language = "You're from the Northern Mariana Islands";
      } else if (inputText == 'mq'){
        language = "You're from Martinique";
      } else if (inputText == 'mr'){
        language = "You're from Mauritania";
      } else if (inputText == 'ms'){
        language = "You're from Montserrat";
      } else if (inputText == 'mt'){
        language = "You're from Malta";
      } else if (inputText == 'mu'){
        language = "You're from Mauritius";
      } else if (inputText == 'mv'){
        language = "You're from Maldives";
      } else if (inputText == 'mw'){
        language = "You're from Malawi";
      } else if (inputText == 'mx'){
        language = "You're from Mexico";
      } else if (inputText == 'my'){
        language = "You're from Malaysia";
      } else if (inputText == 'mz'){
        language = "You're from Mozambique";
      } else if (inputText == 'na'){
        language = "You're from Nambia";
      } else if (inputText == 'nc'){
        language = "You're from New Caledonia";
      } else if (inputText == 'ne'){
        language = "You're from Niger";
      } else if (inputText == 'nf'){
        language = "You're from Norfolk Island";
      } else if (inputText == 'ng'){
        language = "You're from Nigeria";
      } else if (inputText == 'ni'){
        language = "You're from Nicaragua";
      } else if (inputText == 'nl'){
        language = "You're from the Netherlands";
      } else if (inputText == 'no'){
        language = "You're from Norway";
      } else if (inputText == 'np'){
        language = "You're from Nepal";
      } else if (inputText == 'nr'){
        language = "You're from Nauru";
      } else if (inputText == 'nu'){
        language = "You're from Niue";
      } else if (inputText == 'nz'){
        language = "You're from New Zealand";
      } else if (inputText == 'om'){
        language = "You're from Oman";
      } else if (inputText == 'pa'){
        language = "You're from Panama";
      } else if (inputText == 'pe'){
        language = "You're from Peru";
      } else if (inputText == 'pf'){
        language = "You're from French Polynesia";
      } else if (inputText == 'pg'){
        language = "You're from Papua New Guinea";
      } else if (inputText == 'ph'){
        language = "You're from the Philippines";
      } else if (inputText == 'pk'){
        language = "You're from Pakistan";
      } else if (inputText == 'pl'){
        language = "You're from Poland";
      } else if (inputText == 'pm'){
        language = "You're from Saint Pierre and Miquelon";
      } else if (inputText == 'pn'){
        language = "You're from Pitcairn Islands";
      } else if (inputText == 'pr'){
        language = "You're from Puerto Rico";
      } else if (inputText == 'ps'){
        language = "You're from Palestine";
      } else if (inputText == 'pt'){
        language = "You're from Portugal";
      } else if (inputText == 'pw'){
        language = "You're from Palau";
      } else if (inputText == 'py'){
        language = "You're from Paraguay";
      } else if (inputText == 'qa'){
        language = "You're from Quatar";
      } else if (inputText == 're'){
        language = "You're from Réunion";
      } else if (inputText == 'ro'){
        language = "You're from Romainia";
      } else if (inputText == 'rs'){
        language = "You're from Serbia";
      } else if (inputText == 'ru'){
        language = "You're from Russia";
      } else if (inputText == 'rw'){
        language = "You're from Rwanda";
      } else if (inputText == 'sa'){
        language = "You're from Saudi Arabia";
      } else if (inputText == 'sb'){
        language = "You're from the Solomon Islands";
      } else if (inputText == 'sc'){
        language = "You're from Seychelles";
      } else if (inputText == 'sd'){
        language = "You're from Sudan";
      } else if (inputText == 'se'){
        language = "You're from Sweden";
      } else if (inputText == 'sg'){
        language = "You're from Singapore";
      } else if (inputText == 'sh'){
        language = "You're from Saint helena, Ascention and Tristan da Cunha";
      } else if (inputText == 'si'){
        language = "You're from Slovenia";
      } else if (inputText == 'sk'){
        language = "You're from Slovakia";
      } else if (inputText == 'sl'){
        language = "You're from Sierra Leone";
      } else if (inputText == 'sm'){
        language = "You're from San Marino";
      } else if (inputText == 'sn'){
        language = "You're from Senegal";
      } else if (inputText == 'so'){
        language = "You're from Somalia";
      } else if (inputText == 'sr'){
        language = "You're from Suriname";
      } else if (inputText == 'ss'){
        language = "You're from South Sudan";
      } else if (inputText == 'st'){
        language = "You're from São Tomé and Príncipe";
      } else if (inputText == 'su'){
        language = "You're from the Soviet Union";
      } else if (inputText == 'sv'){
        language = "You're from El Salvador";
      } else if (inputText == 'sx'){
        language = "You're from Sint Maarten";
      } else if (inputText == 'sy'){
        language = "You're from Syria";
      } else if (inputText == 'sz'){
        language = "You're from Eswatini";
      } else if (inputText == 'tc'){
        language = "You're from Turks and Caicos Islands";
      } else if (inputText == 'td'){
        language = "You're from Chad";
      } else if (inputText == 'tf'){
        language = "You're from French Southern and Antarctic Lands";
      } else if (inputText == 'tg'){
        language = "You're from Togo";
      } else if (inputText == 'th'){
        language = "You're from Thailand";
      } else if (inputText == 'tj'){
        language = "You're from Tajikistan";
      } else if (inputText == 'tk'){
        language = "You're from tokelau";
      } else if (inputText == 'tl'){
        language = "You're from East Timor";
      } else if (inputText == 'tm'){
        language = "You're from Turkmenistan";
      } else if (inputText == 'tn'){
        language = "You're from Tunisia";
      } else if (inputText == 'to'){
        language = "You're from Tonga";
      } else if (inputText == 'tr'){
        language = "You're from Turkey";
      } else if (inputText == 'tt'){
        language = "You're from Trinidad and Tobago";
      } else if (inputText == 'tv'){
        language = "You're from Tuvalu";
      } else if (inputText == 'tw'){
        language = "You're from Taiwan";
      } else if (inputText == 'tz'){
        language = "You're from Tanzania";
      } else if (inputText == 'ua'){
        language = "You're from Ukraine";
      } else if (inputText == 'ug'){
        language = "You're from Uganda";
      } else if (inputText == 'uk'){
        language = "You're from the United Kingdom";
      } else if (inputText == 'us'){
        language = "You're from the United States of America";
      } else if (inputText == 'uy'){
        language = "You're from Uruguay";
      } else if (inputText == 'uz'){
        language = "You're from Uzbekistan";
      } else if (inputText == 'va'){
        language = "You're from Vatican city";
      } else if (inputText == 'vc'){
        language = "You're from Saint Vincent and the Grenadines";
      } else if (inputText == 've'){
        language = "You're from Venezuela";
      } else if (inputText == 'vg'){
        language = "You're from the British Virgin Islands";
      } else if (inputText == 'vi'){
        language = "You're from the United States Virgin Islands";
      } else if (inputText == 'vn'){
        language = "You're from Vietnam";
      } else if (inputText == 'vu'){
        language = "You're from Vanuatu";
      } else if (inputText == 'wf'){
        language = "You're from Wallis and Futuna";
      } else if (inputText == 'ws'){
        language = "You're from Samoa";
      } else if (inputText == 'ye'){
        language = "You're from Yemen";
      } else if (inputText == 'yt'){
        language = "You're from Mayotte";
      } else if (inputText == 'za'){
        language = "You're from South Africa";
      } else if (inputText == 'zm'){
        language = "You're from Zambia";
      } else if (inputText == 'zw'){
        language = "You're from Zimbabwe";
      } else {
       language = "Your country code top-level domain isn't registered";
      }

const change = event => {
    setInputText(event.target.value)
}
  
  return (
      <div className="deloppgave">
        <h2>Please input your country code top-level domain</h2>
        <form>
            <input type='text' onChange={change} value={inputText}/>
        </form>
        <p>{language}</p>      
      </div>
    );
  }

  export default function Oppgave4() {
    return (
      <>
        <h2> Oppgave 3</h2>
        <DeloppgaveA />
      </>
    );
  }