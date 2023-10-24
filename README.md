# Youtube Adblock Popup Remover

## Installation
* Install tampermonkey extension for your browser
* Chrome link: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
* Click on tampermonkey extension in your browsers extension bar and select >> Create a new  script
* Copy and paste the code snippet below and save it (ctrl+s) (also provided in the .js file included if you download the zip)
* open youtube, it should be working
* if it's not, hit ctrl+shift+r on the youtube tab and then click the tampermonkey icon once more, and verify that the script "Youtube adblock block block" script slider toggle is set to green (toggled on). Hit ctrl+shift+r once more for a hard page refresh. It should now be working. 

* Note: If you want to verify that its working you can hit ctrl + shift + i on chrome to open the developer console and go to the console tab and you will see "Removed Adblock popup" in the messages if there was a popup on your youtube tab

## Create a new script copy and paste code snippet
```
// ==UserScript==
// @name         YouTube Adblock Block Block
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stop. Get some help.
// @author       Dray DeLosier
// @match        *://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

function myMethod(){
        var x = document.getElementsByClassName("yt-spec-touch-feedback-shape__fill");
    if (x.length > 0 ){
        for (var i = 0; i < x.length; i++){
            x[i].remove();
        };
        console.log("REMOVED ADBLOCK POPUP");console.log("REMOVED ADBLOCK POPUP");console.log("REMOVED ADBLOCK POPUP");console.log("REMOVED ADBLOCK POPUP");console.log("REMOVED ADBLOCK POPUP");
}
    setTimeout(myMethod, 100);
};

window.onload= setTimeout(myMethod, 500)

```

## License 
* This project is MIT licensed

## Authors
* Dray DeLosier