<template>
  <div class="topbar">
    <router-link
      v-for="(button, index) in buttons"
      :key="index"
      :to="button.path"
      class="button"
      :class="{ active: selectedButton === index }"
      @click="selectButton(index)">
      {{ button.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { label: 'ГЛАВНАЯ', class: 'home-button', path: '/' },
        { label: 'КОТЕЛЬНЫЕ', class: 'boiler-button'},
        { label: 'УСЛУГИ', class: 'services-button', path: '/service'},
        { label: 'МОБИЛЬНАЯ КОТЕЛЬНАЯ УСТАНОВКА', class: 'mobile-boiler-button', path: '/car' },
        { label: 'НОВОСТИ', class: 'news-button', path: '/news' },
        { label: 'О НАС', class: 'about-button', path: '/us'},
      ],
      selectedButton: null,
    };
  },
  methods: {
    selectButton(index) {
      this.selectedButton = index;
    },
  },
};
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-around; /* Распределяет элементы по горизонтали */
  align-items: center; /* Центрирует элементы по вертикали */
  background-color: rgb(255, 255, 255);
  margin: auto;
  width: 1280px;
  height: 70px;
}

.button {
  border-color: white;
  border-radius: 0px;
  background-color: transparent;
  transition: color 0.3s;
  color: #757575;
  font-family: 'Lato', sans-serif; 
  font-weight: bold;               
  font-size: 16px;
  text-decoration: none;
  border: 3px; 
}

.button.active {
  background-color: white;
  border-color: red;
  border: 3px;
}

.home-button {
  width: 164px;
  height: 70px;
}

.boiler-button {
  width: 164px;
  height: 70px;
}

.services-button {
  width: 164px;
  height: 70px;
}

.mobile-boiler-button {
  width: 320px;
  height: 70px;
}

.news-button {
  width: 164px;
  height: 70px;
}
.about-button {
  width: 164px;
  height: 70px;
}
</style>
