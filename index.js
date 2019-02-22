import Navigation from './src/Navigation';
import Content from './src/Footer';
import Header from './src/Header';
import Footer from './src/Content';

var home = {
    'title': 'Welcome to my Savvy Coders website!'
};

var blog = {
    'title': 'Welcome to my Blog!'
};

var contact = {
    'title': 'Welcome to my Contact page!'
};

var projects = {
    'title': 'Welcome to my Projects!'
};

var root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
    ${Header(state.title)}
`;
}

render(home);
document.querySelector('#navigation li:nth-child(1) a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
});

document.querySelector('#navigation li:nth-child(2) a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(blog);
});

document.querySelector('#navigation li:nth-child(3) a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(contact);
});

document.querySelector('#navigation li:nth-child(4) a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(projects);
});


