function findLongestWord(text) {
    let maxLen = 0, currentLen = 0, start = 0, longestWord = '';

    for (let i = 0; i <= text.length; i++) {
        if (i === text.length || text[i] === ' ') {
            // Si encontramos un espacio o final del texto, evaluamos la palabra.
            if (currentLen > maxLen) {
                maxLen = currentLen;
                longestWord = text.substring(start, i); // Extraer la palabra.
            }
            currentLen = 0; // Reiniciar longitud de la palabra actual.
            start = i + 1;  // Mover el inicio a la siguiente palabra.
        } else {
            currentLen++; // Incrementar longitud de la palabra actual.
        }
    }
    return longestWord;
}

const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text));
