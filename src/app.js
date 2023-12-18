document.addEventListener("alpine:init", () => {
  Alpine.data("menu", () => ({
    items: [
      { id: 1, name: " Espresso", img: "espresso.jpg", price: 20000 },
      { id: 2, name: " Macchiato", img: "Macchiato.jpg", price: 35000 },
      { id: 3, name: " Cappuccino", img: "Cappuccino.jpg", price: 30000 },
      { id: 4, name: " Latte", img: "Latte.jpg", price: 20000 },
      { id: 5, name: " Americano", img: "Americano.jpg", price: 40000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, maka tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang mau di hapus berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari satu
      if (cartItem.quantity > 1) {
        // telusuri satu satu
        this.items = this.items.map((item) => {
          // jika bukan barang yang di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konfersi/ubah ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", //mata uang
    currency: "IDR", //ubah menjadi mata uang rupiah
    minimumFractionDigits: 0, //hilangkan 2 digit terakhir
  }).format(number);
};
