fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav");

    // Cek apakah elemen ditemukan
    console.log("Hamburger:", hamburger);
    console.log("Nav Menu:", navMenu);

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
    }
  });
