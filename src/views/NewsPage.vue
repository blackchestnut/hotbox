<script setup>
import Menu from "@/components/Menu.vue";
</script>
<template>
  <Menu />
  <div class="page-container">
    <RouterLink to="/boiler-room">
      <div class="back">
        <div class="back-logo"></div>
      </div>
    </RouterLink>
    <div class="first-row">
      <h1 class="h1">Новости компании</h1>
      <p class="p1">Здесь мы публикуем свежие обновления внутри компании</p>
      <h2 class="h2">
        Новостная колонка “Тепло в тренде: новости из мира котельных”
      </h2>
      <div class="container"></div>
      <div class="description">
        Горячее предложение от “АО НТЦ Техтелеком-АС” - аренда и продажа мощных
        котельных! 🔥<br />
        🔧Аренда и продажа котельных от 500 до 3000 кВт<br />
        ✔️ Большой парк котельных различной мощности в наличии!!!<br />
        ✔️Надежные и энергоэффективные решения для Вашего бизнеса<br />
        ✔️Соответствие всем нормам и требованиям<br />
        ✔️Индивидуальный подход к каждому клиенту и проекту<br />
        🔥 Успей заказать свою котельную сейчас! ЗИМА БЛИЗКО!!!<br />
        📞Звоните или пишите нам прямо сейчас, чтобы узнать больше!<br />
      </div>
      <div class="more-container">
        <router-link to="/boiler-room">
          <div class="more-container">
            <a class="more">Подробнее об установке</a>
          </div>
        </router-link>
      </div>
      <div class="twoLines"></div>
      <div class="mobile-twolines"></div>
    </div>
    <div class="second-row">
      <h1 class="h1">Участие в программе Московские сезоны 2024</h1>
      <div class="container3"></div>
      <div class="description">
        Компания АО НТЦ "Техтелеком-АC" стала одной из первых компаний, которые
        приняли участие в программе “Московские сезоны” по растопке ледяных
        катков в Москве и Московской области.<br />
        В марте 2024 года, компания предоставила свои услуги на катках и ледовых
        аренах, что позволило обеспечить безопасность, комфорт и соблюдение
        сроков закрытия программы “Московские сезоны”<br />
        В рамках программы, АО НТЦ "Техтелеком-AC" использовала передовые
        технологии и оборудование для растопки льда, а именно котлы наружного
        размещения мощностью 500кВт, весом 1500кг, размерами 258x130x190см
        (ДxШxВ).<br />
        В производстве котельных использовалось Итальянское оборудование. ПАКУ
        (портативная автоматизированная котельная установка) полностью<br />
        автоматизирована, что позволяет управлять котельной удаленно, без
        постоянного присутствия обслуживающего персонала. После доставки ПАКУ на
        место установки подключение к коммуникациям и настройка занимает не
        более двух часов.<br />
        Это сделало возможным быстро и эффективно растопить лед на катках. Кроме
        того, компания провела обучение персонала по работе с оборудованием что,
        обеспечило качественно новый уровень экологической, производственной и
        пожарной безопасности при проведении работ.<br />
        Участие в программе “Московские сезоны” позволило АО НТЦ "Техтелеком-AC"
        укрепить свой имидж надежного партнера в области растопки льда в Москве
        и Московской области, а также получить новые заказы и контракты на
        будущее.<br />
      </div>
      <div class="more-container">
        <router-link to="/boiler-room">
          <div class="more-container">
            <a class="more">Подробнее об установке</a>
          </div>
        </router-link>
      </div>
      <div class="twoLines"></div>
      <div class="mobile-twolines"></div>
    </div>
    <div class="third-row">
      <div class="description">
        <div class="container4"></div>
        ПАКУ 0,5 мВт 1К на базе котла Wiesberg Steel 501<br />
        Новая блочно-модульная автоматизированная котельная наружного
        размещения<br />
        Котельная установка разработана для отопления объектов, а также для
        растопки ледовых покрытий.<br />
        ПАКУ 500 кВт полностью автоматизирована, что позволяет управлять
        котельной удаленно, без постоянного присутствия<br />
        обслуживающего персонала.<br />
        Эта модель котельной обладает высокой степенью эксплуатационной
        готовности.<br />
        Особенность установки - наружное размещение. Котёл имеет небольшие
        габариты и малый вес, что позволяет устанавливать<br />
        его в кузов грузового транспортного средства и работать непосредственно
        с него.<br />
        Срок службы: Не менее 10 лет<br />
        Масса ПАКУ: Не более 1500 кг<br />
      </div>
    </div>
    <div class="more-container">
      <router-link to="/boiler-room">
        <div class="more-container">
          <a class="more">Подробнее об установке</a>
        </div>
      </router-link>
    </div>
    <div class="twoLines"></div>
    <div class="mobile-twolines"></div>
  </div>
</template>

<script>
export default {
  name: "NewsPage",
};
</script>

<style scoped>
.twoLines {
  background-image: url("/src/assets/images/red_logos/two_lines.svg");
  width: 769px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 60px;
}
.mobile-twolines {
  display: none;
}
.description {
  font-size: 30px;
  line-height: 50px;
  margin-top: 60px;
  margin-bottom: 60px;
}

.container {
  background-image: url("/src/assets/images/big_images_of_boilers/container.png");
  height: 660px;
  width: 1152px;
  background-size: cover;
}

.container3 {
  background-image: url("/src/assets/images/big_images_of_boilers/bluebox.png");
  background-size: cover;
  width: 1131px;
  height: 660px;
}

.container4 {
  background-image: url("/src/assets/images/big_images_of_boilers/blackbox.png");
  background-size: cover;
  width: 1128px;
  height: 660px;
  margin-bottom: 30px;
}

/*Мобильная версия*/
@media (max-width: 430px) {
  .page-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 16px;
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

  .h1 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .p1 {
    font-size: 16px;
    margin-bottom: 20px;
    padding: 0px;
  }
  .h2 {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 30px;
  }
  .container,
  .container3,
  .container4 {
    width: 100%;
    height: 272px;
  }
  .description {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .twoLines {
    display: none;
  }
  .mobile-twolines {
    display: block;
    background-image: url("/src/assets/images/red_logos/mobile-twolines.svg");
    width: 300px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
</style>
