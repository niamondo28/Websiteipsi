// bagian PPID
document.addEventListener("DOMContentLoaded", function () {
  // 1. Pilih semua elemen dengan kelas 'card-header'
  const cardHeaders = document.querySelectorAll(".cardppid-header");

  // 2. Lakukan perulangan (looping) untuk setiap header yang ditemukan
  cardHeaders.forEach((header) => {
    // 3. Tambahkan 'event listener' untuk setiap header.
    // Ini akan "mendengarkan" event 'click'.
    header.addEventListener("click", function () {
      // 'this' merujuk ke elemen .card-header yang baru saja diklik.
      // 'this.parentElement' berarti kita mengambil elemen induknya, yaitu .card.
      const currentCard = this.parentElement;

      // 4. 'toggle' artinya: jika kelas 'active' sudah ada, hapus. Jika belum ada, tambahkan.
      // Inilah inti dari logika buka-tutupnya!
      currentCard.classList.toggle("active");

      // --- BONUS: Logika Accordion (hanya satu yang bisa terbuka) ---
      // Jika kamu ingin saat satu card dibuka, yang lain otomatis tertutup,
      // tambahkan kode di bawah ini.

      // Loop lagi semua header
      cardHeaders.forEach((otherHeader) => {
        const otherCard = otherHeader.parentElement;

        // Jika 'otherCard' BUKAN card yang sedang kita klik
        // DAN 'otherCard' memiliki kelas 'active' (sedang terbuka)
        if (
          otherCard !== currentCard &&
          otherCard.classList.contains("active")
        ) {
          // Maka hapus kelas 'active' darinya (tutup card tersebut)
          otherCard.classList.remove("active");
        }
      });

      // Setelah loop di atas selesai, baru kita toggle card yang kita klik
      // (Pindahkan baris ini dari atas ke sini jika menggunakan logika accordion)
      // currentCard.classList.toggle('active'); // -> Sudah kita lakukan di atas. Cukup satu kali.
    });
  });

  // Mencegah form dikirim (hanya untuk contoh)
  const form = document.getElementById("form-informasi");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah halaman refresh
    alert('Permintaan Anda telah "dikirim"! (Ini hanya simulasi)');
    form.reset(); // Mengosongkan form
  });
});
