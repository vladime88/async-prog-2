const asyncTask = (id, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Log: task${id} done after ${timeout} seconds`)
            resolve(`result from task${id}`)
        }, timeout * 1000)
    })
}
/*
asyncTask(1, 7)
asyncTask(2, 4)
asyncTask(3, 0.5)
asyncTask(4, 1)
*/
/*
asyncTask(1, 7).then(console.log)
asyncTask(2, 4).then(console.log)
asyncTask(3, 0.5).then(console.log)
asyncTask(4, 1).then(console.log)
*/

/*
let res1 = await asyncTask(1, 7)
console.log(res1)
let res2 = await asyncTask(2, 4)
console.log(res2)
let res3 = await asyncTask(3, 0.5)
console.log(res3)
let res4 = await asyncTask(4, 1)
console.log(res4)
*/
/*
let promise1 = asyncTask(1, 7)
console.log(promise1)
let promise2 = asyncTask(2, 4)
console.log(promise2)
let promise3 = asyncTask(3, 0.5)
let promise4 = asyncTask(4, 1)

let res1 = await promise1
console.log(res1)
let res2 = await promise2
console.log(res2)
let res3 = await promise3
console.log(res3)
let res4 = await promise4
console.log(res4)
*/

let data = await Promise.race([
    asyncTask(1, 10),
    asyncTask(2, 5),
    asyncTask(3, 0.5),
    asyncTask(4, 1),
]).catch((err) => {
    console.error(err)
})
console.log(data)
