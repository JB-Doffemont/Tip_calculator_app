document.addEventListener("DOMContentLoaded", () => {
  // Call elements from Dom
  let bill = document.querySelector("#bill");
  let percentAmount = "";
  let percentFive = document.querySelector("#percent_five");
  let percentTen = document.querySelector("#percent_ten");
  let percentFifteen = document.querySelector("#percent_fifteen");
  let percentTwentyFive = document.querySelector("#percent_twentyFive");
  let percentFifty = document.querySelector("#percent_fifty");
  let person = document.querySelector("#nb_people");
  let tipAmount = document.querySelector("#tip_amount");
  let totalPerson = document.querySelector("#total_person");
  let custom = document.querySelector("#custom");
  let reset = document.querySelector("#reset");

  function tipAmountFive() {
    // Event on click to define the percentage
    percentFive.addEventListener("click", () => {
      percentAmount = 5;
      console.log(percentAmount);
      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = tipPerson;

        totalPerPerson();
      });
    });
  }
  tipAmountFive();

  function tipAmountTen() {
    percentTen.addEventListener("click", () => {
      percentAmount = 10;
      console.log(percentAmount);
      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = tipPerson;

        totalPerPerson();
      });
    });
  }
  tipAmountTen();

  function tipAmountFifteen() {
    percentFifteen.addEventListener("click", () => {
      percentAmount = 15;
      console.log(percentAmount);
      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = tipPerson;

        totalPerPerson();
      });
    });
  }

  tipAmountFifteen();

  function tipAmountTwentyFive() {
    percentTwentyFive.addEventListener("click", () => {
      percentAmount = 25;
      console.log(percentAmount);
      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = tipPerson;

        totalPerPerson();
      });
    });
  }
  tipAmountTwentyFive();

  function tipAmountFifty() {
    percentFifty.addEventListener("click", () => {
      percentAmount = 50;
      console.log(percentAmount);
      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = tipPerson;

        totalPerPerson();
      });
    });
  }

  tipAmountFifty();

  // Function to get the total amount by person
  function totalPerPerson() {
    totalPerson.innerHTML = bill.value / person.value + tipPerson;
    return totalPerson;
  }

  // Event to display input field
  custom.addEventListener("click", () => {
    custom.type = "number";
    custom.value = "";
    // Event to calculate total amount of tips
    custom.addEventListener("input", () => {
      console.log(custom.value);
      total_tip = (bill.value * custom.value) / 100;
      console.log(total_tip);
      // Event to calculate tips + total per person
      person.addEventListener("input", () => {
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = tipPerson;

        totalPerPerson();
      });
    });
  });

  function resetField() {
    reset.addEventListener("click", () => {
      document.location.reload();
    });
  }

  resetField();
});
