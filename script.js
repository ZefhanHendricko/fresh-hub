// Ambil data cart dari localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Tambah produk ke keranjang
function addToCart(nama, harga) {
  cart.push({
    nama: nama,
    harga: harga,
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Produk ditambahkan ke keranjang!");
}

// Tampilkan isi keranjang
function displayCart() {
  let cartItems = document.getElementById("cart-items");

  let total = 0;

  if (!cartItems) return;

  cartItems.innerHTML = "";

  cart.forEach((item) => {
    let row = document.createElement("tr");

    row.innerHTML =
      "<td>" + item.nama + "</td>" + "<td>Rp " + item.harga + "</td>";

    cartItems.appendChild(row);

    total += item.harga;
  });

  document.getElementById("total").innerText = total;
}

// Checkout WhatsApp
function checkoutWA() {
  let message = "Pesanan Fresh Hub:%0A";

  let total = 0;

  cart.forEach((item) => {
    message += item.nama + " - Rp " + item.harga + "%0A";

    total += item.harga;
  });

  message += "%0ATotal: Rp " + total;

  let nomor = "087800072794";

  window.open("https://wa.me/" + nomor + "?text=" + message);
}

// Hapus keranjang
function clearCart() {
  localStorage.removeItem("cart");

  cart = [];

  displayCart();
}
