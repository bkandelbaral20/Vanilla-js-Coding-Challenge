
//adding event listener
 window.addEventListener('keydown', function (e) {

     //now it is selecting audio element for each keyCode
     const sound = document.querySelector(`audio[data-key=${e.code}]`);
     console.log(e.code);

     /*
     if it is not the audio keycode then function will break from here and does not run the other commands
      */

     if(!sound) return;

     /*
     All these sounds are 3sec long so when ever user press keys often, it takes time to play from beginning
     so to avoid this, we are setting time to 0 to rewind it.
      */

     sound.currentTime = 0;
     sound.play();

     });