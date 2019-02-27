import Navigation from './src/Navigation';
import Content from './src/Footer';
import Header from './src/Header';
import Footer from './src/Content';

var State = {
    'home': {
        'title': 'Welcome to my Website'
    },
    'blog': {
        'title': 'Welcome to my Blog!'
    },
    'contact': {
        'title': 'Welcome to my Contact page!'
    },
    'projects': {
        'title': 'Welcome to my Projects!'
    }
};

var root = document.querySelector('#root');

function render(state){
    var links;

    root.innerHTML = `
    ${Navigation(state)}
    ${Content(state)}
    ${Footer(state)}
    ${Header(state.title)}
    `;

    links = document.querySelectorAll('#navigation > ul > li > a');
    links[0].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });

    links[1].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });

    links[2].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });

    links[3].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });
}

render(State.home);