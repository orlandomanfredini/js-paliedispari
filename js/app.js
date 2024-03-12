


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

// creo una funzione per leggere la parola inserita

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

console.log(relust)

