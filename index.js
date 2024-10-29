const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".themeToggler");
const Orders = document.querySelector(".add-product");
//show sidebar
// menuBtn.addEventListener("click", () => {
//   sideMenu.style.display = "block";
// });
//CLOSE SIDEBAR
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
// CHANGE THEME

const toggleButton = document.getElementById("toggle-button");
const body = document.body;

toggleButton.addEventListener("click", () => {
  // console.log("hello");
  body.classList.toggle("dark-mode");
  // Optionally, save the preference to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Apply the saved theme on page load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
});

// fill orders in table
// Orders.forEach((order) => {
//   const tr = document.createElement("tr");
//   const trContent = `
//                         <td>${order.productName}</td>

//                           <td>${order.productNumber}</td>
//                            <td>${order.paymentStatus}</td>
//                                <td class="${
//                                  order.shipping === "Declined"
//                                    ? "danger"
//                                    : order.shipping === "pending"
//                                    ? "warning"
//                                    : "primary"
//                                }">${order.shipping}</td>
//                           <td class="primary">Details</td>`;
//   tr.innerHTML = trContent;
//   document.querySelector("table tbody").appendChild(tr);
// });

let logout = document.getElementsByClassName("logout")[0];
console.log(logout);

logout.addEventListener("click", () => {
  fetch("login/index.html");
  console.log("hello");
});
