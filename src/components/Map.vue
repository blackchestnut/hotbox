<template>
    <div class="map">
        <img src="@/assets/images/map.png" alt="Map">
        <div class="overlay">
            <div class="sell-dept">
                <h1 class="name">Отдел продаж</h1>
                <p class="text">+7 (977) 953 39 11</p>
            </div>
            <div class="engineer-dept">
                <h1 class="name">Инженер</h1>
                <p class="text">+7 (999) 822 11 45</p>
            </div>
            <div class="adress-dept">
                <h1 class="name">Юриический адресс</h1>
                <p class="text">г. Москва п. Краснопахарское, квартал 171</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
width: 569px; 

background-color: #fff;
display: flex;
border-radius: 20px;
flex-direction: column;
padding-left: 40px;
padding-top: 20px;
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

