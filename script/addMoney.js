
document.getElementById("add-money-btn").addEventListener("click", function () {
    // get bank 
    const addMoneyBank = getValueFromInput("add-money-bank");
    if (addMoneyBank === "Select bank") {
        alert("Please select a bank ");
        return;
    }
    // get add money number
    const addMoneyNumber = getValueFromInput("add-money-number-input");
    if (addMoneyNumber.length != 11) {
        alert("Provide a valid account Number");
        return;
    }

    // get add money
    const addMoney = getValueFromInput("add-money-amount");
    if (addMoney < 1) {
        alert("Please write an amount");
        return;
    }

    // get account balance and calculate new balance
    const balance = getBalance();
    const newBalance = balance + Number(addMoney);

    // get pin
    const pin = getValueFromInput("add-money-pin");
    if (pin === "") {
        alert("Provide your secret pin");
        clearFild("add-money-number-input");
        clearFild("add-money-amount");
        clearFild("add-money-pin");
        return;
    }
    else if (pin === '1234') {
        alert(`Add money successful...\nyour Bank--> ${addMoneyBank}\n${new Date()}\nadd balance: ${addMoney} & Total Balance ${newBalance}`);
        setBalance(newBalance);

        // transaction history
        // 1.history container k dhore nea aste hobe
        const history = document.getElementById("history-container");
        // 2. new div create korte hobe.
        const newHistory = document.createElement("div"); 
        // 3. new div a innerHtml add korbo;
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-info/10 rounded-2xl mb-4">
            Add money successful...\nyour Bank--> ${addMoneyBank} account no: ${addMoneyNumber}\n${new Date()}\nadd balance: ${addMoney} & Total Balance ${newBalance}
        </div>
        `
        // 4. history container a new div append korbo
        history.append(newHistory);
    }
    else {
        alert("Pin not matched!");
    }

    // clear fild 
    clearFild("add-money-number-input");
    clearFild("add-money-amount");
    clearFild("add-money-pin");

})