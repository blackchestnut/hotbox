<template>
    <Menu/>
    <div class="car-wrapper">
        <h1>Мобильная котельная установка на базе фургона Ford Transit</h1>
        <p>Мобильность автомобиля позволяет оперативно приехать и подать тепло на объекты с высоким уровнем стесненности.</p>
        <p>В производстве применяются только проверенные и надежные комплектующие для безотказной работы при аварийных ситуациях на объектах, требующих срочной подачи тепла.</p>
        
        <!-- Сетка для трех блоков -->
        <div class="row reverse-row">
            <div class="col-md-4">
                <div class="block">
                    <h3>Блок 1</h3>
                    <p>Описание блока 1.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="block">
                    <h3>Блок 2</h3>
                    <p>Описание блока 2.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="block">
                    <h3>Блок 3</h3>
                    <p>Описание блока 3.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarPage',
};
</script>

<style scoped>
.car-wrapper {
    width: 1280px;
    margin: auto;
}

.reverse-row {
    display: flex; /* Используем Flexbox */
    flex-direction: row-reverse; /* Располагаем элементы справа налево */
    justify-content: center; /* Центрируем по горизонтали */
}

.block {
    background-color: #000000; /* Цвет фона блока */
    padding: 20px; /* Отступ внутри блока */
    margin: 10px; /* Отступ между блоками */
    height: 646px; /* Фиксированная высота для прямоугольной формы */
    width: 357px;
    text-align: center; /* Центрируем текст */
    color: white;
    border-radius: 8px;
}
</style>

