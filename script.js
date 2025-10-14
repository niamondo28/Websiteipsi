const galleryCards = document.querySelectorAll(".galleryp-card");

galleryCards.forEach((card) => {
  const imageContainer = card.querySelector(".cardp-image-container"); //metode DOM untuk mengambil elemen HTML
  const images = imageContainer.querySelectorAll(".cardp-image");
  let currentIndex = 0;

  card.addEventListener("click", () => {
    // Sembunyikan gambar saat ini
    images.forEach((img) => img.classList.remove("active"));

    // Pindah ke index berikutnya, kembali ke 0 jika sudah di akhir
    currentIndex = (currentIndex + 1) % images.length;

    // Tampilkan gambar berikutnya
    images.item(currentIndex).classList.add("active");
  });
});

const tabButtons = document.querySelectorAll(".tab-btn");
const contentPanels = document.querySelectorAll(".content-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Ambil target konten dari atribut data-tab
    const targetId = button.dataset.tab;
    const targetPanel = document.getElementById(targetId);

    // 1. Nonaktifin semua tombol dan sembunyiin semua panel
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    contentPanels.forEach((panel) => panel.classList.remove("active"));

    // 2. Aktifin tombol yang di-klik dan tampilin panel targetnya
    button.classList.add("active");
    targetPanel.classList.add("active");
  });
});

//load halaman footer

fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

// ===== Theme Otomatis (Siang/Malam) =====
const now = new Date();
const hour = now.getHours(); // 0-23

if (hour >= 6 && hour < 18) {
  // Siang (biru)
  document.documentElement.style.setProperty('--primary-color', '#1e3a8a');
  document.documentElement.style.setProperty('--primary-hover', '#3b82f6');
  document.documentElement.style.setProperty('--card-bg', '#fff');
  document.documentElement.style.setProperty('--footer-bg', '#e6e6e6');
  document.documentElement.style.setProperty('--footer-text', '#555');
} else {
  // Malam (hijau)
  document.documentElement.style.setProperty('--primary-color', '#284912');
  document.documentElement.style.setProperty('--primary-hover', '#3c6b2f');
  document.documentElement.style.setProperty('--card-bg', '#222');
  document.documentElement.style.setProperty('--footer-bg', '#333');
  document.documentElement.style.setProperty('--footer-text', '#ccc');
}
