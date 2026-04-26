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
