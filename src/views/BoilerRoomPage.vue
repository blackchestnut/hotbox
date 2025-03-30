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
            <div class="sort-mobile" @click="showFilterModal = true"></div>
            <div class="sort-power-mobile" @click="showPowerModal = true"></div>
        </div>
        
        <!------------------------ Модальное окно сортировки по мощности ------------------------->
        <div v-if="showPowerModal" class="modal-overlay" @click.self="showPowerModal = false">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Сортировка по мощности</h3>
                    <div class="close" @click="showPowerModal = false"></div>
                </div>
                <div class="modal-body">
                    <div class="sort-option" 
                         @click="selectSortOption('powerAsc'); showPowerModal = false">
                        Мощность: по возрастанию
                    </div>
                    <div class="sort-option" 
                         @click="selectSortOption('powerDesc'); showPowerModal = false">
                        Мощность: по убыванию
                    </div>
                </div>
            </div>
        </div>
        
        <!------------------------ Модальное окно фильтров ------------------------->
        <div v-if="showFilterModal" class="modal-overlay" @click.self="showFilterModal = false">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Фильтры</h3>
                    <div class="close" @click="showFilterModal = false"></div>
                </div>
                <div class="modal-body">
                    <div class="numbers">КОЛИЧЕСТВО КОТЛОВ</div>
                    <div class="checkbox-group">
                        <label v-for="count in boilerCounts" :key="count" class="checkbox-label">
                            <input
                                type="checkbox"
                                :value="count"
                                v-model="selectedBoilerCounts"
                                class="checkbox-input"
                                @change="applyFilters"
                            />
                            <span class="checkbox-text">{{ count }}</span>
                        </label>
                    </div>

                    <div class="numbers">МОЩНОСТЬ (МАКС.)</div>
                    <div class="checkbox-group">
                        <label v-for="power in maxPowers" :key="power" class="checkbox-label">
                            <input
                                type="checkbox"
                                :value="power"
                                v-model="selectedMaxPowers"
                                class="checkbox-input"
                                @change="applyFilters"
                            />
                            <span class="checkbox-text">{{ power }} кВт</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        
        <!------------------------ Десктопная сортировка ------------------------->
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
                                @change="applyFilters"
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
                                @change="applyFilters"
                            />
                            {{ power }} кВт
                        </label>
                    </div>
                </div>
            </div>

            <div class="items">
                <router-link
                    v-for="(item, index) in filteredAndSortedBoilers"
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
                <template v-for="(item, itemIndex) in pair" :key="itemIndex">
                    <router-link
                        class="item"
                        :to="{ name: 'boiler', params: { id: item.path } }"
                    >
                        <div class="item-content">
                            <img :src="item.imgSrc" class="item-img" :alt="item.type" />
                            <div class="type">{{ item.type }}</div>
                            <div class="description">
                                {{ item.mobileDescription }}<br>
                            </div>
                        </div>
                        <button class="details-button">ПОДРОБНЕЕ</button>
                    </router-link>
                </template>
            </div>
        </div>

        <div class="merits">
            <div class="desktop-info-block">
                <h2>10 лет</h2>
                <div class="desktop-divider"></div>
                <p>Наш опыт работы в<br>
                    сфере теплоснабжения</p>
            </div>
            <div class="desktop-info-block">
                <h2>48 часов</h2>
                <div class="desktop-divider"></div>
                <p>Срок монтажа<br>
                    котельной на фундаменте</p>
            </div>
            <div class="desktop-info-block">
                <h2>60 дней</h2>
                <div class="desktop-divider"></div>
                <p>Средний срок<br>
                    изготовления котельной</p>
            </div>
            <div class="desktop-info-block">
                <h2>12 месяцев</h2>
                <div class="desktop-divider"></div>
                <p>Гарантийный срок со<br>
                    дня реализации</p>
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
const sortOption = ref('powerAsc');
const isOpen = ref(false);
const selectedOption = ref({ value: 'powerAsc', text: 'Мощность: по возрастанию' });
const showPowerModal = ref(false);
const showFilterModal = ref(false);

const options = [
    { value: 'powerAsc', text: 'Мощность: по возрастанию' },
    { value: 'powerDesc', text: 'Мощность: по убыванию' },
];

const filteredBoilers = computed(() => {
    let filtered = [...boilers];

    // Фильтрация по количеству котлов
    if (selectedBoilerCounts.value.length > 0) {
        filtered = filtered.filter(boiler => 
            selectedBoilerCounts.value.includes(boiler.boilerCount)
        );
    }

    // Фильтрация по мощности
    if (selectedMaxPowers.value.length > 0) {
        filtered = filtered.filter(boiler => 
            selectedMaxPowers.value.includes(parseInt(boiler.power))
        );
    }

    return filtered;
});

const filteredAndSortedBoilers = computed(() => {
    let sorted = [...filteredBoilers.value];

    switch (sortOption.value) {
        case 'powerAsc':
            sorted.sort((a, b) => parseInt(a.power) - parseInt(b.power));
            break;
        case 'powerDesc':
            sorted.sort((a, b) => parseInt(b.power) - parseInt(a.power));
            break;
        default:
            break;
    }
    
    return sorted;
});

const pairedBoilers = computed(() => {
    const pairs = [];
    for (let i = 0; i < filteredAndSortedBoilers.value.length; i += 2) {
        const pair = filteredAndSortedBoilers.value.slice(i, i + 2);
        pairs.push(pair);
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

const selectSortOption = (optionValue) => {
    const option = options.find(opt => opt.value === optionValue);
    if (option) {
        selectedOption.value = option;
        sortOption.value = optionValue;
    }
};

const applyFilters = () => {
    // Применяем фильтры автоматически через computed свойства
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
    font-size: 18px; 
    font-weight: 600; 
    margin: 20px 16px; 
}

label {
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
    padding: 6px 8px;
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
    flex-wrap: wrap; /* Позволяет блокам переноситься на маленьких экранах */
    gap: 20px; /* Отступ между блоками */
    margin-top: 30px;
    margin-bottom: 60px;
    text-align: center;
}

.desktop-info-block {
    width: 260px; /* Максимальная ширина */
    height: 164px;
    background-color: #F4F4F4;
    border-radius: 8px;
    padding: 10px 0px;
    box-sizing: border-box; /* Учитывает padding в общей ширине */
    position: relative; /* Для позиционирования разделителя */
}

.desktop-info-block h2 {
    font-size: 22px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 8px;
}

.desktop-info-block p {
    font-size: 18px;
    margin-bottom: 0;
    padding: 0px;
}

.desktop-divider {
    height: 2px;
    background-color: #000;
 
    left: 0;
    right: 0;
    margin-bottom: 20px;
}


.i {
    margin-top: 10px;
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
    position: relative;
}
.items-mobile {
    display: none;
}
.mobile-container {
    display: none;
}
.details-button {
    display: none;
}

/* Модальные окна */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    z-index: 1000;
    align-items: flex-start;
}

.modal-content {
    background-color: white;
    border-radius: 0 0 12px 12px;
    width: 100%;
    max-width: 100%;
    max-height: 80vh;
    overflow-y: auto;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    position: relative;
}

.modal-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
}

.close {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-image: url("@/assets/images/black_logos/close.svg");
    background-size: contain;
    position: absolute;
    right: 0;
    top: 0;
}

.sort-option {
    padding: 15px 10px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    cursor: pointer;
}

.sort-option:last-child {
    border-bottom: none;
}

.sort-option:hover {
    background-color: #f5f5f5;
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
        color: #000;
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
        height: 350px;
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
        max-width: 140px;
    }

    .item-img {
        width: 160px;
        height: 160px;
        border-radius: 8px 8px 0 0;
        margin: 0px;
        margin-left: 20px;
    }

    .type {
        font-size: 16px;
        font-weight: 600;
        text-align: left;
        padding: 10px;
        color: black;
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
    .details-button {
        display: block;
    }
    .details-button {
        width: 140px;
        height: 34px;
        background-color: #fff;
        color: #3b3b3b;
        border-color: #3b3b3b;
        border-radius: 8px;
        border: 2px solid #3b3b3b;
        transition: background-color 0.3s ease;
        font-size: 14px;
        margin-top: auto;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .details-button:active {
        border-color: #696770;
        color: #696770;
    }
    
    /* Стили для модальных окон в мобильной версии */
    .modal-content {
        width: 100%;
        max-width: 100%;
        border-radius: 0 0 12px 12px;
        padding-bottom: 30px;
    }
    
    .checkbox-group {
        margin-bottom: 15px;
    }
    
    .checkbox-label {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        font-size: 16px;
    }
    
    .checkbox-input {
        margin-right: 12px;
        flex-shrink: 0;
    }
    
    .checkbox-text {
        display: inline-block;
        vertical-align: middle;
    }
    
    .numbers {
        font-size: 16px;
        margin: 15px 0;
        text-align: left;
        font-weight: 600;
    }
    
    .modal-body {
        padding: 0 16px;
    }
    
    .modal-header {
        padding: 0 16px 20px;
    }
    
    
}
</style>