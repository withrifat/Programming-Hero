
function  onlyCharacter( str ) {
    if (typeof str !== 'string'   ) {
        return "Invalid" ;
    }
    const output = str.split(" ").join("").toUpperCase();
    return output ;
}
console.log(onlyCharacter("Cy  ksdjf;ldjfljsdlfkjsdlk dfjowqfj sdfl jfsd jfhk "));
