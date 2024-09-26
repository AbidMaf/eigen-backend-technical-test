function reverseString() {
    const string_value = "NEGIE1";
    
    const reversed = (string) => {
        const stringSplit = string.match(/[A-Za-z]+|\d+/g);
        const reversedString = stringSplit.map(item => {
            if(item.match(/[A-Za-z]/g)) return item.split("").reverse().join("");
            return item;
        })

        return reversedString.join("");
    }
    
    console.log(reversed(string_value));
}

reverseString();