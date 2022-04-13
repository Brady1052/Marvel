//HTML Elements
const characterSearchBox = document.getElementById('characterSearch');
const characterSearchBtn = document.getElementById('characterSearchBtn');
var characterName = document.getElementById('charName');
//Params for query
const hash = '652341e1c91874a97bbf4aa8091c2ab3'
const publicKey = '23e4d1775db55e165690e462a3630e80'

function fetchData(){
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&name=${characterSearchBox.value}`)
.then(res => res.json())
.then(info => {
 console.log(info)   
const charName = info.data.results[0].name;
console.log(charName)
characterName.textContent = charName


})
}



//Event Listeners
characterSearchBtn.addEventListener('click', (e)=> {
    
console.log(characterSearchBox.value)
e.preventDefault()
fetchData()
})