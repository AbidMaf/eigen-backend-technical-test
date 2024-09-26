function getLongestWord() {
    const sentence = "Saya sangat senang mengerjakan soal algoritma"

    const longestWord = (sentence) => {
        const words = sentence.split(" ");
        let longest = "";
        words.forEach(word => {
            if (word.length > longest.length) {
                longest = word;
            }
        });
        return `${longest}: ${longest.length} characters`;
    }

    console.log(longestWord(sentence));
}

getLongestWord();