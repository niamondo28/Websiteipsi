document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then((res) => {
      if (!res.ok) throw new Error("Gagal memuat navbar.html");
      return res.text();
    })
    .then((data) => {
      const placeholder = document.getElementById("navbar-placeholder");
      if (!placeholder) {
        console.error("Elemen navbar-placeholder tidak ditemukan!");
        return;
      }

      placeholder.innerHTML = data;

      // Setelah navbar dimuat, ambil elemen baru dari navbar.html
      const hamburger = document.getElementById("hamburger");
      const navMenu = document.querySelector("nav");

      if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
          navMenu.classList.toggle("active");
        });
      } else {
        console.warn("Elemen hamburger atau nav tidak ditemukan di navbar.html");
      }
    })
    .catch((err) => console.error("Error memuat navbar:", err));
});
