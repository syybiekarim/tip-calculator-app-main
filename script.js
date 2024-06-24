const tipbuttons = document.getElementsByClassName("tipButton");
const billInput = document.getElementById("bill-number");
const numberOfPeople = document.getElementById("count_input");
const tip_output = document.getElementById("tip_output");
const total_output = document.getElementById("total_output");
const reset_button = document.getElementById("reset");
const custom_num = document.getElementById("custom-number")


for (let i = 0; i < tipbuttons.length; i++) {
  tipbuttons[i].addEventListener("click", (e) => {
    e.preventDefault();
    const tipValue = parseFloat(tipbuttons[i].value);
    for (let j = 0; j < tipbuttons.length; j++) {
      tipbuttons[j].classList.remove("background-fill");
    }
    tipbuttons[i].classList.add("background-fill");

    if (tipbuttons[i].classList.contains("background-fill") && tipValue > 0) {
      tipAmountCalc(tipValue);
    } else {
      tip_output.textContent = "0.00";
      total_output.textContent = "0.00";
    }
  },
  // custom_num.addEventListener('input', tipAmountCalc(tipValue))
);
}

function tipAmountCalc(tipValue) {
  const billAmount = parseFloat(billInput.value);
  const peopleCount = parseFloat(numberOfPeople.value);
  if (
    !isNaN(billAmount) &&
    !isNaN(peopleCount) &&
    peopleCount > 0 &&
    tipValue > 0
  ) {
    const tipAmount = (billAmount * tipValue) / 100 / peopleCount;
    const totalAmount =
      ((billAmount * tipValue) / 100 + billAmount) / peopleCount;
    tip_output.textContent = tipAmount.toFixed(2);
    total_output.textContent = totalAmount.toFixed(2);
  } else {
    tip_output.textContent = "$0.00";
    total_output.textContent = "$0.00";
  }
}

billInput.addEventListener("input", () => {
  const selectedTip = document.querySelector(".tipButton.background-fill");
  const AmountCalc = selectedTip ? parseFloat(selectedTip.value) : 0;
  tipAmountCalc(AmountCalc);
  // tipAmountCalc(
  //   parseFloat(document.querySelector(".tipButton.background-fill").value)
  // );
});
numberOfPeople.addEventListener("input", () => {
  if (parseFloat(numberOfPeople.value) <= 0) {
    const zero_error = document.getElementById('zero_error')
    numberOfPeople.classList.add("border-red")
    zero_error.classList.add("error_message")
  } else {
    numberOfPeople.classList.remove("border-red")
    zero_error.classList.remove("error_message")
    tipAmountCalc(
      parseFloat(document.querySelector(".tipButton.background-fill").value)
    );
  }
});

reset_button.addEventListener("click", (e) => {
  e.preventDefault();
  billInput.value = "";
  numberOfPeople.value = "";
  custom_num.value = "";
  for (let g = 0; g < tipbuttons.length; g++) {
    tipbuttons[g].classList.remove("background-fill");
  }
  tip_output.textContent = "0.00";
  total_output.textContent = "0.00";
});

// function TipAndTotal() {
//     tipAmountCalc()
//     //value
// }
