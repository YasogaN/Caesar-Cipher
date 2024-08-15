import { readFileSync as rf } from 'fs';
import { shiftWord } from './utils.js';

/**
 * Decodes a Caesar cipher by trying different shift values and matching the decoded words with a wordlist.
 * Outputs an array of the best matches.
 * @param {string} cipher - The cipher text to decode.
 * @returns {Promise<string[]>} An array of the best found decodings.
 * @throws {Error} If the cipher cannot be decoded.
 */
export default async function decode(cipher) {
    // Load wordlist and Sort
    const data = await rf('wordlist.txt', 'utf-8');
    const wordlist = data.toString().split('\n').map(word => word.trim().toLowerCase());

    // Split cipher into words and Sort
    const words = cipher.toString().split(' ');

    let maxMatches = 0;
    let bestMatches = [];

    // Decoding Process
    for (let shift = 0; shift < 26; shift++) {
        const decodedWords = words.map(word => shiftWord(word, shift));
        const matchedWords = decodedWords.filter(word => wordlist.includes(word.toLowerCase().trim())).length;

        // Track the best matches
        if (matchedWords > maxMatches) {
            maxMatches = matchedWords;
            bestMatches = [decodedWords.join(' ')];
        } else if (matchedWords === maxMatches) {
            bestMatches.push(decodedWords.join(' '));
        }
    }

    if (bestMatches.length === 0) {
        throw new Error('Failed to decode cipher');
    } else {
        return bestMatches;
    }
}
