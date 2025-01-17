<script setup>
import Menu from '@/components/Menu.vue';
</script>

<template>
    <Menu />
    <RouterLink to="/boiler-room">
        <div class="back">
            <div class="back-logo"></div>
        </div>
    </RouterLink>

</template>

<style scoped>
.back {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid #696770; 
    position: relative;
    margin-left: 100px;
    margin-bottom: 60px; 
}
.back-logo {
    background-image: url('@/assets/images/back2.svg');
    background-repeat: no-repeat; 
    width: 100%; /* Занимает всю ширину родителя */
    height: 100%; /* Занимает всю высоту родителя */
    background-size: contain; /* Масштабирование изображения */
}

.back:hover {
    border: 2px solid #555555;
}
.back-logo:hover {
    background-image: url('@/assets/images/back3.svg');
}

.back:active {
    border: 2px solid #555555;
    background-color: #E8E8E8;
}
.back-logo:active {
    background-image: url('@/assets/images/back3.svg');
}
</style>
