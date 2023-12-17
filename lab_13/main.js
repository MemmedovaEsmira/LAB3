const url =document.querySelector("")
const key = document.querySelector("")
const card_input = document.querySelector("card_input")

input.addEventListener("keypress" ,getCardInputValue);
function getCardInputValue(e) {
    if (e.keyCode=="13") {
        getCardData(card_input.valiu);
    }
    console.log(getCardInputValue)
}
function getCardData(cardName) {
    const requestUrl=`  `
    fetch(requestUrl)
    .then ((responsive) => responsive.json())
    .then((data) =>resultData(data));
}

function resultData(result) {
    let cardName = document.querySelector(".card_name");
    cardName.innerText = ${result.name} {result.sys.country}

    let cardTemp = document.querySelector(".card_temp");
    cardTemp.innerText = ${Math.round(result.main.temp)} °C
   
    let cardDesc = document.querySelector(".card_desc");
    cardDesc.innerText = ${result.wather[0].description}
}
