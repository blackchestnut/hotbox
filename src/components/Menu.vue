<script setup>
import { links } from "@/helpers/constants";
</script>
<template>
  <div class="topbar-wrapper">
    <div class="topbar">
      <router-link
        v-for="(link, index) in links"
        :key="link.path"
        :to="link.path"
        class="button"
        :class="{ active: selectedButton === index }"
      >
        {{ link.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links,
      selectedButton: null,
    };
  },
  mounted() {
    this.updateSelectedButton();
  },
  methods: {
    updateSelectedButton() {
      const currentPath = this.$route.path;
      const buttonIndex = this.links.findIndex(
        (link) =>
          link.path === currentPath ||
          (link.extraMatchPath && currentPath.includes(link.extraMatchPath))
      );
      this.selectedButton = buttonIndex !== -1 ? buttonIndex : 0;
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
