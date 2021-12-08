const balance = document.getElementById('balance')
const moneyPlus = document.getElementById('money-plus')
const moneyMinus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('forms')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dummyTransactions = [
  { id: 1, text: 'flowers', amount: -20 },
  { id: 2, text: 'Salary', amount: 250 },
  { id: 3, text: 'Books', amount: -10 },
  { id: 4, text: 'Lotto', amount: 1000 },
  { id: 5, text: 'Dinner', amount: -120 },
]

let transactions = dummyTransactions;

// Add transactions to DOM list
function AddtransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}
    </span> <button class="delete-btn">x</button>
  `;

  list.appendChild(item);
}

//Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(AddtransactionDOM);
}

init();
