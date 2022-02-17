// expense section starts
document.getElementById('calculate-btn').addEventListener('click', function () {
  const incomeInput = document.getElementById('income-field');
  const incomeInputAmount = parseInt(incomeInput.value);
  const foodInput = document.getElementById('food-expense-field');
  const foodInputAmount = parseInt(foodInput.value);
  const clothInput = document.getElementById('cloth-expense-field');
  const clothInputAmount = parseInt(clothInput.value);
  const rentInput = document.getElementById('rent-expense-field');
  const rentInputAmount = parseInt(rentInput.value);

  const totalExpense = document.getElementById('total-expense');
  totalExpense.innerText = foodInputAmount + clothInputAmount + rentInputAmount;
  //   foodInput.value = '';
  //   clothInput.value = '';
  //   rentInput.value = '';

  const balanceAmount = document.getElementById('total-balance');
  balanceAmount.innerText = incomeInputAmount - totalExpense.innerText;
});

// saving section starts
document.getElementById('save-btn').addEventListener('click', function () {
  const savingInput = document.getElementById('save-field');
  //   savingInputAmount = parseInt(savingInput.value);

  const balanceAmount = document.getElementById('total-balance');
  const savingTotal = document.getElementById('total-saving');
  savingTotal.innerText =
    balanceAmount.innerText * (parseInt(savingInput.value) / 100);
  //   console.log(balance);

  const remainingAmount = document.getElementById('remaining-balance');
  remainingAmount.innerText = balanceAmount.innerText - savingTotal.innerText;
});
