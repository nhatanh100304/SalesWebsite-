<template>
  <div class="category-section">
    <!-- Thẻ sản phẩm -->
    <div class="category-card">  
      <router-link :to="{name:'DetailCard',params:{id}}">
        <img :src="product.image" alt="Product image" class="product-image" />
      <div class="product-info">
        <h3>{{ product.title }}</h3>
      </div>
    </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "CategorySection",
  props: ['product'],
  data() {
    return {
      quantity: 0,
      product1: {},
      id: this.product.id
    };
  },
  
};
</script>

<style scoped>
.category-section {
  padding: 20px;
  background-color: #f9f9f9;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));  /* Tạo lưới tự động với kích thước thẻ tối thiểu 250px */
  gap: 20px;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;  /* Đảm bảo ảnh không tràn ra ngoài */
}

.category-card:hover {
  transform: scale(1.05); /* Phóng to nhẹ khi hover */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-info {
  padding: 15px;
  text-align: center;
}

.product-info h3 {
  font-size: 18px;
  margin: 10px 0;
  color: #333;
}

.product-info p {
  color: #777;
  font-size: 14px;
  margin: 5px 0;
}

.view-details-btn {
  background-color: #fcb034;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.view-details-btn:hover {
  background-color: #e69526;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));  /* Điều chỉnh lưới cho thiết bị di động */
  }

  .product-info h3 {
    font-size: 16px;  /* Giảm kích thước tiêu đề sản phẩm trên màn hình nhỏ */
  }

  .view-details-btn {
    font-size: 14px;  /* Giảm kích thước nút */
    padding: 6px 12px;
  }
}
</style>
