document.addEventListener("DOMContentLoaded", () => {
  // Call elements from Dom
  let bill = document.querySelector("#bill_input");
  let percent = Array.from(document.querySelectorAll(".percent"));
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
    percentFive.addEventListener("click", () => {
      SelectTipActive();
      percentFive.classList.add("clicked");

      total_tip = bill.value * 0.05;
      calcul();

      person.addEventListener("input", () => {
        calcul();
      });
    });
  }
  tipAmountFive();

  function tipAmountTen() {
    percentTen.addEventListener("click", () => {
      SelectTipActive();
      percentTen.classList.add("clicked");

      total_tip = bill.value * 0.1;
      calcul();

      person.addEventListener("input", () => {
        calcul();
      });
    });
  }
  tipAmountTen();

  function tipAmountFifteen() {
    percentFifteen.addEventListener("click", () => {
      SelectTipActive();
      percentFifteen.classList.add("clicked");

      total_tip = bill.value * 1.15;
      calcul();

      person.addEventListener("input", () => {
        calcul();
      });
    });
  }

  tipAmountFifteen();

  function tipAmountTwentyFive() {
    percentTwentyFive.addEventListener("click", () => {
      SelectTipActive();
      percentTwentyFive.classList.add("clicked");

      total_tip = bill.value * 0.25;
      calcul();

      person.addEventListener("input", () => {
        calcul();
      });
    });
  }
  tipAmountTwentyFive();

  function tipAmountFifty() {
    percentFifty.addEventListener("click", () => {
      SelectTipActive();
      percentFifty.classList.add("clicked");

      total_tip = bill.value * 0.5;
      calcul();

      person.addEventListener("input", () => {
        calcul();
      });
    });
  }

  tipAmountFifty();

  // Event to display input field
  custom.addEventListener("click", () => {
    custom.type = "number";
    custom.value = "";
    SelectTipActive();
    custom.classList.add("custom_clicked");

    // Event to calculate total amount of tips
    custom.addEventListener("input", () => {
      if (custom.value > 0 && custom.value <= 100) {
        total_tip = (bill.value * custom.value) / 100;
        calcul();
      }
      // Event to calculate tips + total per person
      person.addEventListener("input", () => {
        if (person.value == 0 || person.value == empty) {
          error.style.display = "inline";
        }
        calcul();
      });
    });
  });
  // Function to get tip amount per person and total per person
  function calcul() {
    function tipAmountPerPerson() {
      tipPerson = total_tip / person.value;

      if (tipPerson == Infinity) {
        tipAmount.innerHTML = "$0.00";
        totalPerPerson.innerHTML = "0.00";
      } else {
        if (bill.value > 0 && person.value > 0) {
          tipAmount.innerHTML = "$" + Math.round(tipPerson * 100) / 100;
        }
      }
      reset.id = "completed";
    }
    tipAmountPerPerson();

    // Function to get the total amount by person
    function totalPerPerson() {
      if (tipPerson == Infinity) {
        totalPerson.innerHTML = "$0.00";
        totalPerPerson.innerHTML = "0.00";
      } else {
        if (bill.value > 0 && person.value > 0) {
          totalPerson.innerHTML =
            "$" +
            Math.round((bill.value / person.value + tipPerson) * 100) / 100;
        }
      }
    }
    totalPerPerson();
  }

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

  function SelectTipActive() {
    percent.forEach((element) => {
      if (element.classList.contains("clicked")) {
        element.classList.remove("clicked");
      }
    });
  }
});
