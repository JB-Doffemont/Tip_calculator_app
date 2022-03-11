document.addEventListener("DOMContentLoaded", () => {
  // Call elements from Dom
  let bill = document.querySelector("#bill_input");
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
  let error = document.querySelector("#error_message");

  function tipAmountFive() {
    // Event on click to define the percentage
    percentFive.addEventListener("click", () => {
      percentFive.className = "clicked";
      percentTen.className = "";
      percentFifteen.className = "";
      percentTwentyFive.className = "";
      percentFifty.className = "";
      percentAmount = 5;
      console.log(percentAmount);

      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);

        tipAmount.innerHTML = "$" + Math.round(tipPerson * 100) / 100;

        reset.id = "completed";

        totalPerPerson();
      });
    });
  }
  tipAmountFive();

  function tipAmountTen() {
    percentTen.addEventListener("click", () => {
      percentTen.className = "clicked";
      percentFive.className = "";
      percentFifteen.className = "";
      percentTwentyFive.className = "";
      percentFifty.className = "";

      percentAmount = 10;
      console.log(percentAmount);

      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = "$" + Math.round(tipPerson * 100) / 100;

        reset.id = "completed";

        totalPerPerson();
      });
    });
  }
  tipAmountTen();

  function tipAmountFifteen() {
    percentFifteen.addEventListener("click", () => {
      percentFifteen.className = "clicked";
      percentTen.className = "";
      percentFive.className = "";
      percentTwentyFive.className = "";
      percentFifty.className = "";
      percentAmount = 15;
      console.log(percentAmount);

      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = "$" + Math.round(tipPerson * 100) / 100;

        reset.id = "completed";

        totalPerPerson();
      });
    });
  }

  tipAmountFifteen();

  function tipAmountTwentyFive() {
    percentTwentyFive.addEventListener("click", () => {
      percentTwentyFive.className = "clicked";
      percentTen.className = "";
      percentFifteen.className = "";
      percentFive.className = "";
      percentFifty.className = "";
      percentAmount = 25;
      console.log(percentAmount);

      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = "$" + Math.round(tipPerson * 100) / 100;

        reset.id = "completed";

        totalPerPerson();
      });
    });
  }
  tipAmountTwentyFive();

  function tipAmountFifty() {
    percentFifty.addEventListener("click", () => {
      percentFifty.className = "clicked";
      percentTen.className = "";
      percentFifteen.className = "";
      percentTwentyFive.className = "";
      percentFive.className = "";
      percentAmount = 50;
      console.log(percentAmount);

      person.addEventListener("input", () => {
        total_tip = (bill.value * percentAmount) / 100;
        console.log(total_tip);
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = "$" + Math.round(tipPerson * 100) / 100;

        reset.id = "completed";
        totalPerPerson();
      });
    });
  }

  tipAmountFifty();

  // Function to get the total amount by person
  function totalPerPerson() {
    totalPerson.innerHTML =
      "$" + Math.round((bill.value / person.value + tipPerson) * 100) / 100;

    return totalPerson;
  }

  // Event to display input field
  custom.addEventListener("click", () => {
    custom.type = "number";
    custom.value = "";
    custom.className = "custom_clicked";
    percentFive.className = "";
    percentTen.className = "";
    percentFifteen.className = "";
    percentTwentyFive.className = "";
    percentFifty.className = "";
    // Event to calculate total amount of tips
    custom.addEventListener("input", () => {
      console.log(custom.value);
      total_tip = (bill.value * custom.value) / 100;
      console.log(total_tip);
      // Event to calculate tips + total per person
      person.addEventListener("input", () => {
        if (person.value == 0) {
          error.style.display = "inline";
        }
        tipPerson = total_tip / person.value;
        console.log(tipPerson);
        tipAmount.innerHTML = "$" + Math.round(tipPerson);

        reset.id = "completed";

        totalPerPerson();
      });
    });
  });

  function resetField() {
    reset.addEventListener("click", () => {
      bill.value = "0";
      custom.value = "Custom";
      person.value = "0";
      tipAmount.innerHTML = "$0.00";
      totalPerson.innerHTML = "$0.00";
    });
  }

  resetField();

  function inputActive() {
    // event to get class name on click
    person.addEventListener("click", () => {
      person.value = "";
      person.className = "clicked";
    });

    person.addEventListener("input", () => {
      if (person.value == 0) {
        person.style.outlineColor = "hsl(36, 90%, 50%)";
        error.style.display = "inline";
      } else {
        error.style.display = "none";
      }
    });

    bill.addEventListener("click", () => {
      bill.value = "";
      bill.className = "clicked";
    });
  }

  inputActive();
});
