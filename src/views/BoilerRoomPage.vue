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
                    v-for="(item, index) in boilers"
                    :key="index"
                    class="item"
                    :to="item.link"
                >
                    <div class="item-content">
                        <img :src="item.imgSrc" class="item-img" :alt="'Кнопка ' + (index + 1)" />
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
import { ref } from 'vue';

// Данные для чекбоксов
const boilerCounts = ref([1, 2]);
const maxPowers = ref([500, 1200, 1400, 1600, 4800, 6000, 6100, 7400]);

// Состояние выбранных опций
const selectedBoilerCounts = ref([]);
const selectedMaxPowers = ref([]);

// Данные для котлов
const boilers = ref([
    {
        imgSrc: "/src/assets/images/boiler-500.png",
        type: "ПАКУ 500 кВт 1К (Н/Р)",
        purpose: "Теплоснабжение",
        typeDescription: "Блочно-модульная автоматизированная котельная",
        manufactureDate: "Февраль - 2023г",
        boiler: "Wiesberg Steel 501",
        boilerCount: 1,
        power: "500 кВт",
        available: 2,
        link: "/"
    },
   
    {
        imgSrc: "/src/assets/images/boiler-1000.png",
        type: "ПАКУ 1200 кВт 2К (Н/Р)",
        purpose: "Теплоснабжение",
        typeDescription: "Блочно-модульная автоматизированная котельная",
        manufactureDate: "Январь - 2024г",
        boiler: "Buderus Logano SK755",
        boilerCount: 2,
        power: "1000 кВт",
        available: 5,
        link: "/"
    },

    {
        imgSrc: "/src/assets/images/boiler-1200.png",
        type: "БМАК 1040 кВт 1К",
        purpose: "Теплоснабжение",
        typeDescription: "Блочно-модульная автоматизированная котельная",
        manufactureDate: "Январь - 2024г",
        boiler: "Buderus Logano SK755",
        boilerCount: 1,
        power: "1040 кВт",
        available: 5,
        link: "/"
    },

    {
        imgSrc: "/src/assets/images/boiler-1000.png",
        type: "БМАК 1200 кВт 1К",
        purpose: "Теплоснабжение",
        typeDescription: "Блочно-модульная автоматизированная котельная",
        manufactureDate: "Ноябрь - 2022г",
        boiler: "Temron WL-1250",
        boilerCount: 1,
        power: "1200 кВт",
        available: 5,
        link: "/"
    },
    
    {
        imgSrc: "/src/assets/images/boiler-1200.png",
        type: "БМАК 1400 кВт 1К",
        purpose: "Теплоснабжение",
        typeDescription: "Блочно-модульная автоматизированная котельная",
        manufactureDate: "Декабрь - 2022г.",
        boiler: "Buderus Logano SK755",
        boilerCount: 1,
        power: "1400 кВт",
        available: 5,
        link: "/"
    },

    {
        imgSrc: "/src/assets/images/boiler-1000.png",
        type: "БМАК 1600 кВт 1К",
        purpose: "Теплоснабжение",
        typeDescription: "Автоматизированная газовая горелка",
        manufactureDate: "Ноябрь - 2022г.",
        boiler: "Temron WL-1750",
        boilerCount: 1,
        power: "1600 кВт",
        available: 5,
        link: "/"
    },

    {
        imgSrc: "/src/assets/images/boiler-1200.png",
        type: "БМАК 4800 кВт 2К",
        purpose: "Теплоснабжение",
        typeDescription: "Автоматизированная газовая горелка",
        manufactureDate: "Ноябрь - 2022г.",
        boiler: "Sibiria 2,5 кВт",
        boilerCount: 2,
        power: "4800 кВт",
        available: 5,
        link: "/"
    },

    {
        imgSrc: "/src/assets/images/boiler-1200.png",
        type: "БМАК 6000 кВт 2К",
        purpose: "Теплоснабжение",
        typeDescription: "Автоматизированная газовая горелка",
        manufactureDate: "Ноябрь - 2022г.",
        boiler: "Sibiria 3,0 кВт",
        boilerCount: 2,
        power: "6000 кВт",
        available: 5,
        link: "/"
    },

    {
        imgSrc: "/src/assets/images/boiler-1200.png",
        type: "БМАК 6100 кВт 2К",
        purpose: "Теплоснабжение",
        typeDescription: "Автоматизированная газовая горелка",
        manufactureDate: "Ноябрь - 2022г.",
        boiler: "Bosch UT-L24",
        boilerCount: 2,
        power: "6100 кВт",
        available: 5,
        link: "/"
    },

    {
        imgSrc: "/src/assets/images/boiler-1200.png",
        type: "БМАК 7400 кВт 2К",
        purpose: "Теплоснабжение",
        typeDescription: "Автоматизированная газовая горелка",
        manufactureDate: "Ноябрь - 2022г.",
        boiler: "Bosch UT-L28",
        boilerCount: 2,
        power: "7400 кВт",
        available: 5,
        link: "/"
    },
]);

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
.g {
    color: #696770;
}
.fat {
    font-weight: 600;
}
.merits {
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.information {
    background-color: #F4F4F4;
    border-radius: 8px;
    padding: 20px 16px 20px 16px;
}
.line {
    height: 2px; 
    background-color: #000; 
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
