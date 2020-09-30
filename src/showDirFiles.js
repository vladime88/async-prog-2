import fs from 'fs'

const repertoire = process.argv[2]

if (process.argv.length !== 3) {
    console.log('usage: showDirFiles.js dir')
    process.exit(1)
}

fs.readdir(repertoire, function (err, files) {
    if (err) {
        return console.log(`Unable to open repertoire: `, err)
    }
    files.forEach(function (file) {
        let path = process.argv[2] + file
        fs.readFile(file, 'utf-8', (err, data) => {
            console.log(data)
        })
    })
})
