<script setup>
import { ref } from 'vue';
import Menu from '@/components/Menu.vue';

// Состояние модального окна
const isOrderModalVisible = ref(false);
const selectedOrder = ref(null);

// Счетчик
const count = ref(1);

// Функции для управления счетчиком
const increment = () => {
    count.value++;
};

const decrement = () => {
    if (count.value > 1) {
        count.value--;
    }
};

const showOrderModal = (order) => {
    selectedOrder.value = order;
    isOrderModalVisible.value = true;
};

const closeOrderModal = () => {
    isOrderModalVisible.value = false;
};
</script>

<template>
    <Menu />
    <div class="service-wrapper">
        <div class="service">
            <div class="head-one">
                <h1>Полный комплекс услуг по работе с котельными системами</h1>
                <p>Проектирование, изготовление поставка, подключение, запуск, поставка дизельного топлива,
                    мониторинг и сервисное обслуживание.</p>
            </div>
            <div class="head-two">
                <h2>Аренда</h2>
                <p>
                    Аренда автоматизированных блочно-модульных котельных установок (БМАК) для обогрева жилых и
                    промышленных помещений, складов, ангаров и т. п. на дизельном топливе.
                </p>
                <p>Также возможна аренда мобильной котельной установки мощностью 500 кВт на базе автомобиля Ford Transit</p>
            </div>
        </div>
        <div class="prices">
            <div class="button-container">
                <div class="transparent-button" @click="showOrderModal('Аренда БМАК 0,5 мВт 1К')">
                    <div class="title">БМАК 0,5 мВт 1К</div>
                    Наружное размещение<br>
                    Теплоснабжение и ГВС<br>
                    Дизельное топливо<br>
                    Мощность 500 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 150 000 руб. / месяц
                </div>
                <div class="transparent-button" @click="showOrderModal('Аренда БМАК 1,04 мВт 1К без ГВС')">
                    <div class="title">БМАК 1,04 мВт 1К без ГВС</div>
                    Есть бензогенератор<br>
                    Теплоснабжение<br>
                    Дизельное топливо<br>
                    Мощность 1040 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 250 000 руб. / месяц
                </div>
                <div class="transparent-button" @click="showOrderModal('Аренда БМАК 1,0 мВт 2К без ГВС')">
                    <div class="title">БМАК 1,0 мВт 2К без ГВС</div>
                    <div>
                        Есть бензогенератор<br>
                        Теплоснабжение<br>
                        Дизельное топливо<br>
                        Мощность 1000 кВт<br>
                        Доставка, демонтаж и вывоз котельной рассчитывается индивидуально
                    </div>
                    <div>
                        от 260 000 руб. / месяц
                    </div>
                </div>
                <div class="transparent-button" @click="showOrderModal('Аренда БМАК 3,0 мВт 1К без ГВС')">
                    <div class="title">БМАК 3,0 мВт 1К без ГВС</div>
                    Есть бензогенератор<br>
                    Теплоснабжение<br>
                    Дизельное топливо<br>
                    Мощность 3000 кВт<br>
                    Доставка, демонтаж и вывоз котельной рассчитывается индивидуально<br>
                    от 350 000 руб. / месяц
                </div>
            </div>
        </div>
        <div class="production">
            <div class="description">
                <h2>Проиводство</h2>
                <p>
                    Изготовление и поставка блочно-модульных автоматизированных
                    котельных установок (БМАК) в соответствии с техническими требованиями
                    заказчика необходимой мощности.
                </p>
                <p>
                    Изготовление котлов наружного размещений БМАК 0,5 МВт с
                    возможностью каскадного подключения.
                </p>
                <p>
                    Изготовления мобильных котельных установок мощностью до 500 кВт на
                    базе автомобилей.
                </p>
            </div>
        </div>
        <div class="plan"></div>
        <div class="button-order">
            <button class="order" @click="showOrderModal('Производство котельной на заказ')">ЗАКАЗАТЬ</button>
        </div>

        <div class="repair-container">
            <div class="repair-inner">
                <h2>Ремонт и обслуживание</h2>
                <p>
                    В штате компании постоянно работает 5 сервисных бригад, готовых на
                    высоком уровне оказать работы по обслуживанию, пуско-наладке и
                    запуску котельного оборудования.
                </p>
                <p>Бригада будет у Вас на объекте в течении 24 часов.</p>
            </div>
            <div class="button-order">
                <button class="order" style="margin-top: 46px;" @click="showOrderModal('Ремонт и обслуживание')">ЗАКАЗАТЬ</button>
            </div>
        </div>

        <!-- Модальное окно -->
        <div v-if="isOrderModalVisible" class="modal-overlay" @click="closeOrderModal">
            <div class="modal-content" @click.stop>
                <a class="close" @click="closeOrderModal"></a>

                <h3>Заявка на заказ</h3>
                <div class="subheader">Наш менеджер свяжется с вами в течение дня</div>
                <div class="line"></div>

                <div class="information-container">
                    <div class="modal-boiler-info">
                        <h4>{{ selectedOrder }}</h4>
                    </div>
                    <!-- Счетчик -->
                    <div class="counter">
                        <button class="circle" @click="decrement">&#8722;</button>
                        <div class="count">{{ count }}</div>
                        <button class="circle" @click="increment">&#43;</button>
                    </div>
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

<script>
export default {
    name: 'service',
};
</script>

<style scoped>
.service-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
}

.service {
    width: 1136px;
    font-size: 30px;
    padding-bottom: 60px;
}

h1, h2 {
    font-size: 40px;
    font-weight: 600;
    line-height: 50px;
    margin-bottom: 30px;
}

p {
    padding-bottom: 30px;
    font-size: 30px;
}

.prices {
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 36px;
    margin-bottom: 60px;
}

.button-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.title {
    font-size: 30px;
    line-height: 30px;
    font-weight: 600;
}

.transparent-button {
    display: grid;
    gap: 20px;
    background-color: rgba(255, 255, 255, 0.144);
    border: none;
    color: white;
    font-size: 20px;
    padding: 30px;
    margin: 30px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s;
    width: 538px;
    height: 330px;
    text-align: left;
    line-height: 36px;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 300;
}

.transparent-button:hover {
    background-color: rgba(255, 255, 255, 0.199);
}

.production {
    width: 1136px;
    height: 468px;
    font-size: 30px;
}

.plan {
    background-image: url("/src/assets/images/big_images_of_boilers/plan.png");
    height: 785px;
    width: 1136px;
}

.button-order {
    display: flex;
    justify-content: center;
}

.order {
    width: 120px;
    height: 54px;
}

.button-order {
    padding-bottom: 60px;
}

.repair-container {
    background-image: url("/src/assets/images/big_images_of_boilers/repair-background.png");
    background-size: cover;
    padding: 126px 40px 40px;
    color: #fff;
}

.repair-inner {
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.199);
    border-radius: 8px;
}

/* Стили для модального окна */
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
    max-height: 90vh;
    background-color: #fff;
    border-radius: 8px;
    padding: 50px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    overflow-y: auto;
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

.information-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 30px;
}

.modal-boiler-info {
    flex: 1;
}

.counter {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    height: 38px;
    border-radius: 50px;
    min-width: 116px;
    max-width: 116px;
}

.circle {
    width: 30px;
    height: 30px;
    background-color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.count {
    color: white;
    font-size: 20px;
    width: 40px;
    text-align: center;
    padding: 0 4px;
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