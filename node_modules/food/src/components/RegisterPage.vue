<template>
  <div class="container-register">
    <h2 class="title">Đăng Ký Tài Khoản</h2>
    <div class="form-group">
      <label for="username">Tên đăng nhập</label>
      <input v-model="username" id="username" type="text" placeholder="Nhập tên đăng nhập" />
    </div>

    <div class="form-group">
      <label for="password">Mật khẩu</label>
      <input v-model="password" id="password" type="password" placeholder="Nhập mật khẩu" />
    </div>

    <div class="form-group">
      <label for="confirmPassword">Xác nhận mật khẩu</label>
      <input v-model="confirmPassword" id="confirmPassword" type="password" placeholder="Xác nhận mật khẩu" />
    </div>

    <button @click="register" class="btn-register">Đăng Ký</button>

    <p v-if="error" class="error-message">{{ error }}</p>

    <div class="login-link">
      <p>Đã có tài khoản? <router-link to="/LoginPage">Đăng nhập</router-link></p>
    </div>
  </div>
</template>

<script>
import users from "@/data/users";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      error: "",
      users: users,
    };
  },
  methods: {
    register() {
      // Kiểm tra mật khẩu phải trùng khớp
      if (this.password !== this.confirmPassword) {
        this.error = "Mật khẩu không trùng khớp";
        return;
      }

      // Lấy danh sách người dùng từ localStorage
      let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Kiểm tra xem tên đăng nhập đã tồn tại trong localStorage chưa
      const existingUser = storedUsers.find((user) => user.username === this.username);
      if (existingUser) {
        this.error = "Tên đăng nhập đã tồn tại";
        return;
      }

      // Tạo người dùng mới và thêm vào danh sách
      const newUser = { id: storedUsers.length + 1, username: this.username, password: this.password };
      storedUsers.push(newUser);

      // Lưu danh sách người dùng mới vào localStorage
      localStorage.setItem("users", JSON.stringify(storedUsers));

      // Thông báo đăng ký thành công và reset form
      alert("Đăng ký thành công");
      this.username = "";
      this.password = "";
      this.confirmPassword = "";
      this.error = "";

      // Chuyển hướng sang trang đăng nhập
      this.$router.push("/LoginPage");
    },
  },
};
</script>

<style scoped>
.container-register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: auto;
  text-align: center;
}

.title {
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;
}

.form-group {
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
}

label {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  outline: none;
  transition: border 0.3s ease;
}

input:focus {
  border-color: #fcb034;
}

.btn-register {
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

.btn-register:hover {
  background-color: #ffa726;
  transform: scale(1.05);
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.login-link {
  margin-top: 20px;
}

.login-link p {
  font-size: 14px;
  color: #666;
}

.login-link router-link {
  font-weight: 600;
  color: #fcb034;
  text-decoration: none;
}

.login-link router-link:hover {
  text-decoration: underline;
}
</style>
