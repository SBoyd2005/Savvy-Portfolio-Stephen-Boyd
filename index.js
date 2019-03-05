import Navigation from './src/Navigation';
import Content from './src/Footer';
import Header from './src/Header';
import Footer from './src/Content';
import { startCase } from 'lodash';

var State = {
    'Home': {
        'links': [ 'Blog', 'Contact', 'Projects' ],
        'title': 'Welcome to my Website'
    },
    'Blog': {
        'links': [ 'Home', 'Contact', 'Projects' ],
        'title': 'Welcome to my Blog!'
    },
    'Contact': {
        'links': [ 'Home', 'Blog', 'Projects' ],
        'title': 'Welcome to my Contact page!'
    },
    'Projects': {
        'links': [ 'Blog', 'Contact', 'Projects' ],
        'title': 'Welcome to my Projects!'
    }
};

var root = document.querySelector('#root');
var render;

function navHandler(event){
    var destination = startCase(event.target.textContent);

    event.preventDefault();
    render(State[destination]);
}

render = function Render(state){
    var links;
    var i = 0;

    root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
    ${Header(state.title)}
    `;

    links = document.querySelectorAll('#navigation > ul > li > a');
    while(i < links.length){
        links[i].addEventListener('click', navHandler);

        i++;
    }
};

render(State.Home);