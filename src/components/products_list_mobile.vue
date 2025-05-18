<template>
  <div class="items-mobile">
    <div class="item-pair" v-for="(pair, index) in productsPairs" :key="index">
      <template v-for="(item, itemIndex) in pair" :key="itemIndex">
        <router-link
          class="item"
          :to="{ name: 'boiler', params: { id: item.path } }"
        >
          <div class="item-content">
            <img :src="item.imgSrc" class="item-img" :alt="item.type" />
            <div class="type">{{ item.type }}</div>
            <div class="description">{{ item.mobileDescription }}<br /></div>
          </div>
          <div class="details-button">ПОДРОБНЕЕ</div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const productsPairs = computed(() => {
  const pairs = [];
  for (let i = 0; i < props.products.length; i += 2) {
    const pair = props.products.slice(i, i + 2);
    pairs.push(pair);
  }
  return pairs;
});
</script>

<style scoped>
@media (max-width: 1024px) {
  .items-mobile {
    display: flex;
    flex-direction: column;
  }
  .item-pair {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 20px;
  }
  .item {
    width: 100%;
    height: auto;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-bottom: none;
    border-radius: 8px;
    background-color: #ebebeb;
    text-decoration: none;
  }
  .item-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item-img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
    margin: 0px;
    object-fit: cover;
  }
  .type {
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    padding: 10px;
    color: black;
    text-decoration: none;
  }
  .description {
    font-size: 14px;
    color: #555555;
    line-height: 18px;
    padding: 0px 10px 10px 10px;
    text-align: left;
  }
  .details-button {
    display: block;
    height: 34px;
    background-color: #fff;
    color: #3b3b3b;
    border-color: #3b3b3b;
    border-radius: 8px;
    border: 2px solid #3b3b3b;
    transition: background-color 0.3s ease;
    font-size: 14px;
    font-weight: 600;
    margin-top: auto;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    line-height: 34px;
    text-align: center;
  }
  .details-button:active {
    border-color: #696770;
    color: #696770;
  }
}
</style>
