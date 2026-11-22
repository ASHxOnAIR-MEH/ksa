function membershipCosts(price, fee, months, visits) {
  const total = price + fee;
  return [total, total / months, total / (months * visits)];
}
if (typeof module !== "undefined") module.exports = membershipCosts;
if (typeof document !== "undefined") {
  const form = document.querySelector("#plan");
  const result = document.querySelector("#result");
  const money = new Intl.NumberFormat("en", { style: "currency", currency: "SAR" });
  form.oninput = () => { result.textContent = ""; };
  form.onsubmit = event => {
    event.preventDefault();
    const values = ["price", "fee", "months", "visits"].map(name => form.elements[name].valueAsNumber);
    const [total, monthly, perVisit] = membershipCosts(...values).map(n => money.format(n));
    result.textContent = total + " total / " + monthly + " per month / " + perVisit + " per visit";
  };
}

