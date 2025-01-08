<script setup>
import Menu from '@/components/Menu.vue';
</script>
<template>
    <Menu/>
    <div class="car-wrapper">
        <div class="title">
            <h1 style="font-size: 40px;">Мобильная котельная установка на базе фургона Ford Transit</h1>
            <p>Мобильность автомобиля позволяет оперативно приехать и подать тепло на объекты с высоким уровнем стесненности.</p>
            <p>В производстве применяются только проверенные и надежные комплектующие для безотказной работы при аварийных ситуациях на объектах, требующих срочной подачи тепла.</p>
        </div>
        
        <!-- Сетка для трех блоков -->
        <div class="row">
            <div class="block">
                <img src="\src\assets\images\car1.png" alt="Car1" class="car1">
                <div class="Nameline">
                    <h3><img src="\src\assets\images\power-logo.svg" alt="Power Logo" class="power-logo" />Мощность</h3>
                    <p>Мощность котельной установки может варьироваться от 50 до 500 кВт,
                        в зависимости от нужд заказчика.</p>
                </div>
            </div>
            <div class="block">
                <img src="\src\assets\images\car2.png" alt="Car2" class="car2">
                <div class="Nameline">
                    <h3><img src="\src\assets\images\curcle-logo.svg" alt="Curcle Logo" class="-logo" />Область применения</h3>
                    <p>Мобильная котельная на базе Ford Transit может применяться в МЧС для подачи тепла, в службе ЖКХ, в
                        Вооруженных силах для отопления ангаров, казарм и т.п.</p>
                </div>
            </div>
            <div class="block">
                <img src="\src\assets\images\car3.png" alt="Car3" class="car3">
                <div class="Nameline">
                    <h3><img src="\src\assets\images\arrow-logo.svg" alt="Arrow Logo" class="arrow-logo" />Варианты реализации</h3>
                    <p>Возможна реализация проекта на другом транспорте
                        (повышенной проходимости и большей мощности).</p>
                </div>
            </div> 
        </div>
        
        <div class="button-container">
            <button class="buy">ЗАКАЗАТЬ</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarPage',
};
</script>

<style scoped>
.title {
    width: 1127px;
    margin: auto;
    font-family: 'Inter', sans-serif; 
    font-size: 30px; 
}
.car-wrapper {
    width: 1280px;
    margin: auto;
    justify-content: center;
}
.row {
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
}

.block {
    background-color: #000000; 
    margin: 10px;
    height: 646px; 
    width: 357px; 
    text-align: center;
    color: white;
    border-radius: 8px;
    text-align: left;
    font-family: 'Inter', sans-serif; 
    font-size: 20px; 
}
.Nameline {
    padding: 20px;
}

h1 {
    margin-bottom: 30px;
}

h3 {
    display: flex; 
    align-items: center; 
}

p {
    margin-top: 30px; /* Отступ сверху для всех абзацев */
    margin-bottom: 30px; /* Отступ снизу для всех абзацев */
}

.power-logo, .-logo, .arrow-logo {
    height: 30px;
    margin-right: 10px; 
}

.button-container {
    display: flex; 
    justify-content: center; 
    margin-top: 20px; 
}
.buy {
    width: 120px;
    height: 54px;
}
.button-container {
    padding-bottom: 60px;
}
</style>
