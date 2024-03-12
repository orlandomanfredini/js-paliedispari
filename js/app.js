
//  let scelta;

// // true && false => false
// // false && false => false
// // true && true => true
// // true || false => true
// // true || true => true
// // (false || false) => false
// // !(false || false) => !(false) => true


//  do {
//      scelta = prompt('inserisci "pari" o "dispari"'); // ciao
//  } while (!(scelta === 'pari' || scelta === 'dispari')); // !(false || false) => !(false) => true

//  console.log(scelta); // pari o dispari





// --- consegna 1
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire 
// all’utente il risultato del controllo

// chiedo a utente di inserire parola con promt

const wordUser = prompt('Inserisci parola')
// console.log(wordUser)

let wordReverse = '';
for(let i = wordUser.length -1 ; i >= 0; i--){
    wordReverse += wordUser[i]

}
// console.log(wordReverse)

let relust = isPalindrome(wordUser, wordReverse)

console.log(relust)

// --- consegna 2
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



let whoWin = '';
do{
    // chiedo a utente se il risultato della somma è pari o dispari
     whoWin = prompt('il risultato della somma è pari o dispari?');//string
    
}while(!(whoWin === 'pari' || whoWin === 'dispari'))

console.log('utente ha scelto ' + whoWin);
// chiesto a utente di inserire numero da 1 a 5 
let numberUser = parseInt(prompt('inserisci numero da 1 a 5')); //number
console.log(numberUser); //number

// genero un numero random dal computer 
let randomNumber = Math.floor(Math.random()* 5) + 1; //number
console.log(randomNumber); //number





let finalResults = sumNumber(numberUser, randomNumber); // invocazione functio isSumEveen
console.log('la somma è ' + finalResults)





if(finalResults % 2 === 0 && whoWin === 'pari'){
        console.log('utente ha vinto')
}else if(finalResults % 2 !== 0 && whoWin === 'dispari'){
        console.log('utente ha vinto')
}else{
        console.log('computer ha vinto')
    }




// creo una funzione per leggere la parola inserita esercizio 1

function isPalindrome(word1, word2){

    if(word1 === word2){
        //console.log('Palindromo')
        return true
    }else{
        //console.log('Non Palindromo')
        return false
    }

    // output true o false
}


// sommo i due numeri e restituisco 
function sumNumber(num1, num2){
    let sumResults = num1 + num2;
    
    
    return sumResults

    // output number
}



