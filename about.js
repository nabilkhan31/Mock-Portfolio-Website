
// Variables initialised to get the button and the invisible content classes
const showButton = document.querySelector('.show-button');
const invisibleContent = document.querySelector('.invisible-content');

// Event listener is added so when the user clicks, the function is called
// function created which checks if it contains the show button class,
// returns a boolean value of true or false. If true, then the class will be 
// removed but if false then the class will be added. The innertext is changed
// between Open about me and close about me

// This is custom JS code that I wrote

showButton.addEventListener("click", () => {
    if (invisibleContent.classList.contains('show-button')) {
        invisibleContent.classList.remove('show-button');
        showButton.innerText = 'Open About Me';
    }
    else{
        invisibleContent.classList.add('show-button');
        showButton.innerText = 'Close About Me';
    }
});