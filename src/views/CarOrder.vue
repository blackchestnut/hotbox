<script setup>
import { ref } from "vue";
const props = defineProps(["selectedCar", "selectedImage"]);
const count = ref(1);

const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value > 1) {
    count.value--;
  }
};
</script>

<template>
  <div
    class="car-image"
    :style="{ backgroundImage: 'url(' + selectedImage + ')' }"
  ></div>
  <div class="modal-car-info">
    <h4>{{ selectedCar }}</h4>
  </div>
  <div class="counter">
    <button class="circle" @click="decrement">&#8722;</button>
    <div class="count">{{ count }}</div>
    <button class="circle" @click="increment">&#43;</button>
  </div>
</template>
<style scoped>
.car-image {
  height: 180px;
  width: 180px;
  min-width: 180px;
  border-radius: 8px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  background-position: center;
  background-size: cover;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 38px;
  border-radius: 50px;
  min-width: 116px;
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
}

.count {
  color: white;
  font-size: 20px;
  width: 40px;
  text-align: center;
  padding: 0 4px;
}
</style>
