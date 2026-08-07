let cartCount = 0;
let cartTotal = 0;

const cartDisplay = document.querySelector("#cart-count");
const totalDisplay = document.querySelector("#cart-total");
const addButtons = document.querySelectorAll(".add-btn");
const checkoutBtn = document.querySelector("#checkout-btn");

addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const price = Number(button.dataset.price);

    cartCount = cartCount + 1;
    cartTotal = cartTotal + price;

    cartDisplay.textContent = "CART(" + cartCount + ")";
    totalDisplay.textContent = "$" + cartTotal;

    checkoutBtn.style.display = "inline-block";
  });
});

checkoutBtn.addEventListener("click", function () {
  localStorage.setItem("cartTotal", cartTotal);
  localStorage.setItem("cartCount", cartCount);
  window.location.href = "checkout.html";
});
