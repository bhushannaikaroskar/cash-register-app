
const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");

const message = document.querySelector("#error-message");

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
        showMessage("Invalid Input");
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
    console.log(amountToReturn);
}