
//lets make clock function-able

const secondHand = document.querySelector('.hand-second');

function setDate() {
    //creating instance of now to get the actual time ( hours, mins and second)
    const now = new Date();

    //*************for seconds
    const second = now.getSeconds();
    // console.log(second);
// now we are getting seconds into number but we have to changed it into degree in a circle
//we are adding 90 at last because by default it rotate left to right but we want to rotate it top-bottom(12-6).
    const secondDegree = ((second/60) * 360) + 90;
    secondHand.style.transform =`rotate(${secondDegree}deg)`;



}

setInterval(setDate, 1000);

// setDate();