<script setup>
import FooterComponent from '@/components/Footer.vue';
import TopBarComponent from '@/components/TopBar.vue';
import MenuComponent from '@/components/Menu.vue';
</script>

<template>
    <TopBarComponent/>
    <RouterView />
    <FooterComponent />
</template>