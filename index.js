import Navigation from './src/Navigation';
import Content from './src/Footer';
import Header from './src/Header';
import Footer from './src/Content';
import nameChecker from './src/Greeter';

var originalContent = document.body.innerHTML;

document.body.innerHTML = `
${Navigation}
${Content}
${Footer}
${Header}
${originalContent}
`;

nameChecker();