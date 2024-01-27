const halamanUtama = document.querySelector('.logo')
halamanUtama.addEventListener("click", function(){
  window.location.href ="../index.html"
})
const chat = (namaProduk) => {
    // Ganti nomorWhatsApp dengan nomor telepon yang sesuai
    const nomorWhatsApp = '6283898449919';

    // Pesan yang ingin Anda kirim
    const pesan = `Halo, saya ingin menanyai ${namaProduk} ini.`;

    // Buat link WhatsApp dengan nomor dan pesan
    const linkWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    // Buka link di jendela baru atau tab
    window.open(linkWhatsApp, '_blank');
  }