<script setup>
import Menu from '@/components/Menu.vue';
import { ref } from 'vue';

// Данные для чекбоксов
const boilerCounts = ref([1, 2]);
const maxPowers = ref([500, 1200, 1400, 1600, 4800, 6000, 6100, 7400]);

// Состояние выбранных опций
const selectedBoilerCounts = ref([]);
const selectedMaxPowers = ref([]);
</script>

<template>
    <Menu/>
    <div class="boiler-wrapper">
        <div class="boiler">
            <div class="head-one">
                <h1>Автоматизированные котельные системы HotBox</h1>
                <p>Мы разрабатываем котельные для обеспечения эффективной работой</p>
                <p>системы отопления, вентиляции, ГВС на различных объектах.</p>
                <p>Мобильность наших котельных установок дает возможность в</p>
                <p>любой момент перевозить ее на новое место</p>
            </div>
        </div>

        <div class="filters">
            <div class="checkbox-container">
                <h2>КОЛИЧЕСТВО КОТЛОВ</h2>
                <div class="checkbox-group">
                    <label v-for="count in boilerCounts" :key="count">
                        <input
                            type="checkbox"
                            :value="count"
                            v-model="selectedBoilerCounts"
                            class="checkbox-input"
                        />
                        {{ count }}
                    </label>
                </div>

                <h2>МОЩНОСТЬ (МАКС.)</h2>
                <div class="checkbox-group">
                    <label v-for="power in maxPowers" :key="power">
                        <input
                            type="checkbox"
                            :value="power"
                            v-model="selectedMaxPowers"
                            class="checkbox-input"
                        />
                        {{ power }} кВт
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.boiler-wrapper {
    display: flex; /* Использует flexbox для выравнивания */
    flex-direction: column; /* Вертикальная ориентация */
    align-items: center; /* Центрирует элементы по горизонтали */
    justify-content: center; /* Центрирует элементы по вертикали */
    text-align: left; /* Центрирует текст внутри элементов */
}

.head-one {
    width: 1066px;
    height: 246px;
}

h1 {
    padding-bottom: 30px;
    font-family: 'Inter', sans-serif; /* Использует шрифт Inter */
    font-size: 36px; /* Устанавливает размер шрифта 36 пикселей */
    font-weight: 700; /* Устанавливает жирное начертание */
}

p {
    font-family: 'Inter', sans-serif; /* Использует шрифт Inter */
    font-size: 30px; /* Устанавливает размер шрифта 30 пикселей */
}

.filters {
    margin-top: 20px;
}

.checkbox-container {
    width: 254px;
    height: 574px; 
    background-color: #F9F9F9; 
    padding: 10px; 
    border-radius: 8px; 
}

.checkbox-group {
    display: flex;
    flex-direction: column;
}

h2 {
    font-family: 'Inter', sans-serif; 
    font-size: 18px; 
    font-weight: 600; 
    margin: 20px 16px; 
}

label {
    font-family: 'Inter', sans-serif; /* Использует шрифт Inter */
    font-size: 18px; /* Устанавливает размер шрифта 18 пикселей */
    font-weight: 500; 
    margin-bottom: 20px; /* Отступ между чекбоксами */
    cursor: pointer; /* Курсор при наведении */
    display: flex;
    align-items: center; 
}

.checkbox-input {
    position: relative; 
    width: 26px;
    height: 26px;
    appearance: none; 
    background-color: #E0E0E0;
    border-radius: 8px;
    margin-right: 16px;
    margin-left: 16px;
    cursor: pointer;
}


.checkbox-input:checked {
    background-color: #000000; 
    border-color: #000000; 
}

/* Стили для галочки */
.checkbox-input:checked::after {
    content: '✔'; 
    color: #FFFFFF; 
    font-size: 20px; 
    position: absolute; 
    left: 4px; 
    top: 1px; 
    line-height: 26px; 
    font-weight: bold; 
}

</style>
