//adding event listener
window.addEventListener('keydown', function (e) {

    //now it is selecting audio element for each keyCode
    const sound = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}]`);

    console.log(e.code);

    /*
    if it is not the audio keycode then function will break from here and does not run the other commands
     */

    if (!sound) return;

    /*
    All these sounds are 3sec long so when ever user press keys often, it takes time to play from beginning
    so to avoid this, we are setting time to 0 to rewind it.
     */

    sound.currentTime = 0;
    sound.play();

//  Adding new class into key so that it will show the transform style
    key.classList.add('press');

});

/*
 we have added the press class which will display the transform whenever user press on keycode but we also need
 to remove that effect because it looks weird if all keys are transform.
 */

function removeStyle(e){
    //if it is not keycode then exit the function
    if (e.propertyName !== 'transform') return;
    //then remove press class
    this.classList.remove('press');
}
 const keys = document.querySelectorAll('.key');
 //we are ending style for every key
 keys.forEach(key => key.addEventListener('styleEnd', removeStyle));



