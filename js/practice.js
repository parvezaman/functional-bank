var newDeposit = 0;

document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('n');
    const depositInput = document.getElementById('deposit-input');
    const depositAmmount = depositInput.value;
    newDeposit = newDeposit + parseFloat(depositAmmount);

    // console.log(typeof(depositAmmount));
    const depositTotal = document.getElementById('deposit-total');
    const balanceTotal = document.getElementById('balance-total');
    depositTotal.innerText = newDeposit;

    balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositAmmount);


    depositInput.value = '';
})



var newWithdraw = 0;

document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('j');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawTotal = document.getElementById('withdraw-total');
    let balanceTotal = document.getElementById('balance-total');


    newWithdraw = newWithdraw + parseFloat(withdrawInput.value);

    withdrawTotal.innerText = newWithdraw;


    balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(newWithdraw);

    withdrawInput.value = '';
})