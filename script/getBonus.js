document.getElementById("get-bonus-btn").addEventListener("click", function () {
    const bonusCoupon = getValueFromInput("get-bonus-coupon-input");
    const balance = getBalance();
    const newBalance = balance + 500;
    if (bonusCoupon === "payoo") {
        alert("Congratulation! you win bonus 500 tk");
        setBalance(newBalance);

        // transaction history
        // 1.history container k dhore nea aste hobe
        const history = document.getElementById("history-container");
        // 2. new div create korte hobe.
        const newHistory = document.createElement("div");
        // 3. new div a innerHtml add korbo;
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-info/10 rounded-2xl mb-4">
            Congratulation you win bonus 500 tk ...\n New Balance ${newBalance}--${new Date()}
        </div>
        `
        // 4. history container a new div append korbo
        history.append(newHistory);

    }
    else {
        alert("Bad luck😒\nDid not matched Coupon..")
    }
    clearFild("get-bonus-coupon-input");
})