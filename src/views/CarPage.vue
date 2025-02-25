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

</style>
