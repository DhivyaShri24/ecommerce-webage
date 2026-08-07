const cartCount = Number(localStorage.getItem("cartCount")) || 0;
const cartTotal = Number(localStorage.getItem("cartTotal")) || 0;

const summaryCount = document.querySelector("#summary-count");
const summaryTotal = document.querySelector("#summary-total");
const emptyNote = document.querySelector("#empty-note");
const form = document.querySelector("#checkout-form");
const confirmation = document.querySelector("#confirmation");
const confirmDetail = document.querySelector("#confirm-detail");
const formBox = document.querySelector(".form-box");

summaryCount.textContent = cartCount;
summaryTotal.textContent = "$" + cartTotal;

if (cartCount === 0) {
  emptyNote.style.display = "block";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#fullname").value;

  confirmDetail.textContent =
    "Thanks, " + name + "! Your " + cartCount + " item(s) totalling $" + cartTotal + " are on the way.";

  formBox.classList.add("hide-form");
  confirmation.classList.add("show");

  localStorage.removeItem("cartCount");
  localStorage.removeItem("cartTotal");
});
