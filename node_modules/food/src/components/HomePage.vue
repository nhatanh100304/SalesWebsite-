<template>
  <div>
    <div class="advertisement">
      <div class="carousel-container">
        <img :src="advertisementImages[currentImageIndex]" alt="Advertisement" class="advertisement-image" />
      </div>
    </div>
  <div class="containerHome">
    <Category v-for="item in CategoryCard" :key="item.id" :product="item"/>
  </div>
</div>
</template>

<script>
import Category from "@/components/CategorySection.vue";
import items from "../data/items";

export default {
  name: "HomePage",
  components: {
    Category,
  },
  data() {
    return {
      CategoryCard: items,
      currentImageIndex: 0, // Chỉ mục ảnh hiện tại trong carousel
      advertisementImages: [
      require('@/assets/image/ADS1.jpg'), // Chỉ định phần mở rộng
      require('@/assets/image/ADS2.jpg'),
      require('@/assets/image/ADS3.jpg')
      ],
      carouselInterval: null, // Để lưu interval cho việc tự động chuyển ảnh
    };
  },
  methods: {
    // Chuyển đến ảnh tiếp theo trong carousel
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.advertisementImages.length;
    },
    // Dừng carousel khi rời khỏi trang
    stopCarousel() {
      clearInterval(this.carouselInterval);
    },
  },
  mounted() {
    // Bắt đầu carousel tự động chuyển ảnh sau mỗi 3 giây
    this.carouselInterval = setInterval(this.nextImage, 2000);
  },
  beforeUnmount() {
    // Dọn dẹp khi component bị unmounted
    this.stopCarousel();
  },
};
</script>

<style scoped>
/* Khung quảng cáo (căn giữa và tự động chuyển ảnh) */
.advertisement {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px; /* Khoảng cách giữa quảng cáo và sản phẩm */
  position: relative; /* Để căn giữa ảnh và có thể thêm hiệu ứng */
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 500px; /* Cố định chiều cao cho ảnh quảng cáo */
  overflow: hidden; /* Ẩn các ảnh ngoài khung */
}

.advertisement-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Đảm bảo ảnh không bị méo và giữ nguyên tỷ lệ */
  transition: opacity 1s ease-in-out; /* Hiệu ứng chuyển ảnh mượt mà */
}

/* Đảm bảo rằng các sản phẩm được căn chỉnh đẹp */
.containerHome {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
}

/* Một số kiểu cơ bản cho thẻ sản phẩm */
.category-card {
  width: 300px;
  margin: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
}

.category-card:hover {
  transform: scale(1.05);
}
</style>
       