
//lets make clock function-able

const secondHand = document.querySelector('.hand-second');
const minHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');

function setDate() {
    //creating instance of now to get the actual time ( hours, mins and second)
    const now = new Date();

    //************* for seconds ***************
    const second = now.getSeconds();
    // console.log(second);
// now we are getting seconds into number but we have to changed it into degree in a circle
//we are adding 90 at last because by default it rotate left to right but we want to rotate it top-bottom(12-6).
    const secondDegree = ((second/60) * 360) + 90;
    secondHand.style.transform =`rotate(${secondDegree}deg)`;


    //************* for minute *****************
    const min = now.getMinutes();
    const minDegree = ((min/60) * 360)+90;
    minHand.style.transform=`rotate(${minDegree}deg)`;


    //************* for hour *****************
    const hour = now.getHours();
    //we are dividing 12 because we have 12 hours in clock
    const hourDegree = ((hour/12) * 360)+90;
    hourHand.style.transform=`rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
