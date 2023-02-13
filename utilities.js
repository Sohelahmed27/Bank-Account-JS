function getInputValue(id){
  const inputField =document.getElementById(id);
  const inputValueString = inputField.value;
  const inputValue = parseInt(inputValueString);
 inputField.value = '';
  return inputValue;
}

function getTextValue(id){
  const textField =document.getElementById(id);
  const textValuestring = textField.innerText;
  const textValue = parseFloat(textValuestring);
  return textValue;

}

 function setTextValue(id, newValue) {
  const textFeild = document.getElementById(id);
  textFeild.innerText = newValue;
 }