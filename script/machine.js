
// id pass get value
function getValueFromInput(id){
    const idInput = document.getElementById(id);
    const value = idInput.value;
    return value;
}

function clearFild(id){
    const idInput = document.getElementById(id);
    idInput.value = "";
}

// current balance 
function getBalance(){
    const balanceInput = document.getElementById("balance");
    const balance = balanceInput.innerText;
    return Number(balance); 
}

// Set balance
function setBalance(value){
    const balanceInput = document.getElementById("balance");
    balanceInput.innerText = value;
}

// machine set show only
function showOnly(id){
    // select option
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out");
    const history = document.getElementById("history");

    // hidden class add 
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    history.classList.add("hidden");

    // show only selected id
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}