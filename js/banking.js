function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmmountText = inputField.value;
    const ammountValue = parseFloat(inputAmmountText);

    // clear input field
    inputField.value = ''; // upore deoar karon hocce function theke kno return pele function r tar porer kaj korbe na 

    return ammountValue;
    
}


document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('L');
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmmountText = depositInput.value;
    const depositAmmount = parseFloat(depositAmmountText); */
    // console.log(depositAmmount);

    const depositAmmount = getInputValue('deposit-input');

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmmount;
    // console.log(depositTotalText);

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    balanceTotal.innerText = previousBalanceTotal + depositAmmount;
/* 
    // clear input field
    depositInput.value = ''; */

})


// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('L');
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmmountText = withdrawInput.value;
    const withdrawAmmount = parseFloat(withdrawAmmountText); */

    const withdrawAmmount = getInputValue('withdraw-input');
    // console.log(withdrawAmmountText);

    // // get current deposit
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmmount;
    // // console.log(depositTotalText);

    // // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    balanceTotal.innerText = previousBalanceTotal - withdrawAmmount;

   /*  // // clear input field
    withdrawInput.value = ''; */

})