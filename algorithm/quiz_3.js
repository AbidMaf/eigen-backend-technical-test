function searchInArray() {
    const input = ['xc', 'dz', 'bbb', 'dz']  
    const query = ['bbb', 'ac', 'dz']

    const output = (input, query) => {
        let result = [];
        query.forEach(q => {
            let count = 0
            input.forEach(i => {
                if (q === i) {
                    count++;
                }
            })
            result.push(count);
        })

        return result;
    }

    console.log(output(input, query));
}

searchInArray();