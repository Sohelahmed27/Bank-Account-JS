document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawAmount = getInputValue('withdraw-input');
  console.log(withdrawAmount);

  const withdrawPreviousAmount = getTextValue('withdraw-text');
  console.log(withdrawPreviousAmount);

  //total Amount
 const totalAmount = withdrawAmount + withdrawPreviousAmount;

 //set text value to
 setTextValue('withdraw-text', totalAmount) ;

 //balance total
 const previousBalance = getTextValue('balance-text');
 const newBalance = previousBalance - withdrawAmount;
 setTextValue('balance-text', newBalance) ;
})