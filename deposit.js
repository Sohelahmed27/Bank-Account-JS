document.getElementById('deposit-btn').addEventListener('click', function(){
  const depositAmount = getInputValue('deposit-input');
  console.log(depositAmount);

  const depositPreviousAmount = getTextValue('deposit');
  console.log(depositPreviousAmount);

  //total Amount
 const totalAmount = depositAmount + depositPreviousAmount;

 //set text value to
 setTextValue('deposit', totalAmount) ;

 //balance total
 const previousBalance = getTextValue('balance-text');
 const newBalance = previousBalance + depositAmount;
 setTextValue('balance-text', newBalance) ;
})