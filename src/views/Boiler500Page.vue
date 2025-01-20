<script setup>
import { ref } from 'vue';
import Menu from '@/components/Menu.vue';

const images = [
    'src/assets/images/card500.png',
    'src/assets/images/card500_1.png',
]; 
const currentImageIndex = ref(0);

const nextImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

const prevImage = () => {
    currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
};

</script>

<script>
export default {
    data() {
        return {
            selectedFuel: null, 
            selectedGVS: null, 
        };
    },
    methods: {
        toggleFuel(fuel) {
            // Если выбрано то же топливо, сбрасываем выбор
            this.selectedFuel = (this.selectedFuel === fuel) ? null : fuel;
        },
        toggleGVS(gvs) {
            // Если выбрано то же подключение, сбрасываем выбор
            this.selectedGVS = (this.selectedGVS === gvs) ? null : gvs;
        },
        isActiveFuel(fuel) {
            return this.selectedFuel === fuel; // Проверяем, совпадает ли текущее значение
        },
        isActiveGVS(gvs) {
            return this.selectedGVS === gvs; // Проверяем, совпадает ли текущее значение
        }
    }
};
</script>

<template>
    <Menu />
    <div class="page-container">
        <RouterLink to="/boiler-room">
            <div class="back">
                <div class="back-logo"></div>
            </div>
        </RouterLink>
        <div class="wrapper">
            <div class="boiler-card" :style="{ backgroundImage: 'url(' + images[currentImageIndex] + ')' }">
                <button class="arrow-button left" @click="prevImage">🡨</button>
                <button class="arrow-button right" @click="nextImage">🡪</button>
            </div>

            <div class="characteristic">
                <h1>ПАКУ 500 кВт 1К (Н/Р)</h1>
                <p>Wiesberg Steel</p>
                <p class="t">Вид топлива</p>
                
                <div class="fuel-container">
                    <button 
                        class="fuel" 
                        :class="{ active: isActiveFuel('Газ') }" 
                        @click="toggleFuel('Газ')">
                        Газ
                    </button>
                    <button 
                        class="fuel" 
                        :class="{ active: isActiveFuel('Дизель') }" 
                        @click="toggleFuel('Дизель')">
                        Дизель
                    </button>
                </div>

                <p class="t">Подключение ГВС</p>
                
                <div class="gvs-container">
                    <button 
                        class="gvs" 
                        :class="{ active: isActiveGVS('С подключением') }" 
                        @click="toggleGVS('С подключением')">
                        С подключением
                    </button>
                    <button 
                        class="gvs" 
                        :class="{ active: isActiveGVS('Без подключения') }" 
                        @click="toggleGVS('Без подключения')">
                        Без подключения
                    </button>
                </div>
                <p class="t" style="font-weight: bold;">Цена предоставляется по запросу</p>
                
                <div class="button-container">
                    <button class="buy">ЗАКАЗАТЬ</button>
                </div>
                <p class="t">ПАКУ имеет наружное размещение. Есть возможность<br>
                каскадного подключения. Может быть оснащена ГВС.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.back {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid #696770; 
    position: relative;
    margin-bottom: 60px; 
}

.back-logo {
    background-image: url('@/assets/images/back2.svg');
    background-repeat: no-repeat; 
    width: 100%; 
    height: 100%; 
    background-size: contain; 
}

.back:hover {
    border: 2px solid #555555;
}

.back-logo:hover {
    background-image: url('@/assets/images/back3.svg');
}

.back:active {
    border: 2px solid #555555;
    background-color: #E8E8E8;
}

.back-logo:active {
    background-image: url('@/assets/images/back3.svg');
}

.boiler-card {
    width: 510px;
    height: 510px;
    position: relative;
    background-size: cover;
}

.arrow-button {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(150, 150, 150, 0);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #000;
    transition: all 0.5s ease;
    font-size: 22px;
}

.arrow-button.left {
    left: 10px;
}

.arrow-button.right {
    right: 10px;
}

.arrow-button:hover {
    background-color: #000;
    color:#fff;
}
.wrapper {
    display: flex;
}
.characteristic {
    margin-left: 68px;
}
.t {
    font-size: 20px;
}

.fuel-container, .gvs-container {
  display: flex;
  gap: 10px;
  padding-bottom: 30px;
}

.fuel, .gvs {
  border-radius: 8px;
  color: #868686; 
  background-color: #fff;
  border: 2px solid #868686;
  width: 76px;
  height: 40px;
}

.gvs {
  width: 160px;
}

.active {
  border: 2px solid #000; 
  color: #000; 
  background-color: #fff; 
}

.buy {
    width: 120px;
    height: 54px;
}
.button-container {
    padding-bottom: 30px;
}
</style>
