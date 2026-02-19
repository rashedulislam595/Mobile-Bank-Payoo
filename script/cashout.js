// sort code use from machine functionality
document.getElementById("cashout-btn").addEventListener("click",function(){
    // step 1 : get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-input");
    if(cashoutNumber.length != 11){
        alert("Provide valid agent number.")
        return
    }
    // step 2 : get the amount, validate, convert to number.
    const cashoutAmount = getValueFromInput("cashout-amount");

    // step 3 : get the current balance, validate, convert to number
    const currentBalance = getBalance();

    // step 4: calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance<0){
        alert("Amount is not found your account");
        return;
    }

    // step 5 : get the pin & verify
    const pin = getValueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("Cash Out Successful");
        setBalance(newBalance);

        // transaction history
        // 1.history container k dhore nea aste hobe
        const history = document.getElementById("history-container");
        // 2. new div create korte hobe.
        const newHistory = document.createElement("div"); 
        // 3. new div a innerHtml add korbo;
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-info/10 rounded-2xl mb-4">
            Cash Out successful...\nCash OUt Number--> ${cashoutNumber} cash out balance: ${cashoutAmount}\n${new Date()}\n & Total Balance ${newBalance}
        </div>
        `
        // 4. history container a new div append korbo
        history.append(newHistory);
    }else{
        alert("Pin is Wrong!!!")
    }
    clearFild("cashout-input");
    clearFild("cashout-amount");
    clearFild("cashout-pin");
    
})


// // clicked withdraw btn
// document.getElementById("cashout-btn").addEventListener("click", function () {
//     // step 1 : get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-input");
//     const cashoutNumber = cashoutNumberInput.value;
//     // number validation
//     if (cashoutNumber.length != 11) {
//         alert("provide valid agent number");
//         return
//     }

//     // step 2 : get the amount, validate, convert to number.  
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;


//     // step 3 : get the current balance, validate, convert to number.
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;

//     // step 4: calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if (newBalance < 0) {
//         alert("Amount is not found your account");
//         return;
//     }


//     // step 5 : get the pin & verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;
//     if (pin === "1234") {
//         // 5.1 : true::--> show an alert and set balance
//         alert("Cash Out Successful!!");
//         balanceElement.innerText = newBalance;
//     }
//     else {
//         // 5.2 : false::--> show an error alert and return 
//         alert("Your PIN is wrong!!")
//         cashoutNumberInput.value = "";
//         cashoutAmountInput.value = "";
//         cashoutPinInput.value = "";
//         return;
//     }

//     // input filed clear
//     cashoutNumberInput.value = "";
//     cashoutAmountInput.value = "";
//     cashoutPinInput.value = "";

// })