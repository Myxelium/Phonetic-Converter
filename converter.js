function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (25+element.scrollHeight)+"px";
}

// Get references to the elements
const sourceTextarea = document.getElementById('input');
const copyButton = document.getElementById('gen');
const targetDiv = document.getElementById('output');

// Map of Swedish phonetic approximations to English
const phoneticMap = {
    'a': 'ah',
    'ä': 'eh',
    'å': 'oh',
    'e': 'eh',
    'i': 'ee',
    'o': 'oo',
    'u': 'oo',
    'y': 'oo',
    'ö': 'uh',
    'é': 'ay',
    'j': 'y',
    'g': 'g',
    'k': 'k',
    'm': 'm',
    'n': 'n',
    'p': 'p',
    't': 't',
    's': 's',
    'r': 'r',
    'l': 'l',
    'f': 'f',
    'v': 'v',
    'b': 'b',
    'd': 'd',
    'h': 'h'
};
  
  // Function to approximate Swedish sentence to English phonetics
function approximateSwedish(sentence) {
    const words = sentence.split(' ');

    const approximatedWords = words.map((word) => {
        const approximatedWord = [...word].map((char) => {
        return phoneticMap[char.toLowerCase()] || char;
        });

        return approximatedWord.join('');
    });

    return approximatedWords.join(' ');
}

  // Add click event listener to the button
copyButton.addEventListener('click', function() {
    targetDiv.textContent = approximateSwedish(sourceTextarea.value);
    textAreaAdjust(targetDiv);
});