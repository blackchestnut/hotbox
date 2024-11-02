<template>
    <div class="factory-wrapper">
        <div class="factory">
            <img src="\src\assets\images\котельня1.png" alt="factory img" class="factory-img"/>
            <div class="overlay">

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
</style>