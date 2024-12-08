<template>
    <div class="topbar">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="{ active: selectedButton === index }"
        @click="selectButton(index)"
      >
        {{ button }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttons: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3', 'Кнопка 4', 'Кнопка 5', 'Кнопка 6'],
        selectedButton: null,
      };
    },
    methods: {
      selectButton(index) {
        this.selectedButton = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .topbar {
    display: flex;
    justify-content: space-around;
    background-color: #f0f0f0;
    padding: 10px 0;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: color 0.3s;
  }
  
  button.active {
    color: red; /* Красный цвет текста для выбранной кнопки */
  }
  </style>
  