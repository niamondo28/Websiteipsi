// 1. Pilih semua elemen kartu yang ada di halaman
const cards = document.querySelectorAll(".cardtupoksi"); // DOM untuk mengambil cardtupoksi

// 2. Lakukan perulangan untuk setiap kartu yang ditemukan
cards.forEach((card) => {
  // 3. Ambil bagian header dari setiap kartu
  const cardHeader = card.querySelector(".cardtupoksi-header");

  // 4. Tambahkan 'event listener' (pendengar aksi) pada setiap header kartu
  cardHeader.addEventListener("click", () => {
    // 5. Cek apakah kartu yang diklik ini SUDAH aktif atau belum
    const isAlreadyActive = card.classList.contains("active");

    // 6. Sebelum melakukan apa-apa, tutup dulu SEMUA kartu lain
    cards.forEach((otherCard) => {
      otherCard.classList.remove("active");
    });

    // 7. Jika kartu yang diklik tadi BELUM aktif, maka sekarang buat menjadi aktif
    if (!isAlreadyActive) {
      card.classList.add("active");
    }
  });
});
