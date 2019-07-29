# Randify

>Generates Random `Number` / Random `Alphabets` / Random `String` / Random `Ascii` Character / Random `Special` Character

Simple, but more useful than my preivious npm libs.

## Install with npm
    $ npm install --save randify 
 

## Usage

    paramerts:
        1> type : Type of data to generate 

            > Possible Values
                a> 'alphabet' : Generates a alphabet (a-z)

                b> 'number'   : Generates Number (0-9)

                c> 'string'   : Generates a String (a-z0-9)

                d> 'asciimix' : Generates a string of mixed ascii character (range from 33 - 126) 

                e> 'special'  : Generates a special character


        2 > length: Length of the data to be returned (default to 1)
        
        3 > uppercase: Boolean, (default to false)
    
## Example

    const randify = require('randify');

    const randomAlphabets = randify('alphabet', 100, false)
    // output >> 

    const randomNumber = randify('number', 100)
    // output >>

    const randify = randify('string', 100, true)
    // output >>

    const randomAscii = randify('asciimix', 20, false)
    // output >>

    const specialString = randify('special', 13, false)
    // output >> 

    const tryingtoBreak = randify('lol')
    // Error >> 
## Licence

`Do whatever you want with it, hell yeah its FREE`.

Made with **`stupidity`**