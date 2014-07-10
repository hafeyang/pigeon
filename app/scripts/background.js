'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

//chrome.browserAction.setBadgeText({text: '13'});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
	if(details.url=="http://localhost/a"){
		return {redirectUrl:"data:text/html,{\"a\":\"1\"}"};
	}else{
		return {};
	}
}, {urls: ["<all_urls>"],types:["xmlhttprequest","script","main_frame"]}, ["blocking"]);


