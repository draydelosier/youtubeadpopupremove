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