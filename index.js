module.exports = function randomStr(length, caseType='lower') {
    if(length < 1) {
        return "Dont be stupid, Its not Random";
    }
    let randomString = '';
    // 97 - 123
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * 97) + 124;
        // console.log(random);
        randomString += String.fromCharCode(random);
    } 
    return ( caseType == 'upper' ? randomString.toUpperCase() : randomString);
} 