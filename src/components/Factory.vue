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
                        <img src="\src\assets\images\award.svg" alt="Award Logo" class="award-logo" />
                    </div>

                </div>

                <div class="button-container">
                        <button class="transparent-button"><img src="\src\assets\images\factory-logo.svg" alt="Factory Logo" class="factory-logo" /><br><p>Котельные блочно-модульные</p></button>
                        <button class="transparent-button"><img src="\src\assets\images\clock-logo.svg" alt="Clock Logo" class="clock-logo" /><br><p>Аренда</p></button>
                        <button class="transparent-button"><img src="\src\assets\images\hammer-logo.svg" alt="Hammer Logo" class="hammer-logo" /><br><p>Ремонт и обслуживание</p></button>
                        <button class="transparent-button"><img src="\src\assets\images\car-logo.svg" alt="Car Logo" class="car-logo" /><br><p>Котельные мобильные</p> <p>автоматизированные</p></button>
                        <button class="transparent-button"><img src="\src\assets\images\hook-logo.svg" alt="Hook Logo" class="hook-logo" /><br><p>Производство</p></button>
                        <button class="transparent-button"><img src="\src\assets\images\news-logo.svg" alt="News Logo" class="news-logo" /><br><p>Новости</p></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.award-logo {
margin-left: 610px;
margin-top: -140px;
  
}
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
padding: 24px;
width: 368px;
height: 204px;
background-color: rgba(255, 255, 255, 0.158); /* Полупрозрачный белый фон */
color: white; /* Цвет текста */
border: none; /* Убираем рамку */
border-radius: 8px; /* Закругленные углы */
cursor: pointer; /* Указатель при наведении */
font-family: 'Inter', sans-serif;
font-size: 28px;
font-weight: 500;
transition: background-color 0.3s; /* Плавный переход цвета фона */
text-align: left;
}

/* Эффект при наведении на кнопку */
.transparent-button:hover {
background-color: rgba(255, 255, 255, 0.267); /* Увеличиваем непрозрачность при наведении */
}
</style>