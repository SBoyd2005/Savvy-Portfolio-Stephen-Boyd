import Navigation from './src/Navigation';
import Content from './src/Footer';
import Header from './src/Header';
import Footer from './src/Content';
import nameChecker from './src/Greeter';

var root = document.querySelector('#root');

root.innerHTML = `
${Navigation}
${Content}
${Footer}
${Header}
`;

nameChecker();