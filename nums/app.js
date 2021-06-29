const favNum = document.querySelector('#favnumfact')
const multNum = document.querySelector('#multnumfacts')
const multFavNum = document.querySelector('#multfavnumfacts')
const numList = document.querySelector('#multnumlist')
const favList = document.querySelector('#multfactlist')

const favNumarr = []
async function favoriteNumber(){
    const fav = await axios.get('http://numbersapi.com/15')
    favNum.append(fav.data)
}
favoriteNumber()


async function manyNums(){
    const min = 1
     const max = 10
const nums = await axios.get(`http://numbersapi.com/${min}..${max}`)
const numdata = nums.data
  console.log(numdata)
  for(i = min; i<=max; i++){
       const li = document.createElement('li')
   li.append(numdata[i])
   numList.append(li)
  }
}
    
manyNums()







for(let i = 0; i<4; i++){
    favNumarr.push(axios.get('http://numbersapi.com/15'))
    console.log(favNumarr)
}


Promise.all(favNumarr)
    .then(res => (
        res.forEach(num =>{
        const li = document.createElement('li')
        li.append(num.data)
        favList.append(li)
        }
        )))
