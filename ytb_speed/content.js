console.log('Hello from content.js!');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //request.type :reset的逻辑
    //request.type :decreaseSpeed的逻辑
    if (request.type === 'increaseSpeed') {
      // 执行增加速度的逻辑
      console.log('Received increaseSpeed message');
      let video = document.getElementsByTagName('video')[0];
      console.log(video.playbackRate)
      if (video && !isNaN(video.playbackRate)) {
        //let newRate = video.playbackRate + 0.1;
        let newRate = 2.0;
        video.playbackRate = newRate;
        console.log('Increased playback rate to ' + newRate);
      }
    }
  });
  

  function pressDown(event) {
    if (event.keyCode === 88) {
      chrome.runtime.sendMessage({type: 'pressDown'});
    }
  }
  
  function pressUp(event) {
    if (event.keyCode === 88) {
      chrome.runtime.sendMessage({type: 'pressUp'});
    }
  }
  
  document.addEventListener('keydown', pressDown);
  document.addEventListener('keyup', pressUp);
    
  
  