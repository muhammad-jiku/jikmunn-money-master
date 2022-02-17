// function for input value
function getInputValue(moneyAmount) {
  let inputValue = document.getElementById(moneyAmount + '-amount');
  let inputValueAmount = parseInt(inputValue.value);
  if (isNaN(inputValueAmount) || inputValueAmount < 0) {
    inputValue.value = '';
    return alert('Please insert valid number of money!');
  }
  return inputValueAmount;
}

// function for expense calculation
function expenseCalculation() {
  let incomeAmount = getInputValue('income');
  let foodExpenseAmount = getInputValue('food-expense');
  let clothesExpenseAmount = getInputValue('clothes-expense');
  let rentExpenseAmount = getInputValue('rent-expense');

  let totalExpenseAmountText = document.getElementById('expense-amount-total');
  let totalExpenseAmount =
    foodExpenseAmount + clothesExpenseAmount + rentExpenseAmount;

  let balanceAmountText = document.getElementById('balance-amount');
  let balanceAmount = incomeAmount - totalExpenseAmount;

  if (incomeAmount < totalExpenseAmount) {
    return alert('You can not spend more money than you earn!');
  }
  totalExpenseAmountText.innerText = totalExpenseAmount;
  balanceAmountText.innerText = balanceAmount;

  return balanceAmount;
}

// function for save and remain balance calculation
function saveAndRemainBalanceCalculation() {
  let incomeAmount = getInputValue('income');
  let savingAmount = getInputValue('saving');

  let totalBalance = expenseCalculation();

  let totalSave = (incomeAmount * savingAmount) / 100;
  let savingTotalText = document.getElementById('saving-amount-total');

  let remainingBalanceText = document.getElementById('remaining-amount-total');

  if (totalSave > totalBalance) {
    return alert('You can not save more money than you have!');
  }
  savingTotalText.innerText = totalSave;
  let remainingBalance = totalBalance - totalSave;

  remainingBalanceText.innerText = remainingBalance;
}

// clicking button to invoke function for expense calculation
document
  .getElementById('calculate-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    expenseCalculation();
  });

// clicking button to invoke save and remain balance calculation
document.getElementById('save-btn').addEventListener('click', function (event) {
  event.preventDefault();
  saveAndRemainBalanceCalculation();
});
