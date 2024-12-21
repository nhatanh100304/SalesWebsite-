<template>
    <footer>
        <div class="footer-container">
            <div class="footer-column">
                <h3>Liên hệ với chúng tôi</h3>
                <p>Email: <a href="mailto:KFC@gmail.com">KFC@gmail.com</a></p>
                <p>Điện thoại: <a href="tel:0703665487">0703665487</a></p>
                <p>Địa chỉ: 04_11B Chung Cư Lê Thành, Tân Tạo, Bình Tân</p>
            </div>
            <div class="footer-column">
                <h3>Thực Đơn</h3>
                <ul>
                    <li><a href="#">Khai vị</a></li>
                    <li><a href="#">Gà</a></li>
                    <li><a href="#">COMBO Gà</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Theo dõi chúng tôi</h3>
                <div class="social-icons">
                    <a href="#" class="social-icon"><img :src="require('@/assets/image/Fb.jpg')" alt="Facebook"></a>
                    <a href="#" class="social-icon"><img :src="require('@/assets/image/Tw.jpg')" alt="Twitter"></a>
                    <a href="#" class="social-icon"><img :src="require('@/assets/image/IS.jpg')" alt="Instagram"></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 KFC Việt Nam. Tất cả các quyền được bảo lưu.</p>
        </div>
    </footer>
</template>
 
 <script>
 export default {};
 </script>
 
 <style scoped>
 /* Footer Background */
 footer {
     background-color: #2c2c2c;
     color: #ffffff;
     padding: 40px 20px 20px;
     font-family: Arial, sans-serif;
 }
 
 /* Container Styling */
 .footer-container {
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     max-width: 1200px;
     margin: 0 auto;
     padding-bottom: 20px;
     border-bottom: 1px solid #444;
 }
 
 /* Column Styling */
 .footer-column {
     flex: 1;
     padding: 20px;
     min-width: 200px;
     box-sizing: border-box;
 }
 
 .footer-column h3 {
     margin-top: 0;
     font-size: 20px;
     color: #fcb034;
 }
 
 .footer-column p, .footer-column ul {
     color: #b3b3b3;
 }
 
 .footer-column ul {
     list-style: none;
     padding: 0;
 }
 
 .footer-column ul li {
     margin-bottom: 8px;
 }
 
 .footer-column a {
     color: #fcb034;
     text-decoration: none;
     transition: color 0.3s;
 }
 
 .footer-column a:hover {
     color: #ffffff;
 }
 
 /* Social Icons Styling */
 .social-icons {
     display: flex;
     gap: 15px;
     margin-top: 10px;
 }
 
 .social-icon img {
     width: 30px;
     height: 30px;
     filter: brightness(0) invert(1);
     transition: transform 0.3s;
 }
 
 .social-icon:hover img {
     transform: scale(1.1);
 }
 
 /* Footer Bottom */
 .footer-bottom {
     text-align: center;
     margin-top: 20px;
     color: #b3b3b3;
     font-size: 14px;
 }
 
 /* Responsive Design */
 @media (max-width: 768px) {
     .footer-container {
         flex-direction: column;
         align-items: center;
     }
 
     .footer-column {
         text-align: center;
     }
 
     .footer-column h3, .footer-column p, .footer-column ul, .footer-bottom p {
         font-size: 16px;
     }
 }
 </style>
 