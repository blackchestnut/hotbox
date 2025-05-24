<script setup>
import FooterComponent from "@/components/Footer.vue";
import TopBarComponent from "@/components/top_bar.vue";
</script>

<template>
  <TopBarComponent />
  <RouterView />
  <FooterComponent />
</template>
