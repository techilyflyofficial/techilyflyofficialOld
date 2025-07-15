// // Example: Show alert on load
// window.addEventListener("DOMContentLoaded", () => {
//   console.log("Website loaded");
// });
// // Inside script.js
// fetch('includes/header.html')
//   .then(res => res.text())
//   .then(data => document.body.insertAdjacentHTML("afterbegin", data));

// fetch('includes/footer.html')
//   .then(res => res.text())
//   .then(data => document.body.insertAdjacentHTML("beforeend", data));


  // Load general header and footer
document.addEventListener("DOMContentLoaded", function () {
  const basePath = location.pathname.includes("/blog/") ? "../" : "";
  fetch(`${basePath}includes/header.html`)
    .then(res => res.text())
    .then(data => document.getElementById("header-placeholder").innerHTML = data);

  fetch(`${basePath}includes/footer.html`)
    .then(res => res.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);
});
