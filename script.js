const products = [
  { name: "KitKat", price: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2p2FbrZqyTlIZEKA6Em2QLXhGxbrSRRme-I2G7I9Wig&s=10" },
  { name: "Pringles", price: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0FGP8dsLB1VXB0oui1ZWHELHGeuhWteyJFDMtp6DYA&s=10" },
  { name: "Tupperware", price: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZqGlw90x6i3ZwGg5qherop1xDUYi_Yo8Wao70U_b8g&s" }
];
const grid = document.querySelector(".grid");

products.forEach(function (product) {
  grid.innerHTML += `
    <div class="product">
      <img src="${product.img}" alt="${product.name}" width="100">
      <h3>${product.name}</h3>
      <p>price: $${product.price}</p>
      <button class="add-btn" data-price="${product.price}">Add To Cart</button>
    </div>
  `;
});
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
