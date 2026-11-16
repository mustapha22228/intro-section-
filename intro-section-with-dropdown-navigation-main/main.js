const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

const navContent = document.getElementById("navContent");
const overlay = document.getElementById("overlay");

const dropdowns = document.querySelectorAll(".dropdown");

// OPEN MOBILE MENU

menuBtn.addEventListener("click", function () {
  navContent.classList.add("active");
  overlay.classList.add("active");
});

// CLOSE MOBILE MENU

function closeMenu() {
  navContent.classList.remove("active");
  overlay.classList.remove("active");

  dropdowns.forEach(function (dropdown) {
    dropdown.classList.remove("open");
  });
}

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

// DROPDOWN MENUS

dropdowns.forEach(function (dropdown) {
  const button = dropdown.querySelector(".drop-btn");

  button.addEventListener("click", function () {
    // Close the other dropdown
    dropdowns.forEach(function (otherDropdown) {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove("open");
      }
    });

    // Toggle the selected dropdown
    dropdown.classList.toggle("open");
  });
});
