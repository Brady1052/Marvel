//HTML Elements

//The actual input box where the user types the name of the character they want to search
const characterSearchBox = document.getElementById('characterSearch');

//The buttons that users click when they go to search for the character
const characterSearchBtn = document.getElementById('characterSearchBtn');

//H1 Element that displays name of character that was searched
const characterName = document.getElementById('charName');

//H1 element that displays "Description" upon character search. This element is located directly above the character description
const descriptionHeader = document.getElementById('aboutCharh1');

//p element that displays description of char searched
const aboutCharacter = document.getElementById('aboutChar');

//Params for query
const hash = '652341e1c91874a97bbf4aa8091c2ab3';
const publicKey = '23e4d1775db55e165690e462a3630e80';


//Fetch Api Function
function fetchData(){
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&name=${characterSearchBox.value}`)
.then(res => res.json())
.then(info => {
 console.log(info)   
const charName = info.data.results[0].name;
console.log(charName)
characterName.innerHTML = charName

descriptionHeader.innerHTML = 'Description'
aboutCharacter.innerHTML = info.data.results[0].description;


})
}



//Event Listeners
characterSearchBtn.addEventListener('click', (e)=> {
    
console.log(characterSearchBox.value)
e.preventDefault()
fetchData()
})