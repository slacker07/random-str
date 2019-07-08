// Importing array of special characters
const { special } = require('char');

// Main export 
module.exports = function generate(type='string', length=1, uppercase=false) {
    try {


        if(type.toLowerCase() == 'alphabets') {
            return (uppercase ? randomAlphabets(length).toUpperCase() : randomAlphabets(length))  
        }
        
        if(type == 'number') {
            return randomNumber(length)
        }

        if(type.toLowerCase() == 'string') {
            let result = '';
            for (let i = 0; i < length; i++) {
                let chooseFrom = Math.floor(Math.random() * 2) * 1;
                switch (chooseFrom) {
                    case 0: result +=randomAlphabets();
                        break;
                    case 1: result +=randomNumber();
                        break;
                    default: result += 'a'
                }   
            }
            return (uppercase ? result.toUpperCase() : result);
        }

        if(type.toLowerCase() == 'asciimix') {
            return (uppercase ? randomAsciiChar(length).toUpperCase() : randomAsciiChar(length))  
        }

        if(type.toLowerCase() == 'special') {
            return randomSpecialChar(length)
        }

        throw new Error(`unrecognized argument "${type}"`)
    } catch (error) {
        throw new Error(`${error}`)
    }
}

function randomAlphabets(length = 1) {
    if(length > 1) {
        let result = '';
        for (i = 0; i < length; i++) {
            result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }

        return result;
    }
    return String.fromCharCode(Math.floor(Math.random() * 27) + 97);
}

function randomNumber(length) {
    if(length > 1) {
        let result = '';
        for (i = 0; i < length; i++) {
            result += String.fromCharCode(Math.floor(Math.random() * 9) + 48);
        }
        return result;
    }
    return String.fromCharCode(Math.floor(Math.random() * 9) + 48);
}

function randomAsciiChar(length = 1) {
    if(length > 1) {
        let result = '';
        for (i = 0; i < length; i++) {
            result += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
        }

        return result;
    }
    return String.fromCharCode(Math.floor(Math.random() * 94) + 33);
}


function randomSpecialChar(length) {
    if(length > 1) {
        let result = '';
        for (i = 0; i < length; i++) {
            result += special[Math.floor(Math.random() * 32)];
        }
        return result;
    }
    return special[Math.floor(Math.random() * 32)];
}
