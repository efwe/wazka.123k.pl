import _ from 'lodash';
import './css/wazka.css';
import wazka from './img/wazka.jpg';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
    var logo = new Image();
    logo.src = wazka;

    element.appendChild(logo);
    return element;
}

document.body.appendChild(component());
