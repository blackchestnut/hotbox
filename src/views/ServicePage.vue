<script setup>
import Menu from '@/components/Menu.vue';
</script>
<template>
    <Menu/>
    <div class="service-wrapper">
        <div class="service">
            <div class="head-one">
                <h1>Полный комплекс услуг по работе с котельными системами</h1>
                <p>Проектирование, изготовление поставка, подключение, запуск, поставка дизельного топлива,
                    мониторинг и сервисное обслуживание.</p>
            </div>
            <div class="head-two">
                <h2>Аренда</h2>
                <p>
                    Аренда автоматизированных блочно-модульных котельных установок (БМАК) для обогрева жилых и
                    промышленных помещений, складов, ангаров и т. п. на дизельном топливе.
                </p>
                <p>Также возможна аренда мобильной котельной установки мощностью 500 кВт на базе автомобиля Ford Transit</p>
            </div>
        </div>
        <div class="prices">
            <div class="button-container">
                <div class="transparent-button">
                    <div class="title">БМАК 0,5 мВт 1К</div>
                    Наружное размещение<br>
                    Теплоснабжение и ГВС<br>
                    Дизельное топливо<br>
                    Мощность 500 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 150 000 руб. / месяц
                </div>
                <div class="transparent-button">
                    <div class="title">БМАК 1,04 мВт 1К без ГВС</div>
                    Есть бензогенератор<br>
                    Теплоснабжение<br>
                    Дизельное топливо<br>
                    Мощность 1040 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 250 000 руб. / месяц
                </div>
                <div class="transparent-button">
                    <div class="title">БМАК 1,0 мВт 2К без ГВС</div>
                    <div>
                        Есть бензогенератор<br>
                        Теплоснабжение<br>
                        Дизельное топливо<br>
                        Мощность 1000 кВт<br>
                        Доставка, демонтаж и вывоз котельной рассчитывается индивидуально
                    </div>
                    <div>
                        от 260 000 руб. / месяц
                    </div>
                </div>
                <div class="transparent-button">
                    <div class="title">БМАК 3,0 мВт 1К без ГВС</div>
                    Есть бензогенератор<br>
                    Теплоснабжение<br>
                    Дизельное топливо<br>
                    Мощность 3000 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 350 000 руб. / месяц
                </div>
            </div>
        </div>
        <div class="production">
            <div class="description">
                <h2>Проиводство</h2>
                <p>
                    Изготовление и поставка блочно-модульных автоматизированных
                    котельных установок (БМАК) в соответствии с техническими требованиями
                    заказчика необходимой мощности.
                </p>
                <p>
                    Изготовление котлов наружного размещений БМАК 0,5 МВт с
                    возможностью каскадного подключения.
                </p>
                <p>
                    Изготовления мобильных котельных установок мощностью до 500 кВт на
                    базе автомобилей.
                </p>
            </div>
        </div>
        <div class="plan"></div>
        <div class="button-order">
            <button class="order">ЗАКАЗАТЬ</button>
        </div>

        <div class="repair-container">
            <div class="repair-inner">
                <h2>Ремонт и обслуживание</h2>
                <p>
                    В штате компании постоянно работает 5 сервисных бригад, готовых на
                    высоком уровне оказать работы по обслуживанию, пуско-наладке и
                    запуску котельного оборудования.
                </p>
                <p>Бригада будет у Вас на объекте в течении 24 часов.</p>
            </div>
            <div class="button-order">
                <button class="order" style="margin-top: 46px;">ЗАКАЗАТЬ</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'service',
};
</script>

<style scoped>
.service-wrapper {
    display: flex; /* Использует flexbox для выравнивания */
    flex-direction: column; /* Вертикальная ориентация */
    align-items: center; /* Центрирует элементы по горизонтали */
    justify-content: center; /* Центрирует элементы по вертикали */
    text-align: left; /* Центрирует текст внутри элементов */
}

.service {
    width: 1136px;
    font-size: 30px; /* Устанавливает размер шрифта 30 пикселей */
    padding-bottom: 60px;
}

h1, h2 {
    font-size: 40px; /* Устанавливает размер шрифта 40 пикселей */
    font-weight: 600; /* Устанавливает жирное начертание */
    line-height: 50px;
    margin-bottom: 30px;
}

p {
    padding-bottom: 30px;
    font-size: 30px;
}

.prices {
    background-color: black; /* Черный фон */
    display: flex; /* Использует flexbox для выравнивания кнопок */
    align-items: center; /* Центрирует кнопки по вертикали */
    justify-content: center; /* Центрирует кнопки по горизонтали */
    padding: 36px 0;
    margin-bottom: 60px;
}

.button-container {
    display: flex; /* Использует flexbox для кнопок */
    flex-wrap: wrap; /* Позволяет кнопкам переноситься на новую строку */
    justify-content: center;
}

.title {
    font-size: 30px;
    line-height: 30px;
    font-weight: 600;
}

.transparent-button {
    display: grid;
    gap: 20px;
    background-color: rgba(255, 255, 255, 0.144); /* Полупрозрачный белый фон */
    border: none; /* Убирает рамку */
    color: white; /* Цвет текста */
    font-size: 20px; /* Размер шрифта */
    padding: 30px;
    margin: 30px; /* Отступы между кнопками */
    cursor: pointer; /* Указывает, что кнопка кликабельна */
    border-radius: 8px; /* Закругленные углы */
    transition: background-color 0.3s; /* Плавный переход цвета фона */
    width: 538px;
    height: 330px;
    text-align: left;
    line-height: 36px;
    font-family: 'Inter', sans-serif; /* Использует шрифт Inter */
    font-size: 20px; /* Устанавливает размер шрифта 30 пикселей */
    font-weight: 300;
}

.transparent-button:hover {
    background-color: rgba(255, 255, 255, 0.199); /* Изменение цвета при наведении */
}
.production {
    width: 1136px;
    height: 468px;
    font-size: 30px; /* Устанавливает размер шрифта 30 пикселей */
}
.plan {
    background-image: url("/src/assets/images/plan.png");
    height: 785px;
    width: 1136px;
}
.button-order {
    display: flex; 
    justify-content: center; 
}
.order {
    width: 120px;
    height: 54px;
}
.button-order {
    padding-bottom: 60px;
}
.repair-container {
    background-image: url("/src/assets/images/repair-background.png");
    background-size: cover;
    padding: 126px 40px 40px;
    color: #fff;
}
.repair-inner {
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.199);
    border-radius: 8px;
}
</style>
