const {} = require('char');

module.exports = function generate(type='string', length=1, uppercase=false) {
    try {
        if(type.toLower() == 'alphabets') {
            return (uppercase ? randomAlphabets(length).toUpperCase() : randomAlphabets(length))  
        }
        
        if(type == 'number') {
            return randomNumber(length)
        }

        if(type.toLower() == 'string') {
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

        if(type.toLower() == 'asciimix') {
            return (uppercase ? randomAsciiChar(length).toUpperCase() : randomAsciiChar(length))  
        }

        if(type.toLower() == 'special') {

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
            result += String.fromCharCode(Math.floor(Math.random() * 9) + 48);
        }
        return result;
    }
    return String.fromCharCode(Math.floor(Math.random() * 9) + 48);
}
