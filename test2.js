
function caesarCipherEncryptor(string, key) {

    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const decideOfMaping = mappingDecide(alphabets, key);

    const str = string.toLowerCase().split('').map(character => decideOfMaping[character]).join('');

    return str;
}


function mappingDecide(alphabetical, shiftValue) {

    return alphabetical.reduce((mapingCharacters, currentChar, indexOfCharacter) => {


        const index = (indexOfCharacter + shiftValue) % alphabetical.length;

        if (index < 0) {
            index = index + alphabetical.length;
        }

        const copyArray = { ...mapingCharacters};
        copyArray[currentChar] = alphabetical[index];
        

        return copyArray;
    }
     );
}




let str ="xyz";
console.log(caesarCipherEncryptor(str, 2)); //zab




