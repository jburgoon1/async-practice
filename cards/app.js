const button = document.querySelector('button')
let deck_id =''
const img = document.createElement('img')
const cards = document.querySelector('#cards')

axios.get('https://deckofcardsapi.com/api/deck/new/draw/')
.then(resp => console.log(resp.data.cards[0].value, resp.data.cards[0].suit))


// async function newCard(){
// const resp = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/')
// console.log(resp.data.cards[0].value, resp.data.cards[0].suit, resp.data)
// }
// newCard()


axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
.then(resp => {
    return deck_id = resp.data.deck_id
})
.then(deck_id => button.addEventListener('click',axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
.then(card => {
    console.log(card)
    img.src = card.data.cards[0].image
    if(card.data.remaining >0){
    cards.append(img)
    }else{
        cards.append('No more cards!!')
    }
    
})))

// async function newDeck(){
//     const resp = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
//     deck_id = resp.data.deck_id
//     console.log(resp)
   
// }
// newDeck()





// async function nextCard(){
//     const card = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
//     console.log(card)
//     img.src = card.data.cards[0].image
//     if(card.data.remaining >0){
//     cards.append(img)
//     }else{
//         cards.append('No more cards!!')
//     }
    
// }
// nextCard()
// button.addEventListener('click', nextCard)