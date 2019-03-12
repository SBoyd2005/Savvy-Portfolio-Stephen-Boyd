import { lowerCase } from 'lodash';

function buildLinks(links){
    // var linkList = '';
    var destination = '';

    var linkHTML = links.map((link) => {
        if(link != 'Home'){
            destination = lowerCase(link);
        }

        return `<li>
        <a data-navigo href="./${destination}">
        ${link}
        </a>
        </li>
     `;
    }).join(' ');

    return linkHTML;
}

export default function Navigation(state){
    return `
    <div id="navigation">
    <ul class="container">
        ${buildLinks(state.links)}
    </ul>
</div>
`;
}