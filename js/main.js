import { createRandomImage } from './data.js';

const imagesLength = 25;
const images = Array.from({length: imagesLength}, createRandomImage);
// eslint-disable-next-line no-console
console.log(images);
