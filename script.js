let balance = 100.0

function checkBalance() {
    document.getElementById("transaction-output").innerText = `Your current balance is: INR ${balance.toFixed(2)}`;
}

function depositMoney() {
    let amount = prompt("Enter amount to deposit:");
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than zero.");
        return;
    }

    balance += amount;
    document.getElementById("transaction-output").innerText = `Deposit successful! Your new balance: INR ${balance.toFixed(2)}`;
}

function withdrawMoney() {
    let amount = prompt("Enter amount to withdraw:");
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than zero.");
        return;
    }

    if (amount > balance) {
        alert("Insufficient funds!");
        return;
    }

    balance -= amount;
    document.getElementById('transaction-output').innerText = `Withdrawal successful! New balance: INR ${balance.toFixed(2)}`;
    
}

function exitATM() {
    document.getElementById("transaction-output").innerText = "Thank you for using ATM. Goodbye!";
}