<template>
  <div class="container-login">
    <div class="title-login">
      <h2>Đăng Nhập</h2>
    </div>
    <div class="container-input-login">
      <div class="input-username">
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username" placeholder="Nhập tên người dùng" />
      </div>

      <div class="container-input-password">
        <label for="password">Mật khẩu</label>
        <input v-model="password" type="password" id="password" placeholder="Nhập mật khẩu" />
       
      </div>

      <button class="btn-login" @click="login">Đăng nhập</button>

      <div class="register-link">
        <p>Chưa có tài khoản? <router-link to="/RegisterPage">Đăng ký</router-link></p>
      </div>

      <p class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>

import eventBus from "@/router/eventBus";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      
    };
  },
  methods: {
    login() {
      const getUser = JSON.parse(localStorage.getItem("users") || "[]");
      const users = getUser.find(x => x.username === this.username && x.password === this.password);
      if (users) {
        // Lưu thông tin người dùng vào localStorage khi đăng nhập thành công
        localStorage.setItem("currentUser", JSON.stringify(users));
        eventBus.emit('loginSuccess', users);
        this.$router.push("/");
      } else {
        this.error = "Tài khoản hoặc mật khẩu không đúng";
        return;
      }
    },
  },
};
</script>

<style scoped>
.container-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 400px;
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: auto;
  text-align: center;
}

.title-login h2 {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.container-input-login {
  width: 100%;
}

.input-username,
.container-input-password {
  margin-bottom: 20px;
  left: 30px;
}

label {
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: left;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-top: 8px;
  box-sizing: border-box;
  outline: none;
  transition: border 0.3s ease;
}

input:focus {
  border-color: #fcb034;
}



.btn-login {
  width: 100%;
  padding: 12px;
  background-color: #fcb034;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-login:hover {
  background-color: #ffa726;
  transform: scale(1.05);
}

.register-link {
  margin-top: 20px;
}

.register-link p {
  font-size: 14px;
  color: #666;
}

.register-link router-link {
  font-weight: 600;
  color: #fcb034;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
