const paymentForm = document.getElementById("payment-form");

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardNumber = document.getElementById("card-number").value;
  const expiryDate = document.getElementById("expiry-date").value;
  const cvv = document.getElementById("cvv").value;
  const amount = document.getElementById("amount").value;

  console.log(`Card Number: ${cardNumber}`);
  console.log(`Expiry Date: ${expiryDate}`);
  console.log(`CVV: ${cvv}`);
  console.log(`Amount: ${amount}`);
});
