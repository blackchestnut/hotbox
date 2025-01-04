<template>
    <Menu/>
    <div class="service-wrapper">
        <div class="service">
            <div class="head-one">
                <h1 class="h">Полный комплекс услуг по работе с котельными системами</h1>
                <p class="p1">Проектирование, изготовление поставка, подключение, запуск, поставка дизельного топлива,
                    мониторинг и сервисное обслуживание.</p>
            </div>
            <div class="head-two">
                <h1 class="h">Аренда</h1>
                <p class="p1">Аренда автоматизированных блочно-модульных котельных установок (БМАК) для обогрева жилых и
                    промышленных помещений, складов, ангаров и т. п. на дизельном топливе.</p>
                <p>Также возможна аренда мобильной котельной установки мощностью 500 кВт на базе автомобиля Ford Transit</p>
            </div>
        </div>
        <div class="prices">
            <div class="button-container">
                <button class="transparent-button">Кнопка 1</button>
                <button class="transparent-button">Кнопка 2</button>
                <button class="transparent-button">Кнопка 3</button>
                <button class="transparent-button">Кнопка 4</button>
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
    font-size: 40px; /* Устанавливает размер шрифта 40 пикселей */
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
}

.button-container {
    display: flex; /* Использует flexbox для кнопок */
    flex-wrap: wrap; /* Позволяет кнопкам переноситься на новую строку */
    width: 80%; /* Устанавливает ширину контейнера кнопок */
    max-width: 600px; /* Устанавливает максимальную ширину контейнера кнопок */
}

.transparent-button {
    background-color: rgba(255, 255, 255, 0.5); /* Полупрозрачный белый фон */
    border: none; /* Убирает рамку */
    color: black; /* Цвет текста */
    font-size: 20px; /* Размер шрифта */
    padding: 15px 30px; /* Отступы внутри кнопки */
    margin: 10px; /* Отступы между кнопками */
    cursor: pointer; /* Указывает, что кнопка кликабельна */
    border-radius: 5px; /* Закругленные углы */
    transition: background-color 0.3s; /* Плавный переход цвета фона */
}

.transparent-button:hover {
    background-color: rgba(255, 255, 255, 0.7); /* Изменение цвета при наведении */
}
</style>
