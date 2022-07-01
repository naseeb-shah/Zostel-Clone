
function payment()
{
    event.preventDefault();
    var cardNumber = document.querySelector('#cardNumber').value;
    var cvv = document.querySelector('#cvv_in').value;
    var expiry = document.querySelector('#expiry').value;
    if(cardNumber.length >= 16 && cvv.length==3 && expiry)
    {
        window.location.href = './after_payment.html'
    }
    else{
        alert('Enter correct details');
    }
}


let summaryData = JSON.parse(localStorage.getItem("bookingDetails"));
if (summaryData == null) {
    localStorage.setItem("bookingDetails", JSON.stringify([]));
}
document.querySelector('.amount').textContent= "₹" + summaryData.payAmount.toFixed(2);
document.querySelector('#pay_amount').textContent= "₹" + summaryData.payAmount.toFixed(2);