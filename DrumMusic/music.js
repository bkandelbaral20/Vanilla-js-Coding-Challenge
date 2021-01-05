
//adding event listener
 window.addEventListener('keydown', function (e) {

     //now it is selecting audio element for each keyCode
     const sound = document.querySelector(`audio[data-key="44"]`);

     /*
     All these sounds are 30sec long so when ever user press keys often, it takes time to play from beginning
     so to avoid this, we are setting time to 0 to rewind it.
      */
     sound.currentTime = 0;
     sound.play();

     const sound1 = document.querySelector(`audio[data-key="45"]`);
     sound1.currentTime = 0;
     sound1.play();

     const sound2 = document.querySelector(`audio[data-key="46"]`);
     sound2.currentTime = 0;
     sound2.play();

     const sound3 = document.querySelector(`audio[data-key="47"]`);
     sound3.currentTime = 0;
     sound3.play();

     const sound4 = document.querySelector(`audio[data-key="48"]`);
     sound4.currentTime = 0;
     sound4.play();

     const sound5 = document.querySelector(`audio[data-key="49"]`);
     sound5.currentTime = 0;
     sound5.play();

     const sound6 = document.querySelector(`audio[data-key="50"]`);
     sound6.currentTime = 0;
     sound6.play();

     const sound7 = document.querySelector(`audio[data-key="37"]`);
     sound7.play();

     //if user press unmatched keycode
     if(!sound || !sound1 || !sound2 || !sound3 || !sound4 || !sound5 || !sound6 || !sound7) return;

     });