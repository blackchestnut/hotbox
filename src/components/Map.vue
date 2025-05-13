<template>
  <div class="map-container">
    <div id="map" style="width: 100%; height: 500px"></div>
    <div class="overlay">
      <div class="sell-dept">
        <div class="name">Отдел продаж</div>
        +7 (977) 953 39 11
      </div>
      <div class="engineer-dept">
        <div class="name">Инженер</div>
        +7 (999) 822 11 45
      </div>
      <div class="adress-dept">
        <div class="name">Юридический адрес</div>
        г. Москва п. Краснопахарское, квартал 171
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
      await ymaps.ready();

      const isMobile = window.innerWidth <= 430;

      const centerCoords = isMobile
        ? [55.548765, 37.307809] // немного сместили широту вниз (~0.002 градуса)
        : [55.449765, 37.297809];

      const map = new ymaps.Map("map", {
        center: centerCoords,
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
    },
  },
};
</script>

<style scoped>
.map-container {
  position: relative;
}
.overlay {
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);
  background-color: #fff;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  padding: 20px;
}
.name {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}
.sell-dept,
.engineer-dept {
  font-size: 22px;
  margin-bottom: 30px;
}
.adress-dept {
  font-size: 22px;
}

/* Мобильная версия */
@media (max-width: 1024px) {
  .overlay {
    position: absolute;
    top: 44px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 300px;
    padding: 15px;
    border-radius: 15px;
    text-align: left;
  }
  .name {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .sell-dept,
  .engineer-dept,
  .adress-dept {
    font-size: 14px;
    margin-bottom: 10px;
  }
}
</style>
