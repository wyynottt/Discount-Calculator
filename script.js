const button=document.getElementById('calculate');
const resetbtn=document.getElementById('reset');

button.addEventListener('click',(e) => {
  e.preventDefault();
  const audio= document.getElementById('audio');
  
  audio.play();


let billAmt=parseFloat(document.getElementById('amount').value);
let percentage= parseFloat(document.getElementById('discount-percentage').value);
let discountAmt=document.getElementById('discount-amount');
let finalPay=document.getElementById('pay');

if(isNaN(billAmt)|| billAmt<=0){
  alert("plz enter valid number!!");
  return
}

let discountValue=(billAmt*percentage)/100;
discountAmt.value=discountValue.toFixed(2);
finalPay.value=(billAmt-discountValue).toFixed(2);
finalPay.style.fontWeight="bold";
finalPay.style.color="green";
discountAmt.style.fontWeight="bold";


});



  resetbtn.addEventListener('click',() => {
    window.location.reload();

  });