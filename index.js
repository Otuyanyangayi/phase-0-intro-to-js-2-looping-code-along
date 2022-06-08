// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards (names, event) {
    let cards = []
for(let i = 0; i < names.length; i++){
    cards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return cards;
}
function  countDown(){
    let i = 10;
    while (i > -1){
    
        console.log(i--);
    }
}