import { lowerCase } from 'lodash';

function buildLinks(links){
    // var linkList = '';
    var destination = '';

    var linkHTML = links.map((link) => {
        if(link !== 'Home'){
            destination = lowerCase(link);
        }

        return `<ul>
        <a data-navigo href="./${destination}">
        ${link}
        </a>
        </ul>
     `;
    }).join(' ');

    return linkHTML;
}

export default function Navigation(links){
    return `
    <div id="navigation">
    <div class="container">
        ${buildLinks(links)}
</div>
</div>
`;
}