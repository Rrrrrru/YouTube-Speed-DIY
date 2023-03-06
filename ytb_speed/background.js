console.log('Hello from background.js!');

chrome.runtime.onInstalled.addListener(function() {
  console.log('Hello from onInstalled!');
});

let pressTimer;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'pressDown') {
    console.log("pressdown");
    pressTimer = setTimeout(function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: 'increaseSpeed'});
      });
    }, 500);
  } else if (request.type === 'pressUp') {
    if (pressTimer) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {type: 'reset'});
          });
        clearTimeout(pressTimer);
        pressTimer = null;
    }
  }
});
  








  