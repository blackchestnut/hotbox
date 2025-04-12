<template>
  <div class="topbar-wrapper">
    <div class="topbar">
      <router-link
        v-for="(button, index) in buttons"
        :key="button.path"
        :to="button.path"
        class="button"
        :class="{ active: selectedButton === index }"
        @click.prevent="selectButton(index)"
      >
        {{ button.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { label: "ГЛАВНАЯ", class: "home-button", path: "/" },
        { label: "КОТЕЛЬНЫЕ", class: "boiler-button", path: "/boiler-room" },
        { label: "УСЛУГИ", class: "services-button", path: "/service" },
        {
          label: "МОБИЛЬНАЯ КОТЕЛЬНАЯ УСТАНОВКА",
          class: "mobile-boiler-button",
          path: "/car",
        },
        { label: "НОВОСТИ", class: "news-button", path: "/news" },
        { label: "О НАС", class: "about-button", path: "/us" },
      ],
      selectedButton: null,
    };
  },
  mounted() {
    this.updateSelectedButton();
  },
  watch: {
    // Отслеживаем изменения маршрута
    $route(to) {
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
      const buttonIndex = this.buttons.findIndex(
        (button) => button.path === currentPath
      );
      this.selectedButton = buttonIndex !== -1 ? buttonIndex : 0; // Если не найден, устанавливаем 0
    },
  },
};
</script>

<style scoped>
.topbar-wrapper {
  border-bottom: 1px solid #bebebe;
  margin-bottom: 60px;
  width: 100%;
}

.topbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1210px;
  margin: 0 auto;
}
.button {
  color: #757575;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  border-bottom: 4px solid #fff;
  padding: 26px 20px 20px 20px;
}

.button.active {
  border-bottom-color: #ff0000;
}
@media (max-width: 430px) {
  .topbar-wrapper,
  .topbar {
    display: none;
  }
}
</style>
