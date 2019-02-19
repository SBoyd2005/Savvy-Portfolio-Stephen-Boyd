import Navigation from './src/Navigation';
import Content from './src/Footer';
import Header from './src/Header';
import Footer from './src/Content';

var originalContent = document.body.innerHTML;

var nameChecker = function nameChecker(){
    var name = prompt('Please Enter Your Nombre: ');

    if(name === ''){
        nameChecker();
    }
    else{
        document.querySelector('h1').textContent = `Hello, ${name}`;
    }
};


document.body.innerHTML = `
${Navigation}
${Content}
${Footer}
${Header}
${originalContent}
`;

nameChecker();