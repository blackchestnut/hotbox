<template>
    <div class="map">
        <img src="@/assets/images/maps/map.png" alt="Map">
        <div class="overlay">
            <div class="sell-dept">
                <div class="name">Отдел продаж</div>
                +7 (977) 953 39 11
            </div>
            <div class="engineer-dept">
                <div class="name">Инженер</div>
                +7 (999) 822 11 45
            </div>
            <div class="adress-dept">
                <div class="name">Юриический адресс</div>
                г. Москва п. Краснопахарское, квартал 171
            </div>
        </div>
    </div>
</template>

<style scoped>
.name {
    font-size: 24px;
    font-weight: 600px;
    margin-bottom: 10px;
}
.sell-dept, .engineer-dept {
    font-size: 22px;
    margin-bottom: 30px;
}
.adress-dept {
    font-size: 22px;
}
.map {
position: relative; /* Устанавливаем относительное позиционирование для контейнера карты */
display: flex;
justify-content: center;
align-items: center;
overflow: hidden; /* Скрываем часть изображения, выходящую за пределы контейнера */
}

.map img {
width: 100%; /* Ширина изображения на 100% от контейнера */
height: auto; /* Сохраняем пропорции изображения */
}

.overlay {
position: absolute; 
top: 50%; 
left: 100px; 
transform: translateY(-50%); 
background-color: #fff;
display: flex;
border-radius: 20px;
flex-direction: column;
padding-left: 40px;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 40px;
}

.name {
font-family: 'Inter', sans-serif;
font-size: 20px;
font-weight: 600;
}
.text {
font-family: 'Inter', sans-serif;
font-size: 16px;
font-weight: 500;
}
</style>

