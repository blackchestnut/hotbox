<script setup>
import Menu from "@/components/Menu.vue";
import PartnersLogo from "./PartnersLogo.vue";
</script>

<template>
  <Menu />
  <div class="page-container">
    <RouterLink to="/">
      <div class="back">
        <div class="back-logo"></div>
      </div>
    </RouterLink>
    <h1>О компании</h1>
    <div class="about-company">
      <div class="text-wrapper">
        <div class="text">
          <div class="our-bmak">
            Наши БМАК проектируются и изготавливаются в габаритах морского
            контейнера 20 и 40 футов, а также котлы наружного размещения в более
            компактных размерах 2580х1300х1900мм, что позволяет оперативно
            и беспрепятственно доставить котельную установку по дорогам общего
            пользования на территорию заказчика.
          </div>
        </div>
        <div class="company-image"></div>
      </div>
    </div>

    <div class="row">
      <div class="block">
        <div class="Nameline">
          <div class="subtitle">
            <div class="area-logo" />
            Сфера применения
          </div>
          <div class="description">
            БМАК предназначены для применения в сфере теплоснабжения жилых,
            общественных и промышленных зданий с рабочим (избыточным) давлением
            в системе теплоснабжения не более 1,2 МПа (12 кгс/см2) и
            максимальной температурой нагрева теплоносителя до 115°С.
          </div>
        </div>
      </div>
      <div class="block">
        <div class="Nameline">
          <div class="subtitle">
            <div class="format-logo" />
            Формат поставки
          </div>
          <div class="description">
            БМАК поставляются в виде модульных котельных и могут подключаться
            каскадным способом, тем самым возможно добиться требуемой мощности в
            несколько десятков или сотен МВт.
          </div>
        </div>
      </div>
      <div class="block">
        <div class="Nameline">
          <div class="subtitle">
            <div class="warranty-logo" />
            Гарантии
          </div>
          <div class="description">
            Все оборудование используемое при производстве БМАК тщательно
            отбирается и тестируется на собственном парке котельных установок.
            Таким образом мы уверены в надежности выпускаемой продукции и
            предоставляем гарантию 12 месяцев.
          </div>
        </div>
      </div>
    </div>

    <div class="partners-wrapper">
      <div class="our-partners">Наши партнеры</div>
      <PartnersLogo />
    </div>

    <div class="information-wrapper">
      <div class="content">
        <!-- Текстовый контент -->
        <div class="full-name">
          <div class="contacts">Контакты</div>
          <div class="contact_information">
            <span class="appellation">Полное наименование:</span><br />
            Акционерное общество НТЦ «Технологии телекоммуникаций и
            автоматизированных систем»
          </div>
        </div>
        <div class="adress">
          <div class="contact_information">
            <span class="appellation">Юридический адрес:</span><br />
            141002, Московская обл., г. Мытищи ул. Колпакова, д. 2, корп. 15,
            офис 52
          </div>
        </div>
        <div class="adress-factory">
          <div class="contact_information">
            <span class="appellation">Адрес производства:</span><br />
            Квартал № 171 поселение Краснопахарское, Москва
          </div>
        </div>
        <div class="kpp">
          <div class="contact_information">
            ОГРН - 1025003527856<br />
            ИНН - 7704185209<br />
            КПП - 50290100
          </div>
        </div>
        <div class="phones">
          <div class="contact_information">
            <span class="appellation">Телефоны:</span><br />
            Офис: <a href="tel:+79779533911">+7(977) 953-39-11</a><br />
            Производство: <a href="tel:+79998221145">+7(999) 822-11-45</a>
          </div>
        </div>
        <div class="email">
          <div class="contac_information">
            <span class="appellation">Email:</span> zakaz@tehtelecom.ru
          </div>
        </div>
      </div>
      <div class="map-container">
        <div id="map" style="width: 100%; height: 500px"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "YandexMap",
  mounted() {
    if (typeof ymaps !== "undefined") {
      this.initMap();
    } else {
      console.error("Yandex Maps API не загружен");
    }
  },
  methods: {
    async initMap() {
      try {
        await ymaps.ready();

        const map = new ymaps.Map("map", {
          center: [55.449765, 37.297809],
          zoom: 10,
        });

        const placemark = new ymaps.Placemark(
          [55.449765, 37.297809],
          {},
          {
            preset: "islands#redIcon",
          }
        );

        map.geoObjects.add(placemark);
      } catch (error) {
        console.error("Ошибка при инициализации карты:", error);
      }
    },
  },
};
</script>
<style scoped>
.about-company {
  text-align: left; /* Центрирование текста внутри контейнера */
}

.text-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
}

.our-bmak {
  font-size: 28px;
}
.company-image {
  background-image: url("/src/assets/images/big_images_of_boilers/company.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 600 / 588; /* Замените 360 на реальную высоту, если знаете её */
  margin-left: 36px;
}

.subtitle {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.description {
  font-size: 20px;
  line-height: 30px;
}
.text {
  font-size: 30px;
  line-height: 1.5;
  flex: 1;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 60px;
  gap: 24px;
}

.block {
  background-color: #ebebeb;
  padding: 20px;
  text-align: center;
  color: black;
  border-radius: 8px;
  text-align: left;
  font-size: 20px;
  height: auto;
  width: 358px;
}
.Nameline {
  padding: 20px;
}
.area-logo {
  background-image: url("/src/assets/images/black_logos/area.svg");
}
.format-logo {
  background-image: url("/src/assets/images/black_logos/format.svg");
}
.warranty-logo {
  background-image: url("/src/assets/images/black_logos/warranty.svg");
}
.pictures {
  margin-bottom: 150px;
}
.area-logo,
.format-logo,
.warranty-logo {
  width: 36px;
  height: 36px;
}

.our-partners {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
}

.partners-wrapper {
  text-align: center;
}

.content {
  text-align: left; /* Текст выровнен влево */
  font-size: 20px;
  margin-right: 120px; /* Отступ между текстом и изображением */
  line-height: 30px;
}

.adress,
.kpp,
.email {
  padding: 30px 0; /* Отступ сверху и снизу */
}

.information-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  padding: 20px;
}

.content {
  flex: 1;
  margin-right: 40px;
}

.map-container {
  flex: 1;
}
.contacts {
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 600;
}
.contact_information {
  font-size: 20px;
}
.appellation {
  font-weight: bold;
}
a[href^="tel:"] {
  color: inherit;
  text-decoration: none;
}
@media (max-width: 430px) {
  .page-container {
    padding: 0px 16px;
  }
  .topbar {
    display: none;
  }
  .back {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid #696770;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .back-logo {
    background-image: url("@/assets/images/back_arrow/back2.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-size: contain;
  }
  .back:hover {
    border: 2px solid #555555;
  }
  .company-image {
    margin: 0px;
  }
  .firm {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .our-bmak {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .company {
    width: 100%;
    height: 380px;
    border-radius: 8px;
    margin-left: 0px;
  }
  .text-wrapper {
    flex-direction: column;
  }
  .about-wrapper {
    margin-bottom: 30px;
    padding: 0px;
  }
  .Nameline {
    padding: 12px;
  }
  .row {
    flex-direction: column;
    margin-bottom: 30px;
    padding-bottom: 0px;
    align-items: center;
  }
  .subtitle {
    font-size: 20px;
    margin-bottom: 10px;
    gap: 5px;
  }
  .description {
    font-size: 16px;
  }
  .our-partners {
    font-size: 24px;
  }
  .area-logo,
  .format-logo,
  .warranty-logo {
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .block {
    padding: 10px;
    width: 320px;
  }
  .pictures {
    display: grid; /* Используем CSS Grid */
    grid-template-columns: repeat(2, 1fr); /* Два столбика */
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
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
  .contacts {
    font-size: 18px;
    margin-bottom: 16px;
  }
  .email {
    padding: 0px;
  }
  .information-wrapper {
    flex-direction: column;
    padding: 0px;
  }
  .map-container {
    width: 100%; /* Карта занимает всю ширину экрана */
    height: 300px; /* Уменьшаем высоту карты */
    margin-top: 20px; /* Добавляем отступ сверху */
  }
  #map {
    width: 100% !important; /* Переопределяем ширину карты */
    height: 100% !important; /* Переопределяем высоту карты */
  }
  .appellation {
    font-size: 16px;
  }
  .contact_information {
    font-size: 16px;
    margin-bottom: 16px;
    padding: 0px;
  }
  .adress {
    padding: 0px;
  }
  .kpp {
    padding: 0px;
  }
  .content {
    margin-right: 0px;
  }
}
</style>
