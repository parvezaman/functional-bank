function inputValue(inputVariable, outputVariable, balanceVariable,isAdd){
    const inputButton = document.getElementById(inputVariable);
    const inputAmmount = inputButton.value;
    const outputCase = document.getElementById(outputVariable);
    const balance = document.getElementById(balanceVariable);
    outputCase.innerText = parseFloat(inputAmmount) + parseFloat(outputCase.innerText);

    if(isAdd == true){
        balance.innerText = parseFloat(balance.innerText) + parseFloat(inputAmmount);
    }
    else if(isAdd == false){
        balance.innerText = parseFloat(balance.innerText) - parseFloat(inputAmmount);
    }
    

    inputButton.value = '';
}

document.getElementById('deposit-button').addEventListener('click',function(){
    inputValue('deposit-input', 'deposit-total','balance-total',true);
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    inputValue('withdraw-input' ,'withdraw-total', 'balance-total', false);
})