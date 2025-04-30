<template>
  <div class="topbar-wrapper">
    <div class="topbar">
      <router-link
        v-for="(button, index) in buttons"
        :key="button.path"
        :to="button.path"
        class="button"
        :class="{ active: selectedButton === index }"
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
        { label: "ГЛАВНАЯ", path: "/" },
        {
          label: "КОТЕЛЬНЫЕ",
          path: "/boiler-room",
          extraMatchPath: "kotelnye",
        },
        { label: "УСЛУГИ", path: "/service" },
        { label: "МОБИЛЬНАЯ КОТЕЛЬНАЯ УСТАНОВКА", path: "/car" },
        { label: "НОВОСТИ", path: "/news" },
        { label: "О НАС", path: "/us" },
      ],
      selectedButton: null,
    };
  },
  mounted() {
    this.updateSelectedButton();
  },
  methods: {
    updateSelectedButton() {
      const currentPath = this.$route.path;
      const buttonIndex = this.buttons.findIndex(
        (button) =>
          button.path === currentPath ||
          currentPath.includes(button.extraMatchPath)
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
