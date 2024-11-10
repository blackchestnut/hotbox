<template>
    <div class="factory-wrapper">
        <div class="factory">
            <img src="\src\assets\images\котельня1.png" alt="factory img" class="factory-img"/>
            <div class="overlay">
                <div class="title">
                    <div class="head-one">
                        <p>Автоматизированные</p>
                        <p>мобильные</p>
                        <p>котельные</p>
                    </div>
                    <div class="head-two">
                        <p>Компактные передвижные станции теплоснабжения</p>
                        <p>с полным удаленным управлением</p>
                    </div>
                </div>
                <div class="button-container">
                        <button class="transparent-button">Кнопка 1</button>
                        <button class="transparent-button">Кнопка 2</button>
                        <button class="transparent-button">Кнопка 3</button>
                        <button class="transparent-button">Кнопка 4</button>
                        <button class="transparent-button">Кнопка 5</button>
                        <button class="transparent-button">Кнопка 6</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.factory-wrapper {
display: flex;
height: 957px;
align-items: center;
justify-content: center;
position: relative;
}
.factory-img {
height: 957px;
margin-left: 226px;
}
.factory {
position: relative;
}
.overlay {
position: absolute; /* Абсолютное позиционирование относительно родителя */
top: 0; /* Сверху */
left: 50%; /* По центру */
transform: translateX(-50%); /* Центрируем по горизонтали */
width: 1280px; /* Ширина блока */
height: 957px; /* Высота блока */
background: linear-gradient(to right, rgba(0, 0, 0, 1) 35%, rgba(35, 35, 35, 0) 100%); /* Градиент с заданными остановками */
z-index: 1; /* Убедитесь, что блок находится выше изображения */
}
.title {
padding: 96px 70px;
width: 673px;
height: 308px;
color: white;
}
.head-one {
font-family: 'Inter', sans-serif;
font-size: 60px;
font-weight: 600;
}
.head-two {
font-family: 'Inter', sans-serif;
font-size: 24px;
font-weight: 500;
margin-top: 30px;
}
/* Стили для контейнера кнопок */
.button-container {
display: flex;
flex-wrap: wrap; /* Позволяет кнопкам переходить на новую строку */
gap: 16px; /* Промежуток между кнопками */
width: 1136px;
height: 424px;
margin: 0 auto;
}

/* Стили для полупрозрачных кнопок */
.transparent-button {
width: 368px;
height: 204px;
background-color: rgba(255, 255, 255, 0.158); /* Полупрозрачный белый фон */
color: white; /* Цвет текста */
border: none; /* Убираем рамку */
border-radius: 8px; /* Закругленные углы */
cursor: pointer; /* Указатель при наведении */
font-family: 'Inter', sans-serif; /* Шрифт для кнопок */
font-size: 16px; /* Размер шрифта для кнопок */
transition: background-color 0.3s; /* Плавный переход цвета фона */
}

/* Эффект при наведении на кнопку */
.transparent-button:hover {
background-color: rgba(255, 255, 255, 0.267); /* Увеличиваем непрозрачность при наведении */
}
</style>