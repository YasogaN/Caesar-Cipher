import { shiftWord } from './utils.js';

/**
 * Encodes the given text using the Caesar Cipher algorithm.
 * 
 * @param {string} text - The text to be encoded.
 * @param {number} [rot=13] - The shifting value for the cipher. Defaults to 13.
 * @returns {string} The encoded text.
 */
export default function encode(text, rot=13) {
    const words = text.toString().split(' ')
    const encodedWords = words.map(word => shiftWord(word, rot));
    return encodedWords.join(' ');
}