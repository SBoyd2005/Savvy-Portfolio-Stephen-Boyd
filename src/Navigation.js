import { lowerCase } from 'lodash';

function buildLinks(links){
    var linkList = '';
    var destination = '';

    links.forEach((link) => {
        if(link != 'Home'){
            destination = lowerCase(link);
        }

        linkList += `
        <li>
        <a data-navigo href="./${destination}">
        ${link}
        </a>
        </li>
        `;
    });

    return linkList;
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