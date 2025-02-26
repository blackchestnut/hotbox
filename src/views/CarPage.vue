<script setup>
import { ref } from 'vue';
import Menu from '@/components/Menu.vue';
import { car } from '@/data';
import CarOrder from '@/views/CarOrder.vue';

const currentImageIndex = ref(0);
const selectedCar = ref('');
const selectedImage = ref('');
const isOrderModalVisible = ref(false);
const images = car[0].images;

const showOrderModal = () => {
    console.log('Opening modal...'); // Отладка
    selectedCar.value = car[0].name;
    selectedImage.value = images[currentImageIndex.value];
    isOrderModalVisible.value = true;
    console.log('isOrderModalVisible:', isOrderModalVisible.value); // Отладка
};

const closeOrderModal = () => {
    isOrderModalVisible.value = false;
};
</script>

<template>
    <Menu/>
    <div class="page-container">
        <div class="title">
            <h1 style="font-size: 40px;">Мобильная котельная установка на базе фургона Ford Transit</h1>
            <p>Мобильность автомобиля позволяет оперативно приехать и подать тепло на объекты с высоким уровнем стесненности.</p>
            <p>В производстве применяются только проверенные и надежные комплектующие для безотказной работы при аварийных ситуациях на объектах, требующих срочной подачи тепла.</p>
        </div>
        
        <!-- Сетка для трех блоков -->
        <div class="row">
            <div class="block">
                <img src="\src\assets\images\car\car1.png" alt="Car1" class="car1">
                <div class="Nameline">
                    <div class="subtitle"><img src="\src\assets\images\white_logos\power-logo.svg" alt="Power Logo" class="power-logo" />Мощность</div>
                    <div class="description">Мощность котельной установки может варьироваться от 50 до 500 кВт,
                        в зависимости от нужд заказчика.</div>
                </div>
            </div>
            <div class="block">
                <img src="\src\assets\images\car\car2.png" alt="Car2" class="car2">
                <div class="Nameline">
                    <div class="subtitle"><img src="\src\assets\images\white_logos\curcle-logo.svg" alt="Curcle Logo" class="-logo" />Область применения</div>
                    <div class="description">Мобильная котельная на базе Ford Transit может применяться в МЧС для подачи тепла, в службе ЖКХ, в
                        Вооруженных силах для отопления ангаров, казарм и т.п.</div>
                </div>
            </div>
            <div class="block">
                <img src="\src\assets\images\car\car3.png" alt="Car3" class="car3">
                <div class="Nameline">
                    <div class="subtitle"><img src="\src\assets\images\white_logos\arrow-logo.svg" alt="Arrow Logo" class="arrow-logo" />Варианты реализации</div>
                    <div class="description">Возможна реализация проекта на другом транспорте
                        (повышенной проходимости и большей мощности).</div>
                </div>
            </div> 
        </div>
        <div class="button-container">
            <button class="buy" @click.prevent="showOrderModal">ЗАКАЗАТЬ</button>
        </div>


        

        <!--------------------------------------------------------------------------------->
        <div v-if="isOrderModalVisible" class="modal-overlay" @click="closeOrderModal">
            <div class="modal-content" @click.stop>
                <a class="close" @click="closeOrderModal"></a>
 
                <h3>Заявка на заказ</h3>
                <div class="subheader">Наш менеджер свяжется с вами в течение дня</div>
                <div class="line"></div>

                  <div class="information-container">
                    <CarOrder 
                        :selectedCar="selectedCar" 
                        :selectedImage="selectedImage" 
                    />
                </div>
    
                <div class="form-container">
                    <input id="crm_lead_client" name="crm_lead[client]" placeholder="Ваше имя" type="text">
                    <input id="crm_lead_phone" name="crm_lead[email]" placeholder="E-mail" type="email">
                    <input id="crm_lead_phone" name="crm_lead[phone]" placeholder="Телефон" type="tel">
                    <button class="black" type="submit">Отправить</button>
                    <div class="politics">
                        Нажимая на кнопку вы соглашаетесь с условиями
                        <a href="#todo">политики конфиденциальности</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.title {
    width: 1127px;
    margin: auto;
    font-family: 'Inter', sans-serif; 
    font-size: 30px; 
}

.row {
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
}

.block {
    background-color: #000000; 
    margin: 10px;
    height: 646px; 
    width: 357px; 
    text-align: center;
    color: white;
    border-radius: 8px;
    text-align: left;
    font-family: 'Inter', sans-serif; 
    font-size: 20px; 
}
.Nameline {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subtitle {
    font-size: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}
.description {
    font-size: 20px;
    line-height: 30px;
}
.power-logo, .-logo, .arrow-logo {
    height: 30px;
    margin-right: 10px; 
}

.button-container {
    display: flex; 
    justify-content: center; 
    margin-top: 20px; 
}
.buy {
    width: 120px;
    height: 54px;
    margin-bottom: 30px;
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2; 
}

.modal-content {
    max-width: 800px;
    max-height: 90vh; /* Установите максимальную высоту в 90% от высоты окна */
    background-color: #fff; 
    border-radius: 8px;
    padding: 50px; /* Уменьшите отступы для лучшей адаптивности */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    overflow-y: auto; /* Позволяет прокручивать содержимое, если оно превышает высоту */
}
@media only screen and (max-width: 600px) {
    .modal-content {
        padding: 30px;
    }
}

.close {
    width: 32px;
    height: 32px;
    cursor: pointer;
    float: right;
    background-image: url("@/assets/images/black_logos/close.svg");
    background-size: contain;
}

.subheader {
    font-size: 16px;
}
.line {
    border-top: 1px solid #B0B0B0;
    width: 100%;
    margin: 30px 0;
}

@media only screen and (max-width: 600px) {
    .boiler-image {
        display: none;
    }
}

.information-container {
    display: flex;
    gap: 38px;
    justify-content: space-between;
    align-items: center; /* Выравнивание по центру по вертикали */
    padding-bottom: 30px;
}

@media only screen and (max-width: 600px) {
    .information-container {
        flex-direction: column;
    }
}

.modal-boiler-info {
    line-height: 24px;
    font-size: 18px;
}

@media only screen and (max-width: 800px) {
    .modal-boiler-info {
        width: 100%;
    }
}



.form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@media only screen and (max-width: 600px) {
    .form-container {
        align-items: center;
        text-align: center;
    }
}

input {
    background-color: #EAEAEA;
    border: none;
    padding: 18px 22px;
    box-sizing: border-box;
    font-size: 18px;
    border-radius: 8px;
    line-height: 20px;
    width: 100%;
}

input:focus {
    outline: none;
}
input::placeholder {
    color: #8D8D8D;
}
.politics {
    font-size: 14px;
}
.politics a {
    color: #000;
}
</style>
