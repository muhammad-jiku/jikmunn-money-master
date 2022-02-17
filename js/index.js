function getInputValue(money) {
  const inputValue = document.getElementById(money + '-amount');
  const inputValueAmount = parseInt(inputValue.value);
  return inputValueAmount;
}

function expenseCalculation() {
  const incomeAmount = getInputValue('income');
  const foodExpenseAmount = getInputValue('food-expense');
  const clothesExpenseAmount = getInputValue('clothes-expense');
  const rentExpenseAmount = getInputValue('rent-expense');

  const totalExpenseAmount =
    foodExpenseAmount + clothesExpenseAmount + rentExpenseAmount;
  const totalExpenseAmountText = document.getElementById(
    'expense-amount-total'
  );
  const balanceAmount = incomeAmount - totalExpenseAmount;
  const balanceAmountText = document.getElementById('balance-amount');

  if (incomeAmount < totalExpenseAmount) {
    totalExpenseAmountText.innerText =
      'You can not spend more money than you earn!';
    balanceAmountText.innerText = 'You can not spend more money than you earn!';
  } else {
    totalExpenseAmountText.innerText = totalExpenseAmount;
    balanceAmountText.innerText = balanceAmount;

    return balanceAmount;
  }
}

function saveAndRemainBalanceCalculation() {
  const incomeAmount = getInputValue('income');
  const savingAmount = getInputValue('saving');
  const totalBalance = expenseCalculation();

  const totalSave = incomeAmount * (savingAmount / 100);
  const savingTotalText = document.getElementById('saving-amount-total');

  const remainingBalanceText = document.getElementById(
    'remaining-amount-total'
  );

  if (totalSave > totalBalance) {
    savingTotalText.innerText = 'You can not save more money than you have!';
    remainingBalanceText.innerText = 'You need money to save!';
  } else {
    savingTotalText.innerText = totalSave;
    const remainingBalance = totalBalance - totalSave;

    remainingBalanceText.innerText = remainingBalance;
  }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
  expenseCalculation();
});

document.getElementById('save-btn').addEventListener('click', function () {
  saveAndRemainBalanceCalculation();
});
