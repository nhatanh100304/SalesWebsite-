<template>
 <header>
        <div class="containerHeader">
            <div class="logo">
          <img src='@/assets/image/logo.jpg' alt="Logo" /> 
         </div>
            <nav>
                <ul>
                    <li><router-link to="/">Trang Chủ</router-link></li>
                    <li><router-link to="/MenuPageComBo">Thực Đơn</router-link></li>
                    <li><router-link to="/BillPage">Bill</router-link></li>
                    <li><router-link to="/LoginPage">Đăng Nhập </router-link></li>
                    
                    
                </ul>
                
            </nav>
            <div v-if="user">
                    <p>
                        Xin Chào, {{ user.username }}
                    </p>
                    <button @click="logout">Đăng Xuất</button>
            </div>
            <div class="cta">
                <router-link to="/CardPage" class="cta-button">Giỏ Hàng</router-link >
            </div>
        </div>
        <router-view/>
    </header>
    
</template>

<script>
import eventBus from '@/router/eventBus';
export default {
    data(){
        return{
            user:JSON.parse(localStorage.getItem('currentUser'))|| null
        }
    },
    
    methods:{
        logout(){
            localStorage.removeItem('currentUser')
            this.user=null
        }
    },
    created(){
        eventBus.on('loginSuccess',(user)=>{
            this.user=user
        })
    },
    beforeUnmount(){
        //huy ca su kien cua com
        eventBus.off('loginSuccess')
    }
};
</script>

<style >
.containerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   
}

.logo img {
    height: 80px;
    transition: transform 0.3s ease;
}

.logo img:hover {
    transform: scale(1.1);
}

nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    transition: color 0.3s ease;
    font-size: 18px;
}

nav ul li a:hover {
    color: #fcb034;
}
.cta-button {
    padding: 10px 20px;
    background-color: #fcb034;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
    background-color: #ffa726;
    transform: scale(1.1);
}
</style>