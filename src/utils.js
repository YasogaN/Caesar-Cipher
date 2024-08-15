/**
 * Shifts a character by a given shift value.
 *
 * @param {string} char - The character to be shifted.
 * @param {number} shift - The amount by which the character should be shifted.
 * @returns {string} - The shifted character.
 */
function shiftChar(char, shift) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    return char;
}

/**
 * Shifts each character in a word by a given shift value.
 * 
 * @param {string} word - The word to be shifted.
 * @param {number} shift - The amount to shift each character by.
 * @returns {string} - The shifted word.
 */
export function shiftWord(word, shift) {
    return word.split('').map(char => shiftChar(char, shift)).join('');
}