// Code your solutions in this file
function writeCards(array){
    let newarray = [];
    for (let i = 0; i < array.length; i++){
        newarray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return newarray;
}
function countDown(num){
    let i = num
    while(i >= 0){
        console.log(i);
        i--;
    }
}