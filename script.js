class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    checkBalance() {
        return this.balance;
    }
}

let account = new BankAccount(1000);

document.getElementById('checkBalance').addEventListener('click', function() {
    document.getElementById('balance').innerText = 'Your balance is: $' + account.checkBalance();
});