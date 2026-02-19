
document.getElementById("send-money-btn").addEventListener("click",function(){
    // get number 
    const sendNumber = getValueFromInput("send-money-number-input");
    if(sendNumber.length != 11){
        alert("Please valid Number.")
        return;
    }

    // get current balance
    const balance = getBalance();
    
    // get amount 
    const sendAmount = Number(getValueFromInput("send-money-amount"));
    if(sendAmount<1 || balance<sendAmount){
        alert("This balance is not found your account");
        return;
    }

    // newBalance
    const newBalance = balance - sendAmount;

    // get pin
    const pin = getValueFromInput("send-money-pin");
    if(pin === ""){
        alert("Enter your 4 digit pin number ")
        return;
    }
    else if(pin === "1234"){
        alert("Send money successful.");
        setBalance(newBalance);

         // transaction history
        // 1.history container k dhore nea aste hobe
        const history = document.getElementById("history-container");
        // 2. new div create korte hobe.
        const newHistory = document.createElement("div"); 
        // 3. new div a innerHtml add korbo;
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-info/10 rounded-2xl mb-4">
            Send Money Successful...\nYour Number--> ${sendNumber}\n${new Date()}\nsend balance: ${sendAmount} & New Balance ${newBalance}
        </div>
        `
        // 4. history container a new div append korbo
        history.append(newHistory);
    }
    else{
        alert("Pin didn't matched!");
    }

    clearFild("send-money-number-input");
    clearFild("send-money-amount");
    clearFild("send-money-pin");
})