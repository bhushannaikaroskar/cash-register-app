
const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");

const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

var notes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click",()=>{
    hideMessage();
    if(billAmount.value > 0){
        if(cashAmount.value >= billAmount.value){
            const change = cashAmount.value - billAmount.value;
            calculateChange(change);
        }else{
            showMessage("Cash Amount should be greater than bill");
        }
    }else{
        if(typeof(billAmount.value) === "number"){
            showMessage("Bill Amount should be greater than zero.");
        }else{
            showMessage("Please enter numeric value");
        }
    }
});

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerHTML = msg;
}

function calculateChange(amountToReturn){
    for(let i=0 ; i<notes.length ; i++){
        const numberOfNotes = Math.trunc(amountToReturn/notes[i]);
        amountToReturn %= notes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}