console.log("Hello");

function getPin(){

const pin = generatePin();

 const pinString = pin + '';

 if (pinString.length === 4) {
    return pin;
    
 }

 else {
   
    return getPin();
 }



}

function generatePin(){

const random = Math.round(Math.random()*10000);
return random ;

}

document.getElementById("genaret-pin").addEventListener('click',function(){


const pin = getPin();

const displayPinField = document.getElementById('display-pin');
displayPinField.value = pin;


})

document.getElementById('calculetor').addEventListener('click',function(event){

const number = event.target.innerText;
const typeNumberField = document.getElementById('typeControl');
const priveusTypeNumber = typeNumberField.value;
if (isNaN(number)) {
    if (number === 'C') {
        typeNumberField.value = '';
    }
   if (number === "P") {
        const digits = priveusTypeNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typeNumberField.vale = remainingDigits;
    }
}
else {
   
    
    const newTypeNumber = priveusTypeNumber + number;
    typeNumberField.value = newTypeNumber ;
}


// console.log(event.target.innerText)

})

document.getElementById('verify-pin').addEventListener('click',function(){


    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typeControl');
    const typenumber = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if (typenumber===currentPin) {
      
       pinSuccessMessage.style.display = 'block';
       pinFailureMessage.style.display = 'none';
    }
    else{
       
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }

})