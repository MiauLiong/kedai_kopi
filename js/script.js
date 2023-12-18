// toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active unuk search form
const seacrhForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  seacrhForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// munculkan Shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar elemen
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shoppingButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !seacrhForm.contains(e.target)) {
    seacrhForm.classList.remove("active");
  }

  if (!shoppingButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButtons.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
