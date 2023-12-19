const key = "87bce6a0a01f1e5908ee954bb733c902";
const input = document.querySelector(".card_input");

input.addEventListener("keypress", getCardInputValue);
function getCardInputValue(e) {
    if (e.keyCode == "13") {
        getCardData(input.value);
    }
}
function getCardData(cardName) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cardName}&appid=${key}&units=metric&lang=az;`
    fetch(requestUrl)
    .then ((response) => response.json())
    .then((data) =>resultData(data));
}

function resultData(result) {
    let cardName = document.querySelector(".card_name");
    cardName.innerText = `${result.name} ${result.sys.country}`;

    let cardTemp = document.querySelector(".card_temp");
    cardTemp.innerText = `${Math.round(result.main.temp)} °C`;
   
    let cardDesc = document.querySelector(".card_desc");
    cardDesc.innerText = `${result.wather[0].description}`;
}
