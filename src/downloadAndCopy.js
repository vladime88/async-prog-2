import axios from 'axios'
import fs from 'fs/promises'

if (process.argv.length !== 4) {
    console.log('usage: downloadAndCopy.js website file')
    process.exit(1)
}

let website = process.argv[2]
let file = process.argv[3]

/*
function isValidURL(input) {
    const res = input.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    )
    return res !== null
}
*/

let response = await axios.get(`https://${website}`)
if (response) {
    await fs.writeFile(`../${file}.html`, response.data)
} else {
    console.log(
        `Error: ${website} is not a website and/or ${file} is not valid.`
    )
}

// verifier que website est du type www....
// verifier que file est un string sans espace...
