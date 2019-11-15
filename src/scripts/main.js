const getHero = () => {
    return fetch("http://localhost:8088/heroes").then(r => r.json())
}

let heroInput = document.getElementById("heroName")
let button = document.querySelector("#button")
let nameHolder = document.getElementById("nameHolder")

console.log(heroInput.value)
//convert hero string to uppcase every word in sting Anti-Mage has a - in it
//name.charAt(0).toUpperCase() + name.slice(1)
const getSingleHero = (event) => {
    event.preventDefault();
    let hero = heroInput.value
    let array = hero.split(" ");
    let heroUpper = ""; 
    for(let i = 0 ; i < array.length ; i++){
        heroUpper += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " ";
    }
    
    if (heroUpper == "Anti Mage " || heroUpper == "Anti-mage " || heroUpper == "Antimage "){
        heroUpper = "Anti-Mage";
    }
    
    console.log(heroUpper)
    
    return fetch(`http://localhost:8088/heroes?localized_name=${heroUpper}`).then(r => r.json()).then(r => nameHolder.textContent = r[0].localized_name )
}

button.addEventListener("click", getSingleHero)
