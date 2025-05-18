<template>
  <div class="items">
    <router-link
      v-for="(item, index) in products"
      :key="index"
      class="item"
      :to="{ name: 'boiler', params: { id: item.path } }"
    >
      <div class="item-content">
        <img :src="item.imgSrc" class="item-img" :alt="item.type" />
        <div class="text-container">
          <div class="type">{{ item.type }}</div>
          <div class="description">
            <span class="g">Назначение:</span> {{ item.purpose }}<br />
            <span class="g">Тип:</span> {{ item.typeDescription }}<br />
            <span class="g">Дата изготовления:</span> {{ item.manufactureDate
            }}<br />
            <span class="g">Котел:</span> {{ item.boiler }}<br />
            <span class="g">Количество котлов:</span> {{ item.boilerCount
            }}<br />
            <span class="g">Мощность:</span> {{ item.power }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  products: {
    required: true,
  },
});
</script>
<style scoped>
.items {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  flex-grow: 1;
}

.item {
  background-color: #fff;
  margin-bottom: 30px;
  display: flex;
  border-bottom: 1px solid #bebebe;
}
.items a {
  text-decoration: none;
  color: #000000;
}
.item-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.item-img {
  margin-right: 22px;
  margin-bottom: 30px;
  width: 240px;
  height: 240px;
}
.text-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.type {
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 27px;
  padding-top: 7px;
  font-size: 18px;
  font-weight: 600;
}

.description {
  line-height: 26px;
  font-size: 16px;
}
</style>
