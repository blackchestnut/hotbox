<template>
    <div class="container">
        <div class="menu">
        <div class="contact-info">
            <img src="\src\components\icons\icon_phone.svg" alt="Phone Logo" class="logo-phone" />
            <div class="contact-details">
            <span class="phone-number">+7 (977) 953 39 11 </span>
            <span class="email">zakaz@tehtelecom.ru</span>
            </div>
        </div>
        <div class="logo-center">
            <img src="\src\assets\images\hotbox.png" alt="Center Logo" class="logo-center" />
        </div>
        <div class="button">
            <button @click="handleClick">ЗВОНОК ИНЖЕНЕРУ</button>
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        alert('Кнопка нажата!');
      }
    }
  }
  </script>

<style scoped>
.container {
  max-width: 1280px;
  min-width: 800px; /* Временно, пока не сделал мобильную версию. */
  margin: 0 auto; 
}
.menu {
  padding: 0 72px;
  height: 116px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255); /* Цвет фона */
}
.contact-info {
  display: flex;
  align-items: center; /* Элементы внутри контактной информации будут в колонку */
}
.contact-details {
  display: flex;
  flex-direction: column;
}

.logo-phone {
  width: 54px; /* Ширина логотипа телефона */
  height: 54px; /* Высота логотипа телефона */
  margin-right: 10px; /* Отступ справа */
}

.logo-center {
  width: 180px; /* Ширина центрального логотипа */
  height: auto; /* Автоматическая высота */
}

</style>