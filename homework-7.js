function showWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
showWeather("Москва", 20);


const speedOfLight = 299792458;
function checkSpeed(speed) {
    if (speed > speedOfLight) {
        console.log("Сверхсветовая скорость");
    } else if (speed < speedOfLight) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}


let product = "Шоколад";
let price = 1000;
function buy(budget = 700) {
    console.log(budget);
if (budget > price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
}
else {
    let difference = price - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
}}
buy(700);


let name = "Али"
let age = 24
function calculateAge(name, age){
    console.log (`${name}, вам  ${age} года`);
}
calculateAge(name, age)


let NameWater = "barjomi"
const HEIGHT_MOUNTAIN = 8848;
let NameStar = "sun";