<template>
  <div class="factory-wrapper">
    <div class="page-container">
      <h1>
        Автоматизированные<br />
        мобильные<br />
        котельные
      </h1>
      <h2>
        Компактные передвижные станции теплоснабжения<br />
        с полным удаленным управлением
      </h2>
      <img
        src="\src\assets\images\red_logos\award.svg"
        alt="Работаем по всей России"
        class="award-logo"
      />
      <div class="button-container">
        <router-link to="/boiler-room" class="transparent-button boilers">
          <span class="d-desktop">Котельные<br />блочно-модульные</span>
          <span class="d-mobile">Котельные</span>
        </router-link>

        <router-link to="/service" class="transparent-button service">
          Аренда
        </router-link>

        <router-link to="/service" class="transparent-button repaire">
          Ремонт и обслуживание
        </router-link>

        <router-link to="/car" class="transparent-button car">
          Котельные мобильные<br />
          автоматизированные
        </router-link>

        <router-link to="/service" class="transparent-button production">
          Производство
        </router-link>

        <router-link to="/news" class="transparent-button news">
          Новости
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  position: relative;
}

.award-logo {
  position: absolute;
  top: 40px;
  right: 300px;
}

.factory-wrapper {
  background-image: url("/src/assets/images/big_images_of_boilers/shadow-box.png");
  background-size: cover;
  color: #fff;
  padding: 100px 0;
}

h1 {
  font-size: 60px;
  line-height: 60px;
}

h2 {
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 88px;
}

.button-container {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
}

/* Стили для полупрозрачных кнопок */
.transparent-button {
  padding: 70px 24px 24px 24px;
  box-sizing: border-box;
  display: block;
  height: 204px;
  background-color: rgba(255, 255, 255, 0.158); /* Полупрозрачный белый фон */
  color: white; /* Цвет текста */
  border: none; /* Убираем рамку */
  border-radius: 8px; /* Закругленные углы */
  cursor: pointer; /* Указатель при наведении */
  font-size: 28px;
  font-weight: 500;
  transition: background-color 0.3s; /* Плавный переход цвета фона */
  text-align: left;
  text-decoration: none;
  background-repeat: no-repeat;
  background-position: 24px 24px;
}

.transparent-button.boilers {
  background-image: url("@/assets/images/white_logos/factory-logo.svg");
}
.transparent-button.service {
  background-image: url("@/assets/images/white_logos/clock-logo.svg");
}
.transparent-button.repaire {
  background-image: url("@/assets/images/white_logos/hammer-logo.svg");
}
.transparent-button.car {
  background-image: url("@/assets/images/white_logos/car-logo.svg");
}
.transparent-button.production {
  background-image: url("@/assets/images/white_logos/hook-logo.svg");
}
.transparent-button.news {
  background-image: url("@/assets/images/white_logos/news-logo.svg");
}

/* Эффект при наведении на кнопку */
.transparent-button:hover {
  background-color: rgba(
    255,
    255,
    255,
    0.267
  ); /* Увеличиваем непрозрачность при наведении */
}

.d-mobile {
  display: none;
}

@media (max-width: 1150px) {
  .award-logo {
    right: 0;
  }

  .button-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 780px) {
  .award-logo {
    display: none;
  }

  .button-container {
    grid-template-columns: 1fr;
  }

  .transparent-button {
    height: 90px;
    font-size: 20px;
    padding: 24px 24px 24px 90px;
    display: flex;
    align-items: center;
  }
}

/* Мобильные стили (максимальная ширина 430px) */
@media (max-width: 430px) {
  .d-desktop {
    display: none;
  }
  .d-mobile {
    display: inline;
  }

  .factory-wrapper {
    margin: 0 auto;
    max-width: 100%;
    min-width: auto;
  }

  .factory-wrapper {
    background-image: url("/src/assets/images/big_images_of_boilers/shadow-box-mobile.png");
    padding-top: 50px;
    padding-bottom: 50px;
  }

  h1 {
    font-size: 22px;
    line-height: 24px;
  }

  h2 {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    margin: 30px 0;
  }

  .button-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* Ширина кнопок */
    grid-template-rows: 50px 70px 50px; /* Фиксированная высота строк */
    gap: 10px; /* Минимальное расстояние между кнопками */
    align-items: start; /* Выравниваем кнопки по верхнему краю */
    grid-template-areas:
      "a e f"
      "a d d"
      "b c c";
  }

  .transparent-button {
    padding: 26px 6px 6px 6px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 400;
    background-position: 6px 6px;
    background-size: 16px;
  }
  .transparent-button.boilers {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .button-container > .boilers {
    grid-area: a;
  } /* Котельные */
  .button-container > .service {
    grid-area: b;
  } /* Аренда */
  .button-container > .repaire {
    grid-area: c;
  } /* Ремонт и обслуживание */
  .button-container > .car {
    grid-area: d;
  } /* Мобильная котельная (смещена вправо) */
  .button-container > .production {
    grid-area: e;
  } /* Производство */
  .button-container > .news {
    grid-area: f;
  } /* Новости */
}
</style>
