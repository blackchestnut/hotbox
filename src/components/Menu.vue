<template>
  <div class="topbar">
    <router-link
      v-for="(button, index) in buttons"
      :key="button.path"
      :to="button.path"
      class="button"
      :class="{ active: selectedButton === index }"
      @click.prevent="selectButton(index)">
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
        { label: 'КОТЕЛЬНЫЕ', class: 'boiler-button', path: '/boiler-room' },
        { label: 'УСЛУГИ', class: 'services-button', path: '/service' },
        { label: 'МОБИЛЬНАЯ КОТЕЛЬНАЯ УСТАНОВКА', class: 'mobile-boiler-button', path: '/car' },
        { label: 'НОВОСТИ', class: 'news-button', path: '/news' },
        { label: 'О НАС', class: 'about-button', path: '/us' },
      ],
      selectedButton: null,
    };
  },
  mounted() {
    this.updateSelectedButton();
  },
  watch: {
    // Отслеживаем изменения маршрута
    '$route'(to) {
      this.updateSelectedButton();
    },
  },
  methods: {
    selectButton(index) {
      this.selectedButton = index;
      this.$router.push(this.buttons[index].path);
    },
    updateSelectedButton() {
      // Устанавливаем selectedButton в зависимости от текущего маршрута
      const currentPath = this.$route.path;
      const buttonIndex = this.buttons.findIndex(button => button.path === currentPath);
      this.selectedButton = buttonIndex !== -1 ? buttonIndex : 0; // Если не найден, устанавливаем 0
    },
  },
};
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(255, 255, 255);
  margin: auto;
  width: 1280px;
  height: 70px;
  margin-bottom: 60px;
}

.button {
  position: relative;
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

.button.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 3px;
  background-color: red;
}
</style>
