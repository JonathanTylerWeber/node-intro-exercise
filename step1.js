const fs = require('fs')

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            process.kill(1)
        }
        console.log('Data:', data)
    })
}

const filePath = process.argv[2];

cat(filePath);
