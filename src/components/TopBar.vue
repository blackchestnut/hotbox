<template>
  <div class="container">
    <div class="menu">
      <div class="contact-info">
        <div class="icon-phone" />
        <div class="icon-mobile-headphones"></div>
        <div class="contact-details">
          <div class="phone-number">+7 (977) 953 39 11</div>
          <div class="email">zakaz@tehtelecom.ru</div>
        </div>
      </div>
      <div class="logo" />
      <button class="call-button" @click="handleClick">ЗВОНОК ИНЖЕНЕРУ</button>
      <div class="icon-mobile-menu"></div>
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
  min-width: 800px;
  margin: 0 auto; 
}
.menu {
  padding: 0 72px;
  height: 116px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
}
.contact-info {
  display: flex;
  align-items: center;
}
.contact-details {
  display: flex;
  flex-direction: column;
}
.icon-phone {
  width: 54px;
  height: 54px;
  margin-right: 10px;
  background-image: url("@/components/icons/icon_phone.svg");
  background-size: cover;
}
.logo {
  width: 180px;
  height: 53px;
  background-image: url("@/assets/images/red_logos/hotbox.png");
  background-size: cover;
}
.icon-mobile-headphones,
.icon-mobile-menu {
  display: none;
}

@media (max-width: 430px) {
  .container {
    margin: 0 auto;
    max-width: 100%;
    min-width: auto;
  }
  .menu {
    padding: 0 16px;
    height: 62px;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 255, 255);
  }
  .contact-details,
  .icon-phone,
  .call-button {
    display: none;
  }
  .icon-mobile-headphones {
    display: block;
    background-image: url("@/assets/images/red_logos/call.svg");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
  }
  .logo {
    width: 102px;
    height: 30px;
    /* width: 6.375rem;
    height: 1.875rem; */
  }
  .icon-mobile-menu {
    display: block;
    background-image: url("@/assets/images/white_logos/menu.svg");
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
  }
}
</style>