import Navigation from './src/Navigation';

var originalContent = document.body.innerHTML;

var blankChecker = function blankChecker(){
    if(name === ''){
        name = prompt('Please Enter Your Nombre: ');

        blankChecker();
    }
};
var nameChecker = function nameChecker(){
    name = prompt('Please Enter Your Name: ');
    // If user leaves prompt blank, throw up a new prompt that says, "For real, enter your name!"//
    blankChecker();

    document.querySelector('h1').textContent = `Hello, ${name}`;
};

nameChecker();


document.body.innerHTML = `
${Navigation}
${originalContent}
`;