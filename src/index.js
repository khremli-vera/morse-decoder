const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // console.log(expr)
    let result='';
    for (let i=0; i< (expr.length)/10; i++){
        let morseSymbol = expr.slice(i*10, (i+1)*10);
        // console.log(morseSymbol)
        if(morseSymbol === '**********') {result = result +' '} else {
        let j=0;
        while (morseSymbol[j] === '0') {
            j++
        }
        morseSymbol = morseSymbol.slice(j);
        let dashed = '';
        for (let k=0; k< morseSymbol.length; k= k+2){
            if ((morseSymbol[k]+morseSymbol[k+1]) === '11') {dashed = dashed+'-'}
            if ((morseSymbol[k]+morseSymbol[k+1]) === '10') {dashed = dashed+'.'}
        }
        result= result + MORSE_TABLE[dashed]


    }
    }
console.log(result)
return result
}

module.exports = {
    decode
}