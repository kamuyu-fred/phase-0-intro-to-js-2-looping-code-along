// Code your solutions in this file
function writeCards(name, event){
    const gifts = []
    for(let i = 0; i < name.length; i++){
        gifts.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return gifts
}
function countDown(i){
    for( i = 10; i >= 0; i--){
        console.log(i)
    }
}