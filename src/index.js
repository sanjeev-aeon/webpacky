import hello from './b';
import text from './aa.txt';
import './A.css';
import imgsrc from './testing.jpg';
const img = document.createElement('img');
img.src = imgsrc
document.body.appendChild(img);
hello(text);
