const balance = document.getElementById('balance')
const moneyPlus = document.getElementById('money-plus')
const moneyMinus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dummyTransactions = [
  { id: 1, text: 'flowers', amount: -20 },
  { id: 2, text: 'Salary', amount: 250 },
  { id: 3, text: 'Books', amount: -10 },
  { id: 4, text: 'Lotto', amount: 1000 },
  { id: 5, text: 'Dinner', amount: -120 }
];

let transactions = dummyTransactions;

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push(transaction);

    AddtransactionDOM(transaction);

    updateValues();

    text.value = '';
    amount.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000);
}

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

// Update the balance, income and expences
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((accumulator, item) => (accumulator += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((accumulator, item) => (accumulator += item), 0)
    .toFixed(2);

  const expence = (
    amounts.filter(item => item < 0 )
    .reduce((accumulator, item) => (accumulator += item), 0) * -1)
    .toFixed(2);
  
  balance.innerText = `£${total}`
  moneyPlus.innerText = `£${income}`
  moneyMinus.innerText = `£${expence}`
}

//Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(AddtransactionDOM);
  updateValues()
}

init();

form.addEventListener('submit', addTransaction);