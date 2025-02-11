<template>
    <Menu />
    <div class="page-container">
        <div class="boiler">
            <div class="head-one">
                <h1>Автоматизированные котельные системы HotBox</h1>
                <p>Мы разрабатываем котельные для обеспечения эффективной работой<br>
                системы отопления, вентиляции, ГВС на различных объектах.<br>
                Мобильность наших котельных установок дает возможность в<br>
                любой момент перевозить ее на новое место</p>
            </div>
        </div>

        <!------------------------sort------------------------->
        <div class="sort-container">
            <div class="custom-select" @click="toggleDropdown">
                <div class="selected">{{ selectedOption.text }}</div>
                <div class="arrow" :class="{ 'open': isOpen }"> <img src="/src/assets/images/menu-arrow.svg"/></div>
                <ul v-if="isOpen" class="options">
                    <li
                        v-for="option in options"
                        :key="option.value"
                        @click="selectOption(option)"
                        :class="{ 'selected': selectedOption.value === option.value }"
                    >
                        {{ option.text }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="fiter-items-container">
            <div class="filters">
                <div class="checkbox-container">
                    <div class="numbers">КОЛИЧЕСТВО КОТЛОВ</div>
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

                    <div class="numbers">МОЩНОСТЬ (МАКС.)</div>
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
            <div class="items">
                <router-link
                    v-for="(item, index) in sortedBoilers"
                    :key="index"
                    class="item"
                    :to="{ name: 'boiler', params: { id: item.path } }"
                >
                    <div class="item-content">
                        <img :src="item.imgSrc" class="item-img" :alt="item.type" />
                        <div class="text-container"> 
                            <div class="type">{{ item.type }}</div>
                            <div class="description">
                                <span class="g">Назначение:</span> {{ item.purpose }}<br>
                                <span class="g">Тип:</span> {{ item.typeDescription }}<br>
                                <span class="g">Дата изготовления:</span> {{ item.manufactureDate }}<br>
                                <span class="g">Котел:</span> {{ item.boiler }}<br>
                                <span class="g">Количество котлов:</span> {{ item.boilerCount }}<br>
                                <span class="g">Мощность:</span> {{ item.power }}
                            </div>
                        </div>
                        <div
                            class="amount"
                            :style="{ backgroundColor: item.available < 3 ? '#FFA500' : '#22cb5785', color: item.available < 3 ? '#CD4000' : '#008029' }">
                            В наличии <span class="fat">{{ item.available }} шт</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="merits">
            <div class="information">
                10 лет<br>
                <div class="line"></div>
                Наш опыт работы в<br>
                сфере теплоснабжения
            </div>
            <div class="information">
                48 часов<br>
                <div class="line"></div>
                Срок монтажа<br>
                котельной на фундаменте
            </div>
            <div class="information">
                60 дней<br>
                <div class="line"></div>
                Средний срок<br>
                изготовления котельной
            </div>
            <div class="information">
                12 месяцев<br>
                <div class="line"></div>
                Гарантийный срок со<br>
                дня реализации
            </div>
        </div>
    </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
import { ref, computed } from 'vue';
import { boilers } from '@/data';

const boilerCounts = [1, 2];
const maxPowers = [500, 1200, 1400, 1600, 4800, 6000, 6100, 7400];


const selectedBoilerCounts = ref([]);
const selectedMaxPowers = ref([]);

const sortOption = ref('default'); // Переменная для хранения текущей выбранной опции сортировки
const isOpen = ref(false);
const selectedOption = ref({ value: 'default', text: 'По умолчанию' });
// Опции для сортировки в массиве
const options = [
    { value: 'default', text: 'По умолчанию' },
    { value: 'powerAsc', text: 'Мощность: по возрастанию' },
    { value: 'powerDesc', text: 'Мощность: по убыванию' },
    { value: 'priceAsc', text: 'Цена: по возрастанию' },
    { value: 'priceDesc', text: 'Цена: по убыванию' }
];


const sortedBoilers = computed(() => {
    let sorted = [...boilers]; // Создаем копию массива котлов

    // Фильтрация по количеству котлов
    if (selectedBoilerCounts.value.length) {
        sorted = sorted.filter(boiler => selectedBoilerCounts.value.includes(boiler.boilerCount));
    }

    // Фильтрация по мощности
    if (selectedMaxPowers.value.length) {
        sorted = sorted.filter(boiler => selectedMaxPowers.value.includes(parseInt(boiler.power)));
    }

    //  // Сортировка по выбранной опции
    switch (sortOption.value) {
        case 'powerAsc':
            sorted.sort((a, b) => parseInt(a.power) - parseInt(b.power));
            break;
        case 'powerDesc':
            sorted.sort((a, b) => parseInt(b.power) - parseInt(a.power));
            break;
        case 'priceAsc':
            
            break;
        case 'priceDesc':
           
            break;
        default:
            break;
    }
    
    return sorted;
});


const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
    selectedOption.value = option;
    isOpen.value = false;
    sortOption.value = option.value; 
};
</script>

<style scoped>
.filters {
    display: flex;
}

.checkbox-container {
    background-color: #F9F9F9; 
    padding: 10px; 
    border-radius: 8px; 
    margin-right: 30px;
    max-height: 600px; 
}

.checkbox-group {
    display: flex;
    flex-direction: column;
}

.numbers {
    font-family: 'Inter', sans-serif; 
    font-size: 18px; 
    font-weight: 600; 
    margin: 20px 16px; 
}

label {
    font-family: 'Inter', sans-serif; 
    font-size: 18px; 
    font-weight: 500; 
    margin-bottom: 20px; 
    cursor: pointer;
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

.checkbox-input:checked::after {
    content: '✔'; 
    color: #FFFFFF; 
    font-size: 20px; 
    position: absolute; 
    left: 5px; 
    top: 1px; 
    line-height: 26px; 
}

.fiter-items-container {
    display: flex;
}

.items {
    display: flex;
    flex-direction: column; 
    text-decoration: none;
}

.item {
    background-color: #fff;
    margin-bottom: 30px; 
    display: flex;
    border-bottom: 1px solid #BEBEBE;
}
.items a {
    text-decoration: none;
    color: #000000; 
}
.item-content {
    display: flex; 
    align-items: flex-start;
}

.item-img {
    margin-right: 22px;
    padding-bottom: 30px;
}

.text-container {
    display: flex;
    flex-direction: column; 
    flex-grow: 1; 
}

.type {
    font-family: 'Inter', sans-serif; 
    font-size: 18px; 
    font-weight: 500;
    padding-bottom: 27px;
    padding-top: 7px;
    font-size: 18px; 
    font-weight: 600; 
}

.description {
    line-height: 26px;
    font-size: 16px;
}

.amount {
    color: #008029;
    background-color: #22cb5785;
    border-radius: 8px;
    padding: 6px 10px;
    margin-left: 10px; 
}

.fat {
    font-weight: 600;
}
.merits {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 60px;
}
.information {
    background-color: #F4F4F4;
    border-radius: 8px;
    padding: 20px 0px 20px 0px;
}
.line {
    height: 2px; 
    background-color: #000; 
    margin-top: 10px;
    margin-bottom: 10px;
}

.custom-select {
    padding: 12px;
    cursor: pointer;
    position: relative;
    background-color: #F9F9F9;
    border-radius: 8px;
    max-width: 360px;
    font-size: 16px;
    margin-left: 800px;
    margin-bottom: 90px;
    
}

.arrow {
    position: absolute;
    right: 12px;
    top: 14px;
    transition: transform 0.3s;
}

.arrow.open {
    transform: rotate(180deg); 
}

.options {
    position: absolute;
    border: none;
    list-style: none;
    z-index: 10;
    background-color: #F9F9F9;
    width: 100%;
    left: 0;
    padding-bottom: 12px;
    border-radius: 8px;
}

.options li {
    padding-top: 12px;
    padding-left: 12px;
    cursor: pointer;
}
.sort-container {
    position: relative; /* Устанавливаем позиционирование */
}

</style>
