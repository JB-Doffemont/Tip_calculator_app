document.addEventListener("DOMContentLoaded", () => {
  // Appel des éléments du Dom
  let bill = document.querySelector("#bill");
  let percent = document.querySelector("#percent");
  let person = document.querySelector("#nb_people");
  let tipAmount = document.querySelector("#tip_amount");

  percent.addEventListener("click", () => {
    console.log(percent.value);
    tipPerPerson();
  });

  function tipPerPerson() {
    total_tip = (bill.value * percent.innerHTML) / 100;
    console.log(total_tip);

    person.addEventListener("input", () => {
      tipPerson = total_tip / person.value;
      console.log(tipPerson);
      tipAmount.innerHTML = tipPerson;
      return tipPerson;
    });
  }
});
