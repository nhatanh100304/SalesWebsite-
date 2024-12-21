<template>
    <div>
        <HeaderMenu/> 
  <div>
    <div class="category-container">
    <CategorySection v-for="item in items" :key="item.id" :product="item"/>
</div>
  </div></div>
    
</template>

<script>
import CategorySection from './CategorySection.vue';
import items  from '@/data/items';

import HeaderMenu from '@/components/HeaderMenu.vue'
export default {
    data(){
        return{
            items:items,
            
        }
    },
    components: {
        CategorySection,
        HeaderMenu, 
    }

}
</script>

<style scoped>
/* Container for all categories */
.category-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    padding: 30px;
    background-color: #f5f5f5;
}

/* Category item style */
.category-item {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    cursor: pointer;
}

.category-item:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
}

/* Category section header */
.category-item .category-header {
    background-color: #fcb034;
    color: white;
    padding: 15px;
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
}

/* Category section content */
.category-item .category-content {
    padding: 20px;
    color: #333;
    font-size: 16px;
    line-height: 1.6;
}

/* Add some spacing for the product description or content */
.category-item .category-content p {
    margin-bottom: 15px;
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
    .category-container {
        grid-template-columns: 1fr; /* Stack items in a single column */
    }

    .category-item {
        margin: 10px;
    }
}
</style>
