function inputValue(isDeposit,inputVariable, outputVariable, balanceVariable){
    const inputButton = document.getElementById(inputVariable);
    const inputAmmount = parseFloat(inputButton.value);

    const outputCase = document.getElementById(outputVariable);
    const balance = document.getElementById(balanceVariable);


    if(isDeposit == true){
        if(inputAmmount>=0){
            outputCase.innerText = parseFloat(inputAmmount) + parseFloat(outputCase.innerText);
            balance.innerText = parseFloat(balance.innerText) + parseFloat(inputAmmount);
        }
        else{
            return alert('input a number > 0');
        }    
        
    }
    else if(isDeposit == false){
        if(inputAmmount>balance.innerText){
            return alert('insufficient balance');
         }
        else if(inputAmmount>=0){
            outputCase.innerText = parseFloat(inputAmmount) + parseFloat(outputCase.innerText);

            balance.innerText = parseFloat(balance.innerText) - parseFloat(inputAmmount);
        }  
        else{
            return alert('input a number > 0');
        }

    }

    inputButton.value = '';
}


document.getElementById('deposit-button').addEventListener('click',function(){
    inputValue(true, 'deposit-input', 'deposit-total','balance-total');
})


document.getElementById('withdraw-button').addEventListener('click',function(){
    inputValue(false, 'withdraw-input' ,'withdraw-total', 'balance-total');
})