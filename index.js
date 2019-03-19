import Navigation from './src/Navigation';
import Content from './src/Footer';
import Header from './src/Header';
import Footer from './src/Content';
import * as State from './state';
import { startCase } from 'lodash';
import Navigo from 'navigo';
import axios from 'axios';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');


function render(state){
    if(!state.links.includes('Blog')){
        state.posts = [];

        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                state.posts = response.data;

                root.innerHTML = `
                ${Navigation(state.links)}
                ${Content(state)}
                ${Footer(state)}
                ${Header(state.title)}
            `;
            });
    }

    root.innerHTML = `
    ${Navigation(state.links)}
    ${Content(state.posts)}
    ${Footer(state)}
    ${Header(state.title)}
`;

    router.updatePageLinks();
}
function navHandler(params){
    var destination = startCase(params.page);

    render(State[destination]);
}

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))
    .resolve();