<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-column">
          <h3 style="color: rgba(255, 255, 255, 0.6)">УСЛУГИ</h3>
          <ul>
            <li><a href="#" >Производство</a></li>
            <li><a href="#">Аренда</a></li>
            <li><a href="#">Ремонт и обслуживание</a></li>
            <li><a href="#">Мобильная котельная на базе
                Ford Transit</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 style="color: rgba(255, 255, 255, 0.6)">О НАС</h3>
          <ul>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Партнеры</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 style="color: rgba(255, 255, 255, 0.6)">КОНТАКТЫ</h3>
            <div class="inf">
                <a href="#">zakaz@tehtelecom.ru</a><br>
                <a href="#">+7 (977) 953 39 11</a>
            </div>
        </div>
      </div>
      <hr class="footer-divider"/>
      <div class="footer-bottom">
        <img src="D:\github.com\hotbox\src\components\icons\footer-logo.svg" alt="footer-logo" class="footer-logo" />
        <p>© Все права защищены. АО НТЦ «Техтелеком-АС».</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.inf a {
    color: #fff;
    text-decoration: none;
}
.inf a:hover {
    text-decoration: underline;
}
  .footer-wrapper {
    background-color: #000000;
  }

  .footer {
    height: 485.46px;
    color: #fff;
    text-align: left;
    margin: 0 auto;
    justify-content: space-between;
  }

  .footer-content {
    display: flex;
    padding-top: 60px;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-left: 40px;
    margin-right: 40px;
  }
  /*-------------------------------------*/
  @media (max-width: 800px) {
    .footer-content {
        flex-direction: column; /* Изменяем направление на столбец */
        align-items: center;
    }
}

  .footer-column {
    justify-content: space-between;
    display: flex;
    flex-direction: column; /* Устанавливаем направление для колонки */
    height: 100%; /* Задает высоту колонки */
  }

  .footer-column h3 {
    margin-bottom: 10px;
  }

  .footer-column ul {
    list-style-type: none;
    padding: 0;
  }

  .footer-column ul li {
    margin: 5px 0;
  }

  .footer-column ul li a {
    color: #fff;
    text-decoration: none;
  }

  .footer-column ul li a:hover {
    text-decoration: underline;
  }
  

  .footer-bottom {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Центрирует элементы по вертикали */
    margin-top: 50px;
    margin-right: 40px;
  }
  
  .footer-logo {
    margin-left: 40px;
    width: 180px; /* Ширина центрального логотипа */
    height: auto; /* Автоматическая высота */
  }
</style>
