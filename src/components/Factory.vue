
<template>
    <div class="factory-wrapper">
        <div class="factory">
            <div class="overlay">
                    <div class="head-one">
                        Автоматизированные<br>
                        мобильные<br>
                        котельные
                    </div>
                    <div class="head-two">
                        <p>Компактные передвижные станции теплоснабжения<br>
                        с полным удаленным управлением</p>
                        <img src="\src\assets\images\award.svg" alt="Award Logo" class="award-logo" />
                    </div>
                <div class="button-container">
                        <router-link to="/boiler-room">               
                            <button class="transparent-button"><img src="\src\assets\images\factory-logo.svg" alt="Factory Logo" class="factory-logo" /><br><p>Котельные блочно-модульные</p></button>
                        </router-link>

                        <router-link to="/service">
                            <button class="transparent-button"><img src="\src\assets\images\clock-logo.svg" alt="Clock Logo" class="clock-logo" /><br><p>Аренда</p></button>
                        </router-link>

                        <router-link to="/service">    
                            <button class="transparent-button"><img src="\src\assets\images\hammer-logo.svg" alt="Hammer Logo" class="hammer-logo" /><br><p>Ремонт и обслуживание</p></button>
                        </router-link>
                     
                        <router-link to="/car">
                            <button class="transparent-button">
                                <img src="\src\assets\images\car-logo.svg" alt="Car Logo" class="car-logo" /><br>
                                <p>Котельные мобильные<br>
                                    автоматизированные</p>
                            </button>
                        </router-link>

                        <router-link to="/service">
                            <button class="transparent-button"><img src="\src\assets\images\hook-logo.svg" alt="Hook Logo" class="hook-logo" /><br><p>Производство</p></button>
                        </router-link>

                        <router-link to="/news">
                            <button class="transparent-button">
                                <img src="/src/assets/images/news-logo.svg" alt="News Logo" class="news-logo" /><br>
                                <p>Новости</p>
                            </button>
                        </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.award-logo {
margin-left: 780px;
margin-top: -180px; 
}
.overlay {
background-image: url("/src/assets/images/shadow-box.png");
background-size: cover;
color: #fff;
padding-top: 100px;
padding-bottom: 100px;
padding-left: 300px;
padding-left: 300px;
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