// I did not write this code
// hamburger menu
//variables initialised and classes of hamburger and nav links are retrieved
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

//event listener is added which toggles the classes 
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Skills code

// variables initialised by retrieving classes
let button = document.querySelector('.btn');
let skillDescription = document.querySelector('.skill-description');
let skillHeader = document.querySelector('.skill-header');

// an array of objects which contain all the skills and the skill headers
const skills = [{
    skillDescription: 'I was an aerospace engineer for SpaceX. I am the only aerospace engineer without an aerospace engineering degree. On the job, I developed many designs for new aircrafts and satellites, which could potentially reach Neptune',
    skillHeader: 'Aerospace Engineer 2031-32'
},{
    skillDescription: 'I worked with NASA in making sure the space station stayed in great condition, this included cleaning, checking equipment, and repairing or replacing broken equipment. As well as this, my time at NASA required rigorous training which varied based on the difficulty of a mission',
    skillHeader: 'NASA 2027-29'
},{
    skillDescription: 'I went to the Moon as part of a NASA mission as they needed a test flight for one of their newer spacecrafts. This spacecraft could travel from Earth to the Moon in a single day so we needed to undergo training to withstand the high speed.',
    skillHeader: 'NASA Moon Mission 2028'
},{
    skillDescription: 'I worked with SpaceX for a short but great time. Although I was new, I managed to learn a lot due to SpaceXs efficiency in the workplace. Working here also required me to analyse samples from Mars tracking the soil fertility and documenting any changes',
    skillHeader: 'SpaceX 2030-32'
},{
    skillDescription: 'I went to Mars and collected samples which were to be used in experiments back on Earth. This mission was with SpaceX and we successfully returned home. We also deployed our own rover on Mars, similar to the Perseverance rover which is equipped with higher quality cameras',
    skillHeader: 'Mars Mission 2030'
}];

// i is initialised to 0 so that it is at the beginning of the array
let i = 0;

// what this function does is that when the button is clicked, it checks if 
// the value of i is less than the length of the array, if it is then i
// is incremented and it moves on to the next skill but if it is equal to 
// the skills length then i is set back to 0 and so you loop around the 
// the array
// This is code that I adapted in order to suit my needs, the original code
// would randomise the number and did not face the problem of reaching the end
// of the array so I adapted it so that there is a set order instead of just
// being random

button.addEventListener("click", () => {
    
    if (i <= skills.length - 1) {
        i = i + 1;
        skillDescription.innerText = skills[i].skillDescription;
        skillHeader.innerText = skills[i].skillHeader;
    }
    else if (i == skills.length) {
        i = 0;
        skillDescription.innerText = skills[i].skillDescription;
        skillHeader.innerText = skills[i].skillHeader;
    }
});

