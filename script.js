let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    image: image,
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Produk ditambahkan ke keranjang 🛒");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let cartTable = document.getElementById("cart-items");

  let total = 0;

  cartTable.innerHTML = "";

  cart.forEach(function (item) {
    cartTable.innerHTML += `

<tr>

<td>
<img src="${item.image}"
width="60"
style="border-radius:8px;">
</td>

<td>
${item.name}
</td>

<td>
Rp ${item.price}
</td>

</tr>

`;

    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

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

function clearCart() {
  localStorage.removeItem("cart");

  cart = [];

  displayCart();
}

function goToCheckout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  window.location.href = "checkout.html";
}

function displayCheckout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let container = document.getElementById("checkout-items");

  let total = 0;

  container.innerHTML = "";

  cart.forEach(function (item) {
    container.innerHTML += `

<div class="checkout-item">

<img src="${item.image}"
width="60">

${item.name}
- Rp ${item.price}

</div>

`;

    total += item.price;
  });

  document.getElementById("checkout-total").innerText = total;
}

function prosesCheckout() {
  let nama = document.getElementById("nama").value;

  let alamat = document.getElementById("alamat").value;

  let hp = document.getElementById("hp").value;

  let metode = document.getElementById("metode").value;

  if (nama === "" || alamat === "" || hp === "") {
    alert("Lengkapi data terlebih dahulu!");

    return;
  }

  alert("Pesanan berhasil dibuat!\n" + "Metode: " + metode);

  localStorage.removeItem("cart");

  window.location.href = "index.html";
}

function searchProduct() {
  let input = document.getElementById("searchInput");

  let filter = input.value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    let title = card.querySelector("h3");

    let text = title.innerText.toLowerCase();

    if (text.includes(filter)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

function searchProduct() {
  let input = document.getElementById("searchInput");

  let filter = input.value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    let productName = card.querySelector("h3").innerText.toLowerCase();

    if (productName.includes(filter)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
