<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-column">
          <h3>УСЛУГИ</h3>
          <ul>
            <li><a href="#" >Производство</a></li>
            <li><a href="#">Аренда</a></li>
            <li><a href="#">Ремонт и обслуживание</a></li>
            <li><a href="#">Мобильная котельная на базе
                Ford Transit</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>О НАС</h3>
          <ul>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Партнеры</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>КОНТАКТЫ</h3>
            <div class="inf">
                <a href="#">zakaz@tehtelecom.ru</a><br>
                <a href="#">+7 (977) 953 39 11</a>
            </div>
        </div>
      </div>
      <div class="footer-divider" />
      <div class="footer-bottom">
        <div class="footer-logo" />
        <p>© Все права защищены. АО НТЦ «Техтелеком-АС».</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-logo {
  height: 53px;
  width: 180px;
  background-image: url(".\icons\footer-logo.svg");
  background-size: cover;
}

h3 {
  color: rgba(255, 255, 255, 0.6);
}

.inf a {
  color: #fff;
  text-decoration: none;
}
.inf a:hover {
  text-decoration: underline;
}

.footer-wrapper {
  background-color: #000000;
  padding: 60px 40px;
}

.footer {
  color: #fff;
  text-align: left;
  margin: 0 auto;
  justify-content: space-between;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.footer-column {
  display: flex;
  flex-direction: column; /* Устанавливаем направление для колонки */
}

.footer-column h3 {
  margin-bottom: 10px;
}

.footer-column ul {
  list-style-type: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 6px;
}

.footer-column ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.footer-divider {
  margin: 50px 0;
  border-top: 1px solid #fff;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Центрирует элементы по вертикали */
}

@media (max-width: 1024px) {
  .footer-content {
    flex-direction: column;
    gap: 16px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
