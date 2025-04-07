<template>
  <div class="partner-wrapper">
    <div class="partners">
      <div class="production">
        В производстве мы используем оборудование только проверенных
        производителей
      </div>
      <div class="text">
        При разработке мобильных котельных применяются качественные европейские
        комплектующие. Вся продукция проходит обязательные испытания и
        соответствует нормативным документам
      </div>
    </div>
    <div class="pictures">
      <img
        src="\src\assets\images\partners\Bosch-logosvg.svg"
        alt="Bosch Logo"
        class="bosch-logo"
      />
      <img
        src="\src\assets\images\partners\caldera-logo.png"
        alt="caldera Logo"
        class="caldera-logo"
      />
      <img
        src="\src\assets\images\partners\Weishaupt-Logo.png"
        alt="Weishaupt Logo"
        class="weishaupt-logo"
      />
      <img
        src="\src\assets\images\partners\Legrand-logo.png"
        alt="Legrand Logo"
        class="legrand-logo"
      />
      <img
        src="\src\assets\images\partners\Schneider-Electric-l.png"
        alt="Schneider-Electric-l Logo"
        class="she-logo"
      />
      <img
        src="\src\assets\images\partners\Temron-logo.png"
        alt="Temron Logo"
        class="temron-logo"
      />
      <img
        src="\src\assets\images\partners\Group.png"
        alt="Group Logo"
        class="group-logo"
      />
      <img
        src="\src\assets\images\partners\Siemens-logo.png"
        alt="Siemens Logo"
        class="siemens-logo"
      />
      <img
        src="\src\assets\images\partners\CNP-logo.png"
        alt="CNP Logo"
        class="cnp-logo"
      />
      <img
        src="\src\assets\images\partners\ABB-logo.png"
        alt="ABB Logo"
        class="abb-logo"
      />
      <img
        src="\src\assets\images\partners\Vector.png"
        alt="Vector Logo"
        class="vector-logo"
      />
      <img
        src="\src\assets\images\partners\Baltur-logo.png"
        alt="Baltur Logo"
        class="baltur-logo"
      />
    </div>
  </div>
</template>

<style scoped>
.production {
  font-weight: 600; /* Semi Bold */
  font-size: 40px; /* Размер шрифта 40px */
  width: 1123px;
  text-align: center;
  margin-bottom: 60px;
}
.text {
  font-size: 30px;
  width: 1100px;
  text-align: center;
  margin-bottom: 150px;
}
.partners {
  width: 1148px;
  height: 1116.25;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
}
.pictures {
  display: flex; /* Включаем Flexbox */
  flex-wrap: wrap; /* Позволяем элементам переноситься на новую строку */
  justify-content: center;
}
.pictures img {
  margin: 80px; /* Отступы между изображениями */
  box-sizing: border-box; /* Учитываем отступы в ширине */
}
.bosch-logo {
  width: 300px;
  height: 67.13px;
}
.legrand-logo {
  width: 300px;
  height: 74.25px;
}
.group-logo {
  width: 300px;
  height: 61.44px;
}
.abb-logo {
  width: 300px;
  height: 119.25px;
}
.caldera-logo {
  width: 300px;
  height: 102px;
}
.she-logo {
  width: 300px;
  height: 120px;
}
.siemens-logo {
  width: 300px;
  height: 168.75px;
}
.vector-logo {
  width: 296.63px;
  height: 88.46px;
}
.weishaupt-logo {
  width: 300px;
  height: 52.5px;
}
.temron-logo {
  width: 300px;
  height: 162.5px;
}
.cnp-logo {
  width: 300px;
  height: 123.75px;
}
.baltur-logo {
  width: 300px;
  height: 94px;
}

@media (max-width: 430px) {
  .partner-wrapper {
    max-width: 100%;
    margin: 0 auto;
  }
  .partners {
    margin-top: 36px;
    padding: 0px 16px;
    width: 90%;
    margin-left: 0px;
    margin-right: 0px;
  }
  .production {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    max-width: 300px;
    margin-bottom: 30px;
  }
  .text {
    font-size: 15px;
    margin-bottom: 36px;
    text-align: left;
    max-width: 291px;
  }
  .pictures {
    display: grid; /* Используем CSS Grid */
    grid-template-columns: repeat(2, 1fr); /* Два столбика */
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
    padding: 0px 16px;
  }
  .pictures img {
    margin: 24px; /* Отступы между изображениями */
    box-sizing: border-box; /* Учитываем отступы в ширине */
  }
  /* Указываем порядок логотипов */
  .bosch-logo {
    order: 3;
  }
  .caldera-logo {
    order: 2;
  }
  .weishaupt-logo {
    order: 1;
  }
  .legrand-logo {
    order: 5;
  }
  .she-logo {
    order: 8;
  }
  .temron-logo {
    order: 4;
  }
  .group-logo {
    order: 7;
  }
  .siemens-logo {
    order: 10;
  }
  .cnp-logo {
    order: 6;
  }
  .abb-logo {
    order: 11;
  }
  .vector-logo {
    order: 12;
  }
  .baltur-logo {
    order: 9;
  }

  .bosch-logo {
    width: 126px;
    height: 26.85px;
  }
  .legrand-logo {
    width: 126px;
    height: 32px;
  }
  .group-logo {
    width: 120px;
    height: 32px;
  }
  .abb-logo {
    width: 126px;
    height: 47.7px;
  }
  .caldera-logo {
    width: 128px;
    height: 40.8px;
  }
  .she-logo {
    width: 128px;
    height: 48px;
  }
  .siemens-logo {
    width: 128px;
    height: 67.5px;
  }
  .vector-logo {
    width: 120px;
    height: 45px;
  }
  .weishaupt-logo {
    width: 126px;
    height: 21px;
  }
  .temron-logo {
    width: 128px;
    height: 54px;
  }
  .cnp-logo {
    width: 128px;
    height: 49.5px;
  }
  .baltur-logo {
    width: 126px;
    height: 37.6px;
  }
}
</style>
