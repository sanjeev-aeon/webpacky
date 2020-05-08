import hello from './b';
import text from './aa.txt';
import './A.css';
import imgsrc from './testing.jpg';
import print from './print';
import shared from './shared';
import _ from 'lodash';

const img = document.createElement('img');
img.src = imgsrc
document.body.appendChild(img);
const button = document.querySelector('.button1');
button.addEventListener('click', print);
hello(text);
shared();
console.log('lodash version' + _.VERSION);