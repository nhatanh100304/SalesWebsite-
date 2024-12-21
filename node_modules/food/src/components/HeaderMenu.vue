<template>
    <header>
      <h1>Thực Đơn</h1>
      <nav>
        <ul>
          <li><router-link to="/MenuWater">Nước</router-link></li>
          <li><router-link to="/MenuChicken">Gà</router-link></li>
          <li><router-link to="/MenuPageComBo">ComBo</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderMenu',
  };
  </script>
  
  <style scoped>
  /* Style cho header */
  header {
    background-color: #fcb034;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 36px;
    color: #333;
    margin-bottom: 10px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin: 0 15px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #333;
    font-size: 25px;
  }
  
  nav ul li a:hover {
    color: #e69526;
  }
  </style>
  