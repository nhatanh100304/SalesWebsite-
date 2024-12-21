<template>
  <div v-if="cart.length === 0">
    <p>Giỏ Hàng Bị Rỗng</p>
  </div>
  <div v-else class="modal-content">
    <table class="table">
      <thead>
        <tr>
          <th>HÌNH</th>
          <th>SẢN PHẨM</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Tiền</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td><img :src="item.image" class="cart-image" alt="Product Image" /></td>
          <td class="align-middle">{{ item.title }}</td>
          <td class="align-middle">{{ item.price.toLocaleString() }} VNĐ</td>
          <td class="align-middle">
            <div v-if="item.quanlity > 0" class="quantity-controls">
              <button @click="decreaseQuantity(item)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)">+</button>
            </div>
            <div v-else class="out-of-stock">Hết hàng</div> <!-- Hiển thị khi hết hàng -->
          </td>
          <td class="align-middle">{{ (item.price * item.quantity).toLocaleString() }} VNĐ</td>
          <td class="align-middle">
            <button @click="removeItem(item.id)" class="btn btn-danger">Xóa</button>
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td>Số Lượng {{ tongsoluong }} </td>
          <td>Tổng tiền {{ tongtien.toLocaleString() }} VNĐ</td>
          <td>
            <button @click="clearCart" class="btn btn-danger">Xóa hết</button>
          </td>
        </tr>
      </tbody>
      <div class="checkout-button">
        <router-link to="/BillPage">
          <button @click="openOrderForm" class="btn btn-success">Đặt Hàng</button>
        </router-link>
      </div>
    </table>
  </div>
</template>

<script>
import cart from "@/data/cart";
export default {
  data() {
    return {
      cart: cart,
      
    };
  },
  computed: {
    tongtien() {
      return this.cart.reduce((total, item) => total + item.quantity * item.price, 0);
    },
    tongsoluong() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    increaseQuantity(item) {
      if (item.quantity <= item.quanlity) { // Kiểm tra số lượng còn lại trong kho
        item.quantity += 1;
        item.quanlity -= 1; // Giảm số lượng còn lại trong kho
      } else {
        alert("Không đủ số lượng sản phẩm trong kho");
      }
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.quanlity += 1; // Tăng số lượng trong kho khi giảm số lượng
      }
    },
    removeItem(itemId) {
      this.cart = this.cart.filter((item) => item.id !== itemId);
    },
    clearCart() {
      this.cart.forEach(item => item.quanlity += item.quantity); // Khôi phục số lượng lại trong kho
      this.cart = []; // Xóa hết giỏ hàng
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  font-size: 50px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
}

.cart-image {
  height: 100px;
  width: 100px;
  object-fit: cover;
}

.btn {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-danger {
  background-color: #d9534f;
  color: white;
}

.btn-danger:hover {
  background-color: #c9302c;
}

.btn-success {
  background-color: #5cb85c;
  color: white;
}

.btn-success:hover {
  background-color: #4cae4c;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.quantity-controls button {
  padding: 5px 10px;
  background-color: #fcb034;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.quantity-controls button:hover {
  background-color: #e69526;
}

.out-of-stock {
  color: red;
  font-weight: bold;
}

.checkout-button {
  text-align: center;
  margin-top: 20px;
}
</style>
