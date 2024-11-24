const lowercaseLetters ="abcdefghijklmopqrstuvwxyz";
const uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@$%^&*()_+-={}[]\\|:;',./<>?";
        
         
          

const lengthEL = document.getElementById("length");
const lowercaseEL = document.getElementById("lowercase");
const uppercaseEL = document.getElementById("uppercase");
const numbersEL = document.getElementById("numbers");
const symbolsEL = document.getElementById("symbols");
const generateBtnEL = document.getElementById("generator")
const passwordEL = document.getElementById("password");

console.log(lengthEL, lowercaseEL, uppercaseEL, numbersEL, symbolsEL);

generateBtnEL.addEventListener("click",function(){
    const length =lengthEL.value ;
    let characters ="";
    let password ="";

        if(lowercaseEL.checked){
        characters += lowercaseLetters}
        if(uppercaseEL.checked){
            characters += uppercaseLetters}
        if(numbersEL.checked){
            characters += numbers}
        if(symbolsEL.checked){
            characters += symbols}
        
            for( let i=0; i< length; i++){
                password += characters.charAt(Math.floor(Math.random()*characters.length));
            }
            passwordEL.value = password;
            

});