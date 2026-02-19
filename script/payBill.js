
document.getElementById("pay-bill-btn").addEventListener("click", function () {
    // get bank 
    const payBank = getValueFromInput("pay-bill-bank");
    if (payBank === "Select bank") {
        alert("Please Select a bank ");
        return;
    }

    // get pay bill account number
    const payNumber = getValueFromInput("pay-bill-number-input");
    if (payNumber.length != 11) {
        alert("Provide valid account number");
        return;
    }
    // get current balance
    const balance = getBalance();

    // get pay amount 
    const payAmount = Number(getValueFromInput("pay-bill-amount"));
    if (payAmount < 1) {
        alert("Write pay amount from amount filed!")
        return;
    }
    else if (payAmount > balance) {
        alert("Amount Not Found In Your Account")
        return;
    }

    // calculate new balance
    const newBalance = balance - payAmount;

    // get Pin
    const pin = getValueFromInput("pay-bill-pin");
    if (pin === "") {
        alert("Enter your 4 digit pin number");
        return;

    }
    else if (pin === "1234") {
        alert("Pay Bill Successful!");
        setBalance(newBalance);

        // transaction history
        // 1.history container k dhore nea aste hobe
        const history = document.getElementById("history-container");
        // 2. new div create korte hobe.
        const newHistory = document.createElement("div");
        // 3. new div a innerHtml add korbo;
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-info/10 rounded-2xl mb-4">
            Pay Bill Successful...\nBank-${payBank} Account No.  ${payNumber}\n${new Date()}\nPay Amount: ${payAmount} & New Balance ${newBalance}
        </div>
        `
        // 4. history container a new div append korbo
        history.append(newHistory);
    }
    else {
        alert("Pin Did Not Matched!");

    }
    clearFild("pay-bill-number-input");
    clearFild("pay-bill-amount");
    clearFild("pay-bill-pin");
})