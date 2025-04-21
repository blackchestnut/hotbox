<script setup>
import FooterComponent from "@/components/Footer.vue";
import TopBarComponent from "@/components/TopBar.vue";
</script>

<template>
  <TopBarComponent />
  <RouterView />
  <FooterComponent />
</template>
