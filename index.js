// Importing array of special characters
const { special } = require('./char');

// Main export 
module.exports = function generate(type='string', length=1, uppercase=false) {
    try {

        if(length > 1e6 || length < 1) {
            throw `Length range of boundry \n Max ${1e6}, Min 1`;
        }

        if(type.toLowerCase() == 'alphabet') {
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
    if(length > 1e6 || length < 1) {
        throw new RangeError(`Length range of boundry \n Max ${1e6}, Min 1`)
    }
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
    if(length > 1e6 || length < 1) {
        throw new RangeError(`Length range of boundry \n Max ${1e6}, Min 1`)
    }
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
    if(length > 1e6 || length < 1) {
        throw new RangeError(`Length range of boundry \n Max ${1e6}, Min 1`)
    }
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
    if(length > 1e6 || length < 1) {
        throw new RangeError(`Length range of boundry \n Max ${1e6}, Min 1`)
    }
    if(length > 1) {
        let result = '';
        for (i = 0; i < length; i++) {
            result += special[Math.floor(Math.random() * 32)];
        }
        return result;
    }
    return special[Math.floor(Math.random() * 32)];
}

function generatePattern(uppercase = false, ...pattern) {
    try {
        const patternArray = [...pattern];
        let result = '';
        for (pattern of patternArray) {
            if(/\ds/.test(pattern)) {
                result += generate('string', pattern.match(/\d+/)[0])
            }
            if(/\da/.test(pattern)) {
                result += randomAlphabets(pattern.match(/\d+/)[0])
            }
            if(/\dn/.test(pattern)) {
                result += randomNumber(pattern.match(/\d+/)[0])
            }
            if(/\dam/.test(pattern)) {
                result += randomAsciiChar(pattern.match(/\d+/)[0])
            }
            if(/\dsp/.test(pattern)) {
                result += randomSpecialChar(pattern.match(/\d+/)[0])
            }
        }

        return ( uppercase ? result.toUpperCase() : result)
    } catch (e) {
        console.log(e);
    }
}