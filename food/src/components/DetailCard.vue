<template>
  <div class="menu">
    <h2 class="menu-title">Chi Tiết Sản Phẩm</h2>
    <div class="menu-carousel">
      <div class="menu-item">
        <img :src="product.image" alt="Product Image">
        <div class="menu-item-info">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <p>{{ product.price }} VNĐ</p>
        </div>
      </div>
      <div class="add-to-cart">
        <button @click="addToCart(product)" :disabled="isOutOfStock(product)">
          {{ isOutOfStock(product) ? "Hết hàng" : "Thêm sản phẩm" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/data/items';
import itemsChicken from '@/data/itemsChicken';
import itemsWater from '@/data/itemsWater';

import cart from '@/data/cart';

export default {
  data() {
    return {
      product:{
        image: "", 
        title: "",
        description: "",
        price: 0,
      },
      cart: cart,
    };
  },
  mounted() {
  const id = this.$route.params.id;
  // Tìm kiếm sản phẩm trong `items`, nếu không tìm thấy, tiếp tục tìm trong `itemsChicken` và `itemsWater`
  this.product = items.find(x => x.id == id) || itemsChicken.find(x => x.id == id) || itemsWater.find(x => x.id == id);
  // Kiểm tra nếu sản phẩm không tìm thấy trong tất cả các nguồn dữ liệu
  if (!this.product) {
    console.warn("Không tìm thấy sản phẩm với id:", id);
  }
},
  methods: {
    // Kiểm tra nếu sản phẩm đã có trong giỏ và nếu số lượng đã đầy
    isOutOfStock(product) {
      const productInCart = this.cart.find(item => item.id === product.id);
      return productInCart && productInCart.quantity >= product.quanlity;
    },
    // Thêm sản phẩm vào giỏ hàng
    addToCart(product) {
      const productInCart = this.cart.find(item => item.id === product.id);

      if (productInCart) {
        if (productInCart.quantity < product.quanlity) {
          productInCart.quantity += 1; // Tăng số lượng sản phẩm trong giỏ
          alert("Sản phẩm đã được thêm vào giỏ hàng.");
        } else {
          alert("Không đủ số lượng trong kho!");
        }
      } else {
        if (product.quanlity > 0) {
          const newProduct = { ...product, quantity: 1 };
          this.cart.push(newProduct);
          alert("Sản phẩm đã được thêm vào giỏ hàng.");
        } else {
          alert("Không đủ số lượng trong kho!");
        }
      }
    }
  }
};
</script>

<style scoped>
.menu {
  text-align: center;
  padding: 30px;
  background-color: #f9f9f9;
}

.menu-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-transform: uppercase;
}

.menu-carousel {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 20px;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 600px;  /* Đặt chiều rộng cho mỗi phần tử menu */
  height: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item img {
  width: 50%; /* Chiếm 50% chiều rộng của phần tử */
  height: 100%;
  object-fit: cover;
}

.menu-item-info {
  width: 50%; /* Chiếm 50% chiều rộng của phần tử */
  padding: 20px;
  text-align: left;
}

.menu-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.menu-item-info h3 {
  font-size: 22px;
  margin: 0 0 10px;
  font-weight: bold;
}

.menu-item-info p {
  margin: 0;
  color: #ccc;
}

.price {
  color: #fcb034;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.add-to-cart {
  text-align: center;
  margin-top: 15px;
}

.add-to-cart button {
  background-color: #fcb034;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart button:hover {
  background-color: #d99026;
}

.add-to-cart button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .menu-carousel {
    flex-direction: column;
    align-items: center;
  }

  .menu-item {
    flex-direction: column;
    width: 80%; /* Giảm chiều rộng khi trên màn hình nhỏ */
  }

  .menu-item img {
    width: 100%; /* Hình ảnh chiếm toàn bộ chiều rộng */
    height: 250px; /* Giới hạn chiều cao ảnh */
  }

  .menu-item-info {
    width: 100%; /* Phần mô tả chiếm toàn bộ chiều rộng */
    padding: 15px;
  }
}
</style>

