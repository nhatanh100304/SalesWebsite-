<template>
  <div>
    <h1>Hóa Đơn</h1>
    <div v-if="cart.length === 0">
      <p>Giỏ hàng trống!</p>
    </div>
    <div v-else>
      <table class="bill-table">
        <thead>
          <tr>
            <th>HÌNH</th>
            <th>SẢN PHẨM</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td><img :src="item.image" class="bill-image" alt="Product Image" /></td>
            <td>{{ item.title }}</td>
            <td>{{ item.price.toLocaleString() }} VNĐ</td>
            <td>{{ item.quantity }}</td>
            <td>{{ (item.price * item.quantity).toLocaleString() }} VNĐ</td>
          </tr>
          <tr>
            <td colspan="4">Tổng cộng:</td>
            <td>{{ totalAmount.toLocaleString() }} VNĐ</td>
          </tr>
        </tbody>
      </table>

      <!-- Form nhập thông tin người đặt -->
      <div class="order-form">
        <h2>Thông Tin Người Đặt</h2>
        <form @submit.prevent="confirmOrder">
          <div class="form-group">
            <label for="name">Tên:</label>
            <input type="text" id="name" v-model="orderInfo.name" required />
          </div>
          <div class="form-group">
            <label for="address">Địa chỉ:</label>
            <input type="text" id="address" v-model="orderInfo.address" required />
          </div>
          <div class="form-group">
            <label for="phone">Số điện thoại:</label>
            <input type="tel" id="phone" v-model="orderInfo.phone" required />
          </div>
          <button type="submit" class="btn btn-success">Xác Nhận Đặt Hàng</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cart from "@/data/cart";

export default {
  name: 'BillPage',
  data() {
    return {
      cart: cart,
      orderInfo: { name: '', address: '', phone: '' }, // Thông tin người đặt
    };
  },
  computed: {
    totalAmount() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  created() {
    // Lấy thông tin người dùng từ localStorage và gán vào orderInfo.name
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.orderInfo.name = user.username; // Gán tên người dùng vào orderInfo.name
    }
  },
  methods: {
    confirmOrder() {
      // Xử lý logic đặt hàng
      console.log('Thông tin đặt hàng:', this.orderInfo);
      console.log('Giỏ hàng:', this.cart);
      alert('Đặt hàng thành công!');
    },
  },
};
</script>

<style scoped>
.bill-table {
  width: 100%;
  border-collapse: collapse;
}

.bill-table th,
.bill-table td {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
}

.bill-image {
  height: 100px;
  width: 100px;
  object-fit: cover;
}

.order-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-success {
  background-color: #5cb85c;
  color: white;
}

.btn-success:hover {
  background-color: #4cae4c;
}
</style>
