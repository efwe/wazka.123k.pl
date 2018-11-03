import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/wazka.css';
import wazka from './img/wazka.jpg';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack','you','old','fart'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
    var logo = new Image();
    logo.src = wazka;
    element.appendChild(logo);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me wobble the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
