<template>
    <Menu />
    <div class="page-container">
        <RouterLink to="/">
            <div class="back">
                <div class="back-logo"></div>
            </div>
        </RouterLink>
            <div class="head-one">
                <h1>Автоматизированные котельные системы HotBox</h1>
                <p>Мы разрабатываем котельные для обеспечения эффективной работой<br>
                системы отопления, вентиляции, ГВС на различных объектах.<br>
                Мобильность наших котельных установок дает возможность в<br>
                любой момент перевозить ее на новое место</p>
            </div>
            <div class="two-button-container">
                <div class="sort-mobile"></div>
                <div class="sort-power-mobile"></div>
            </div>
            
        <!------------------------sort------------------------->
        <div class="sort-container">
            <div class="custom-select" @click="toggleDropdown">
                <div class="selected">{{ selectedOption.text }}</div>
                <div class="arrow" :class="{ 'open': isOpen }"> <img src="/src/assets/images/black_logos/menu-arrow.svg"/></div>
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
                            В наличии&nbsp; <span class="fat">{{ item.available }} шт</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="items-mobile">
            <div class="item-pair" v-for="(pair, index) in pairedBoilers" :key="index">
            <router-link
                class="item"
                :to="{ name: 'boiler', params: { id: pair[0].path } }"
            >
                <div class="item-content">
                    <img :src="pair[0].imgSrc" class="item-img" :alt="pair[0].type" />
                    <div class="text-container"> 
                        <div class="type">{{ pair[0].type }}</div>
                        <div class="description">
                            {{ pair[0].mobileDescription }}<br>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link
                class="item"
                :to="{ name: 'boiler', params: { id: pair[1].path } }"
            >
                <div class="item-content">
                    <img :src="pair[1].imgSrc" class="item-img" :alt="pair[1].type" />
                        <div class="type">{{ pair[1].type }}</div>
                        <div class="description">
                            {{ pair[1].mobileDescription }}<br>
                        </div>
                </div>
            </router-link>
    </div>
</div>

        <div class="merits">
            <div class="information">
                <div class="time">10 лет<br></div>
                <div class="line"></div>
                <div class="i">Наш опыт работы в<br>
                сфере теплоснабжения</div>
            </div>
            <div class="information">
                <div class="time">48 часов<br></div>
                <div class="line"></div>
                <div class="i">Срок монтажа<br>
                котельной на фундаменте</div>
            </div>
            <div class="information">
                <div class="time">60 дней<br></div>
                <div class="line"></div>
                <div class="i">Средний срок<br>
                изготовления котельной</div>
            </div>
            <div class="information">
                <div class="time">12 месяцев<br></div>
                <div class="line"></div>
                <div class="i">Гарантийный срок со<br>
                дня реализации</div>
            </div>
        </div>

        <div class="mobile-container">
            <div class="info-block">
                <h2>10 лет</h2>
                <div class="divider"></div>
                <p>Наш опыт работы в<br>
                    сфере теплоснабжения</p>
            </div>
            <div class="info-block">
                <h2>48 часов</h2>
                <div class="divider"></div>
                <p>Срок монтажа<br>
                    котельной на фундаменте</p>
            </div>
            <div class="info-block">
                <h2>60 дней</h2>
                <div class="divider"></div>
                <p>Средний срок<br>
                    изготовления котельной</p>
            </div>
            <div class="info-block">
                <h2>12 месяцев</h2>
                <div class="divider"></div>
                <p>Гарантийный срок со<br>
                    дня реализации</p>
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

const sortOption = ref('powerAsc'); // Переменная для хранения текущей выбранной опции сортировки
const isOpen = ref(false);
const selectedOption = ref({ value: 'powerAsc', text: 'Мощность: по возрастанию' });
// Опции для сортировки в массиве
const options = [
    { value: 'powerAsc', text: 'Мощность: по возрастанию' },
    { value: 'powerDesc', text: 'Мощность: по убыванию' },
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

const pairedBoilers = computed(() => {
    const pairs = [];
    for (let i = 0; i < sortedBoilers.value.length; i += 2) {
        pairs.push(sortedBoilers.value.slice(i, i + 2));
    }
    return pairs;
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
    justify-content: space-between; 
    width: 100%; 
}

.item-img {
    margin-right: 22px;
    margin-bottom: 30px;
    max-width: 240px;
    max-height: 240px;
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
    max-height: 24px;
    display: flex;
    align-items: center; 
    justify-content: center; 
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
    padding: 20px 10px 20px 10px;
    position: relative; 
}
.information .line {
    position: absolute; /* Абсолютное позиционирование */
    left: 0; /* Сдвигаем влево */
    width: 100%; /* Ширина линии на 100% */
    height: 2px; /* Высота линии */
    background-color: #000; /* Цвет линии */
}
.i {
    margin-top: 10px;
}
.time {
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
.two-button-container {
    display: none;
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
.items-mobile {
    display: none;
}
.mobile-container {
    display: none;
}
@media (max-width: 430px) {
    .page-container {
        max-width: 100%;
        margin: 0 auto;
        padding: 0 16px;
    }
    .topbar {
        display: none;
    }
    .back {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        border: 2px solid #696770; 
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px; 
    }
    .back-logo {
        background-image: url('@/assets/images/back_arrow/back2.svg');
        background-repeat: no-repeat; 
        width: 100%; 
        height: 100%; 
        background-size: contain; 
    }
    .back:hover {
        border: 2px solid #555555;
    }
    .head-one h1 {
        font-size: 22px;
        line-height: 40px;
        margin-bottom: 10px;
    }
    .head-one p {
        font-size: 16px;
        margin-bottom: 30px;
        padding: 0px;
    }
    
    .two-button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    }
    .sort-mobile {
    background-image: url('@/assets/images/black_logos/sort-logo-mobile.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 36px;
    height: 36px;
    }
    .sort-power-mobile {
    background-image: url('@/assets/images/black_logos/three-lines-mobile.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 36px;
    height: 36px;
    }

    .filters {
        display: none;
    }
    .custom-select {
        display: none;
    }
    
    .item-content {
        max-width: 140px;
        max-height: 310px;
    }
   
    .item-img {
        width: 140px;
        height: 140px;
    }
    

    .items {
        display: none;
    }

    .items-mobile {
        display: flex;
        flex-direction: column;
    }

    .item-pair {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .item {
        width: 160px;
        height: auto;
        margin: 0;
        display: flex;
        flex-direction: column;
        border-bottom: none;
        border-radius: 8px;
        background-color: #EBEBEB;
        text-decoration: none;
    }

    .item-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .item-img {
        width: 160px;
        height: 160px;
        border-radius: 8px 8px 0 0;
        margin: 0px;
        margin-left: 20px;
    }

    .type {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        text-align: left;
        padding: 10px;
        color: black; /* Устанавливаем цвет текста на черный */
        text-decoration: none;
    }
    .description {
        font-size: 14px;
        color: #555555;
        line-height: 18px;
        padding: 0px 10px 10px 10px;
        text-align: left;
    }


    .mobile-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .info-block {
        text-align: center;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 0px;
    }

    .divider {
        width: 188px;
        height: 2px;
        background-color: #000;
        margin-bottom: 12px;
    }

    p {
    font-size: 14px;
    color: #666;
    padding: 0px;
    margin-bottom: 20px;
    }
    .merits {
        display: none;
    }

}
</style>
