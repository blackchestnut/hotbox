<template>
    <div class="factory-wrapper">
        <div class="overlay">
            <div class="head-one">
                Автоматизированные<br>
                мобильные<br>
                котельные
            </div>
            <div class="head-two">
                Компактные передвижные станции теплоснабжения<br>
                с полным удаленным управлением
                <img src="\src\assets\images\red_logos\award.svg" alt="Award Logo" class="award-logo" />
            </div>
            <div class="button-container">
                <!-- Кнопки для десктопной версии -->
                <router-link to="/boiler-room">               
                    <button class="transparent-button"><img src="\src\assets\images\white_logos\factory-logo.svg" alt="Factory Logo" class="factory-logo" /><br>Котельные блочно-модульные</button>
                </router-link>

                <router-link to="/service">
                    <button class="transparent-button"><img src="\src\assets\images\white_logos\clock-logo.svg" alt="Clock Logo" class="clock-logo" /><br>Аренда</button>
                </router-link>

                <router-link to="/service">    
                    <button class="transparent-button"><img src="\src\assets\images\white_logos\hammer-logo.svg" alt="Hammer Logo" class="hammer-logo" /><br>Ремонт и обслуживание</button>
                </router-link>

                <router-link to="/car">
                    <button class="transparent-button">
                        <img src="\src\assets\images\white_logos\car-logo.svg" alt="Car Logo" class="car-logo" /><br>
                        Котельные мобильные<br>
                        автоматизированные
                    </button>
                </router-link>

                <router-link to="/service">
                    <button class="transparent-button"><img src="\src\assets\images\white_logos\hook-logo.svg" alt="Hook Logo" class="hook-logo" /><br>Производство</button>
                </router-link>

                <router-link to="/news">
                    <button class="transparent-button">
                        <img src="/src/assets/images/white_logos/news-logo.svg" alt="News Logo" class="news-logo" /><br>
                        Новости
                    </button>
                </router-link>

                <!-- Кнопки для мобильной версии -->
                <div class="mobile-buttons">
                    <router-link to="/boiler-room">
                        <button class="factory-button">
                            <img src="\src\assets\images\white_logos\factory-logo.svg" alt="Factory Logo" class="factory-logo" /><br>
                            Котельные
                        </button>
                    </router-link>
                    <router-link to="/service">
                        <button class="hook-button">
                            <img src="\src\assets\images\white_logos\hook-logo.svg" alt="Hook Logo" class="hook-logo" /><br>
                            Производство
                        </button>
                    </router-link>
                    <router-link to="/news">
                        <button class="news-button">
                            <img src="/src/assets/images/white_logos/news-logo.svg" alt="News Logo" class="news-logo" /><br>
                            Новости
                        </button>
                    </router-link>
                    <router-link to="/car">
                        <button class="car-button">
                            <img src="\src\assets\images\white_logos\car-logo.svg" alt="Car Logo" class="car-logo" /><br>
                            Мобильная котельная
                        </button>
                    </router-link>
                    <router-link to="/service">
                        <button class="clock-button">
                            <img src="\src\assets\images\white_logos\clock-logo.svg" alt="Clock Logo" class="clock-logo" /><br>
                            Аренда
                        </button>
                    </router-link>
                    <router-link to="/service">    
                        <button class="hammer-button">
                            <img src="\src\assets\images\white_logos\hammer-logo.svg" alt="Hammer Logo" class="hammer-logo" /><br>
                            Ремонт и обслуживание
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
    background-image: url("/src/assets/images/big_images_of_boilers/shadow-box.png");
    background-size: cover;
    color: #fff;
    padding-top: 100px;
    padding-bottom: 100px;
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

/* Скрываем кнопки для мобильной версии по умолчанию */
.mobile-buttons {
    display: none;
}

/* Мобильные стили (максимальная ширина 430px) */
@media (max-width: 430px) {
    .factory-wrapper {
        margin: 0 auto;
        max-width: 100%;
        min-width: auto;
    }

    .award-logo {
        display: none;
    }

    .overlay {
        background-image: url("/src/assets/images/big_images_of_boilers/shadow-box.png");
        background-size: cover;
        color: #fff;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: 30px;
    }

    .head-one {
        font-family: 'Inter', sans-serif;
        font-size: 22px;
        font-weight: 600;
    }

    .head-two {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
        margin-top: 36px;
        margin-bottom: 36px;
    }

    /* Скрываем кнопки для десктопной версии */
    .transparent-button {
        display: none;
    }

    /* Показываем кнопки для мобильной версии */
    .mobile-buttons {
        display: block;
    }


    .factory-button,
    .clock-button,
    .hammer-button,
    .car-button,
    .hook-button,
    .news-button {
        display: block; /* Показываем кнопки */
        padding: 6px;
        background-color: rgba(255, 255, 255, 0.158);
        border-radius: 8px;
        border: none;
        color: white;
        transition: background-color 0.3s;
        text-align: left;
        font-size: 14px;
        font-weight: 400; /* Нормальный вес шрифта */
        text-decoration: none; /* Убираем подчеркивание */
    }

    .factory-button:hover,
    .clock-button:hover,
    .hammer-button:hover,
    .car-button:hover,
    .hook-button:hover,
    .news-button:hover {
        background-color: rgba(255, 255, 255, 0.267); /* Увеличиваем непрозрачность при наведении */
    }

    .factory-button {
        width: 94px;
        height: 121px;
    }

    .hook-button {
        width: 118px;
        height: 60px;   
    }

    .news-button {
        width: 74px;
        height: 60px;
    }

    .clock-button {
        width: 92px;
        height: 60px;
    }

    .hammer-button {
        width: 196px;
        height: 54px;
    }

    .car-button {
        width: 196px;
        height: 54px;
    }

    .factory-logo,
    .clock-logo,
    .hammer-logo,
    .car-logo,
    .hook-logo,
    .news-logo {
        width: 16px;
        height: 16px;
    }

    /* Убираем подчеркивание у ссылок */
    .button-container a {
        text-decoration: none;
    }
}
</style>