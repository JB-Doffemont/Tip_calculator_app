// Call elements from Dom
let bill = document.querySelector("#bill");
let percentAmount = 0;
let percentFive = document.querySelector("#percent_five");
let percentTen = document.querySelector("#percent_ten");
let percentFifteen = document.querySelector("#percent_fifteen");
let percentTwentyFive = document.querySelector("#percent_twentyFive");
let percentFifty = document.querySelector("#percent_fifty");
let person = document.querySelector("#nb_people");
let tipAmount = document.querySelector("#tip_amount");
let totalPerson = document.querySelector("#total_person");

// Event on click to define the percentage
percentFive.addEventListener("click", () => {
  percentAmount = 5;
  console.log(percentAmount);
  tipPerPerson(percentAmount);
});

percentTen.addEventListener("click", () => {
  percentAmount = 10;
  console.log(percentAmount);
  tipPerPerson(percentAmount);
});

percentFifteen.addEventListener("click", () => {
  percentAmount = 15;
  console.log(percentAmount);
  tipPerPerson(percentAmount);
});

percentTwentyFive.addEventListener("click", () => {
  percentAmount = 25;
  console.log(percentAmount);
  tipPerPerson(percentAmount);
});

percentFifty.addEventListener("click", () => {
  percentAmount = 50;
  console.log(percentAmount);
  tipPerPerson(percentAmount);
});

// Functions to get tips per person by percentage
function tipPerPerson() {
  if (percentAmount == 5) {
    person.addEventListener("input", () => {
      total_tip = (bill.value * percentFive.innerHTML) / 100;
      console.log(total_tip);
      tipPerson = total_tip / person.value;
      console.log(tipPerson);
      tipAmount.innerHTML = tipPerson;

      totalPerPerson();
    });
  } else if (percentAmount == 10) {
    person.addEventListener("input", () => {
      total_tip = (bill.value * percentTen.innerHTML) / 100;
      console.log(total_tip);
      tipPerson = total_tip / person.value;
      console.log(tipPerson);
      tipAmount.innerHTML = tipPerson;

      totalPerPerson();
    });
  } else if (percentAmount == 15) {
    person.addEventListener("input", () => {
      total_tip = (bill.value * percentFifteen.innerHTML) / 100;
      console.log(total_tip);
      tipPerson = total_tip / person.value;
      console.log(tipPerson);
      tipAmount.innerHTML = tipPerson;

      totalPerPerson();
    });
  } else if (percentAmount == 25) {
    person.addEventListener("input", () => {
      total_tip = (bill.value * percentTwentyFive.innerHTML) / 100;
      console.log(total_tip);
      tipPerson = total_tip / person.value;
      console.log(tipPerson);
      tipAmount.innerHTML = tipPerson;

      totalPerPerson();
    });
  } else if (percentAmount == 50) {
    person.addEventListener("input", () => {
      total_tip = (bill.value * percentFifty.innerHTML) / 100;
      console.log(total_tip);
      tipPerson = total_tip / person.value;
      console.log(tipPerson);
      tipAmount.innerHTML = tipPerson;

      totalPerPerson();
    });
  }
}

// Function to get the total amount by person
function totalPerPerson() {
  totalPerson.innerHTML = bill.value / person.value + tipPerson;
  return totalPerson;
}
