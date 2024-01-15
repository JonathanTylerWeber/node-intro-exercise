const fs = require('fs')
const axios = require('axios')

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            process.kill(1)
        }
        console.log('Data:', data)
    })
}

async function webCat(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error(`Error fetching ${url}:\n`, error);
    }
}

const arg = process.argv[2];

if (arg.startsWith('http://') || arg.startsWith('https://')) {
    webCat(arg);
} else {
    cat(arg);
}