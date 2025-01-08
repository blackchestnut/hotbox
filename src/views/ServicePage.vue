<script setup>
import Menu from '@/components/Menu.vue';
</script>
<template>
    <Menu/>
    <div class="service-wrapper">
        <div class="service">
            <div class="head-one">
                <h class="h">Полный комплекс услуг по работе с котельными системами</h>
                <p class="p1">Проектирование, изготовление поставка, подключение, запуск, поставка дизельного топлива,
                    мониторинг и сервисное обслуживание.</p>
            </div>
            <div class="head-two">
                <h class="h">Аренда</h>
                <p class="p1">Аренда автоматизированных блочно-модульных котельных установок (БМАК) для обогрева жилых и
                    промышленных помещений, складов, ангаров и т. п. на дизельном топливе.</p>
                <p>Также возможна аренда мобильной котельной установки мощностью 500 кВт на базе автомобиля Ford Transit</p>
            </div>
        </div>
        <div class="prices">
            <div class="button-container">
                <button class="transparent-button"><h>БМАК 0,5 мВт 1К</h><br>
                    Наружное размещение<br>
                    Теплоснабжение и ГВС<br>
                    Дизельное топливо<br>
                    Мощность 500 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 150 000 руб. / месяц
                </button>
                <button class="transparent-button"><h>БМАК 1,04 мВт 1К без ГВС</h><br>
                    Есть бензогенератор<br>
                    Теплоснабжение<br>
                    Дизельное топливо<br>
                    Мощность 1040 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 250 000 руб. / месяц
                </button>
                <button class="transparent-button"><h>БМАК 1,0 мВт 2К без ГВС</h><br>
                    Есть бензогенератор<br>
                    Теплоснабжение<br>
                    Дизельное топливо<br>
                    Мощность 1000 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 260 000 руб. / месяц
                </button>
                <button class="transparent-button"><h>БМАК 3,0 мВт 1К без ГВС</h><br>
                    Есть бензогенератор<br>
                    Теплоснабжение<br>
                    Дизельное топливо<br>
                    Мощность 3000 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 350 000 руб. / месяц
                </button>
            </div>
        </div>
        <div class="production">
            <div class="description">
                <h class="h">Проиводство</h>
                <p style="padding-top: 30px;">Изготовление и поставка блочно-модульных автоматизированных</p>
                <p>котельных установок (БМАК) в соответствии с техническими требованиями</p>
                <p>заказчика необходимой мощности.</p>
                <p style="padding-top: 30px;">Изготовление котлов наружного размещений БМАК 0,5 МВт с</p>
                <p>возможностью каскадного подключения.</p>
                <p style="padding-top: 30px;">Изготовления мобильных котельных установок мощностью до 500 кВт на</p>
                <p>базе автомобилей.</p>
            </div>
        </div>
        <div class="plan"></div>
        <div class="button-order">
            <button class="order">ЗАКАЗАТЬ</button>
        </div>
        <div class="repair-container">
            <div class="repair">
                <img src="\src\assets\images\pipes.png" alt="pipes img" class="pipes-img"/>
                <div class="overlay">
                    <div class="title">
                        <div class="title-container">
                            <h class="h">Ремонт и обслуживание</h>
                            <p style="padding-top: 30px;">В штате компании постоянно работает 5 сервисных бригад, готовых на</p>
                            <p>высоком уровне оказать работы по обслуживанию, пуско-наладке и</p>
                            <p>запуску котельного оборудования.</p>
                            <p style="padding-top: 30px;">Бригада будет у Вас на объекте в течении 24 часов.</p>
                        </div>
                    </div>
                    <div class="button-order">
                        <button class="order">ЗАКАЗАТЬ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
    font-family: 'Inter', sans-serif; /* Использует шрифт Inter */
    font-size: 30px; /* Устанавливает размер шрифта 30 пикселей */
    padding-bottom: 60px;
}

.h {
    font-family: 'Inter', sans-serif; /* Использует шрифт Inter */
    font-size: 36px; /* Устанавливает размер шрифта 40 пикселей */
    font-weight: 700; /* Устанавливает жирное начертание */
    padding-bottom: 30px;
}

.p1 {
    padding-bottom: 30px;
}

.prices {
    width: 100%; /* Устанавливает ширину на 100% от родительского контейнера */
    height: 852px; /* Высота остается 852 пикселя */
    background-color: black; /* Черный фон */
    display: flex; /* Использует flexbox для выравнивания кнопок */
    align-items: center; /* Центрирует кнопки по вертикали */
    justify-content: center; /* Центрирует кнопки по горизонтали */
    margin-bottom: 60px;
}

.button-container {
    display: flex; /* Использует flexbox для кнопок */
    flex-wrap: wrap; /* Позволяет кнопкам переноситься на новую строку */
    justify-content: center;
}

.transparent-button {
    background-color: rgba(255, 255, 255, 0.144); /* Полупрозрачный белый фон */
    border: none; /* Убирает рамку */
    color: white; /* Цвет текста */
    font-size: 20px; /* Размер шрифта */
    padding: 15px 30px; /* Отступы внутри кнопки */
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
    font-family: 'Inter', sans-serif; /* Использует шрифт Inter */
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
    position: relative;
}
.repair {
    width: 1280px;
    height: 662px;
}
.pipes-img {
    margin-left: 304px;
}
.overlay {
    position: absolute; /* Абсолютное позиционирование относительно родителя */
    top: 0; /* Сверху */
    left: 50%; /* По центру */
    transform: translateX(-50%); /* Центрируем по горизонтали */
    width: 1280px; /* Ширина блока */
    height: 662px; /* Высота блока */
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 35%, rgba(35, 35, 35, 0) 100%); /* Градиент с заданными остановками */
    z-index: 1; /* Убедитесь, что блок находится выше изображения */
}
.title {
    width: 1190px;
    height: 409px;
    color: white;
    background-color: rgba(255, 255, 255, 0.158); /* Полупрозрачный белый фон */
    border-radius: 8px;
    font-family: 'Inter', sans-serif; /* Использует шрифт Inter */
    font-size: 30px; /* Устанавливает размер шрифта 30 пикселей */
}
.title-container {
    padding: 40px;
}
</style>
