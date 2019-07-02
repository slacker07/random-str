module.exports = function randomStr(length = 1, caseType = 'lower') {
    if(length < 0) {
        throw new RangeError("Can't Process the request");
    }
    
    if(length > 1e6) {
        return new RangeError("I dont want to blow up your system...!");
    }

    let randomString = '';
    
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * 97) + 124;
        randomString += String.fromCharCode(random);
    } 
    
    return ( caseType == 'upper' ? randomString.toUpperCase() : randomString);
} 