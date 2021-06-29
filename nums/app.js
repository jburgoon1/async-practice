const favNum = document.querySelector('#favnumfact')
const multNum = document.querySelector('#multnumfacts')
const multFavNum = document.querySelector('#multfavnumfacts')
const numList = document.querySelector('#multnumlist')
const favList = document.querySelector('#multfactlist')

const favNumarr = []
// async function favoriteNumber(){
//     const fav = await axios.get('http://numbersapi.com/15')
//     favNum.append(fav.data)
// }
// favoriteNumber()

axios.get('http://numbersapi.com/15')
.then(num => favNum.append(num.data))


// async function manyNums(){
//     const min = 1
//      const max = 10
// const nums = await axios.get(`http://numbersapi.com/${min}..${max}`)
// const numdata = nums.data
//   console.log(numdata)
//   for(i = min; i<=max; i++){
//        const li = document.createElement('li')
//    li.append(numdata[i])
//    numList.append(li)
//   }
// }
    
// manyNums()

const min = 1
const max = 10
axios.get(`http://numbersapi.com/${min}..${max}`)
.then(nums =>{
const numdata = nums.data
console.log(numdata)
for(i = min; i<=max; i++){
     const li = document.createElement('li')
 li.append(numdata[i])
 numList.append(li)
}})







// for(let i = 0; i<4; i++){
//     favNumarr.push(axios.get('http://numbersapi.com/15'))
//     console.log(favNumarr)
// }


// Promise.all(favNumarr)
//     .then(res => (
//         res.forEach(num =>{
//         const li = document.createElement('li')
//         li.append(num.data)
//         favList.append(li)
//         }
//         )))


async function favNums(){
    let p1Promise = axios.get('http://numbersapi.com/15')
    let p2Promise = axios.get('http://numbersapi.com/15')
    let p3Promise = axios.get('http://numbersapi.com/15')
    let p4Promise = axios.get('http://numbersapi.com/15')

    let p1 = await p1Promise
    let p2 = await p2Promise
    let p3 = await p3Promise
    let p4 = await p4Promise
    const br = document.createElement('br')
        favList.append(p1.data)
        favList.append(p2.data)
        favList.append(p3.data)
        favList.append(p4.data)
        

    
}
favNums()