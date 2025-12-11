document.addEventListener('DOMContentLoaded', () => {

    // 1. Fungsi untuk menggulir (scroll) ke bagian produk
    const lihatKoleksiBtn = document.querySelector('.hero-content .btn');
    const productsSection = document.getElementById('products');

    if (lihatKoleksiBtn && productsSection) {
        lihatKoleksiBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah navigasi default link '#'
            
            // Gulir ke bagian produk dengan efek smooth
            productsSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // 2. Fungsi untuk notifikasi saat tombol Beli/Detail diklik
    // Ambil semua tombol Beli dan Detail
    const actionButtons = document.querySelectorAll('.product-card .btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Dapatkan nama produk dari card terdekat
            const card = e.target.closest('.product-card');
            const productName = card ? card.querySelector('h3').textContent : 'Produk';
            const action = e.target.textContent; // "Beli" atau "Detail"

            // Tampilkan notifikasi
            alert(`${productName} telah ditambahkan ke keranjang (simulasi) atau dialihkan ke halaman detail.`);
        });
    });

    // 3. (Opsional) Fungsi untuk keranjang belanja di header
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.addEventListener('click', () => {
        alert('Ini adalah halaman keranjang belanja Anda. Saat ini kosong (simulasi).');
    });

});