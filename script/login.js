
// login btn select
document.getElementById("login-btn").addEventListener("click",function(){
    // step 1 : get the mobile number input
    const numberInput = document.getElementById("number-input");
    const number = numberInput.value;

    // step 2 : get the pin input
    const pinInput = document.getElementById("pin-input");
    const pin = pinInput.value;

    // step 3 : matched mobile number & pin 
    if(number == "01777722222" && pin == "1234"){
        // step 3.1 ::: matched true::--> alert>>home page 
        alert("Login Successful");
        window.location.assign("./home.html")
    }
    // step 3.2 ::: matched False::--> alert>> return
    else{
        alert("Login Failed");
        return
    }

}) 




 
  