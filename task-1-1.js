function toBrackets(string) {
    string = string.toLowerCase();
    let uniqueCharacters = new Set(string);
    Array.from(uniqueCharacters).forEach(char => {

        let regexp = new RegExp(char, "g");
        if (string.match(regexp).length > 1) {
            string = string.replace(regexp, ")")
        } else {
            string = string.replace(regexp, "(")
        }
    });

    return string;
}
let string = "Success";
console.log(toBrackets(string));