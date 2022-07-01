
function payment(){
  var personName=document.getElementById("firstname_at").value;
  var gender=document.getElementById("select_gender").value;
  var email=document.getElementById("email_at").value;
  var number=document.getElementById("number_at").value;
  var address=document.getElementById("address_at").value;
  if(personName.length==0 ||  email.length==0 || number.length<=3){
    alert('Enter correct details')
  }else if(number.length!==13){
    alert("Enter Valid number")
  }
  else
  {
    window.location.href = "./payment.html"
  }
}
document.getElementById("hid_gue").addEventListener('click',hideElementGuest)
function hideElementGuest() {
    var x = document.getElementById("input_box");
    if (x.style.display === "none") {
      x.style.display = "block";

    } else {
      x.style.display = "none";
      document.querySelector("#hideguest").innerText="expand_less";

    }
  }


  document.getElementById("hid_cov").addEventListener('click',hideElementCovid)

  function hideElementCovid() {
    var x = document.getElementById("covid_policy");
    if (x.style.display === "none") {
      x.style.display = "block";

    } else {
      x.style.display = "none";
      document.querySelector("#hidecov").innerText="expand_less";

    }
  }


  document.getElementById("hid_prop").addEventListener('click',hideElementProperty)

  function hideElementProperty() {
    var x = document.getElementById("property_policy");
    if (x.style.display === "none") {
      x.style.display = "block";
 
    } else {
      x.style.display = "none";
      document.querySelector("#hideprop").innerText="expand_less";

    }
  }


  document.getElementById("hid_can").addEventListener('click',hideElementCancellation)
  function hideElementCancellation() {
    var x = document.getElementById("cancellation_policy");
    if (x.style.display === "none") {
      x.style.display = "block";
 
    } else {
      x.style.display = "none";
      document.querySelector("#hidecan").innerText="expand_less";

    }
  }


let summaryData = JSON.parse(localStorage.getItem("bookingDetails"));
if (summaryData == null) {
    localStorage.setItem("bookingDetails", JSON.stringify([]));
}

  document.getElementById("tax").innerText= "₹" + summaryData.taxAmount.toFixed(2);
  document.getElementById("taxinc").innerText= "₹" + summaryData.totalAmount.toFixed(2);;
  document.getElementById("payable").innerText= "₹" + summaryData.payAmount.toFixed(2);;
  document.getElementById("room_name").innerText=  summaryData.roomName;
  document.getElementById("amount").innerText= "₹" + summaryData.roomPrice.toFixed(2);;





  