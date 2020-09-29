import axios from 'axios'
import fs from 'fs/promises'

//console.log(response.data)

/*  
import axios from 'axios'
import fs from 'fs/promises'
let response = await axios.get('https://www.google.com')
await fs.writeFile('../index.html', response.data)
*/

const asyncTest = (id, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`le site de ${id} se charge après ${timeout} sec`)
            resolve(`${id} se charge le plus rapidement!`)
        }, timeout)
    })
}

let facebook = await axios.get('https://www.facebook.com')
let amazon = await axios.get('https://www.amazon.com')
let apple = await axios.get('https://www.apple.com')
let google = await axios.get('https://www.google.com')
/* 
let promiseFacebook = asyncTest(facebook, 0)
console.log(promiseFacebook)
let promiseAmazon = asyncTest(amazon, 0)
console.log(promiseAmazon)
let promiseApple = asyncTest(apple, 0)
let promiseGoogle = asyncTest(google, 0)
*/

/*
let resFacebook = await promiseFacebook
console.log(resFacebook)
let resAmazon = await promiseAmazon
console.log(resAmazon)
let resApple = await promiseApple
console.log(resApple)
let resGoogle = await promiseGoogle
console.log(resGoogle)
*/

let data = await Promise.race([
    asyncTest(facebook, 0),
    asyncTest(amazon, 0),
    asyncTest(apple, 0),
    asyncTest(google, 0),
]).catch((err) => {
    console.error(err)
})
console.log(data)
