import { decode, encode } from './index.js';

const cipher = 'The stars twinkled like diamonds in the night sky.';


const encoded = await encode(cipher, 13);
const decoded = await decode(encoded);

console.log(encoded);
console.log(decoded);

if (cipher.matchAll(decoded)) {
    console.log('Test Passed');
} else {
    console.log('Test Failed');
}