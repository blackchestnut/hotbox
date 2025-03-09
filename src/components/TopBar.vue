<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Импортируем useRouter для навигации

const router = useRouter(); // Получаем объект router

// Состояние для модального окна
const isModalOpen = ref(false);

// Состояние для активной ссылки
const activeLink = ref(null);

// Список ссылок
const links = ref([
  { text: 'ГЛАВНАЯ', path: '/' },
  { text: 'КОТЕЛЬНЫЕ', path: '/boiler-room' },
  { text: 'УСЛУГИ', path: '/service' },
  { text: 'МОБИЛЬНЫЕ КОТЕЛЬНЫЕ', path: '/car' },
  { text: 'НОВОСТИ', path: '/news' },
  { text: 'О НАС', path: '/us' },
]);

// Открытие модального окна
const openModal = () => {
  isModalOpen.value = true;
};

// Закрытие модального окна
const closeModal = () => {
  isModalOpen.value = false;
};

// Установка активной ссылки и переход
const setActiveLink = (index) => {
  activeLink.value = index;
  const path = links.value[index].path; // Получаем путь из списка ссылок
  router.push(path); // Выполняем переход по пути
  closeModal(); // Закрываем модальное окно после выбора
};
</script>

<template>
  <div class="container">
    <div class="menu">
      <div class="contact-info">
        <div class="icon-phone" />
        <div class="icon-mobile-headphones" @click="openModal"></div>
        <div class="contact-details">
          <div class="phone-number">+7 (977) 953 39 11</div>
          <div class="email">zakaz@tehtelecom.ru</div>
        </div>
      </div>
      <div class="logo" />
      <button class="call-button" @click="handleClick">ЗВОНОК ИНЖЕНЕРУ</button>
      <div class="icon-mobile-menu"></div>
    </div>

    <!-- Модальное окно -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <a class="close" @click="closeModal"></a> <!-- Ваш крестик -->
        </div>
        <div class="modal-links">
          <a
            v-for="(link, index) in links"
            :key="index"
            :class="['modal-link', { active: activeLink === index }]"
            @click="setActiveLink(index)"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

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

.call-button {
  display: block;
}

/* Модальное окно */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Прилипание к верхней части */
  z-index: 1000;
}

.modal-content {
  background-color: white;
  width: 430px; /* Ширина модального окна */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
}

.modal-header {
  display: flex;
  justify-content: flex-end; /* Крестик справа */
  align-items: center;
  margin: 20px;
}

.close {
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-image: url("@/assets/images/black_logos/close.svg");
  background-size: contain;
}

.modal-links {
  display: flex;
  flex-direction: column;
}

.modal-link {
  padding: 20px;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  border-left: 3px solid transparent;
  transition: all 0.3s ease;
  text-align: left;
}

.modal-link.active {
  border-left: 3px solid red; /* Красная полоска для активной ссылки */
  color: #000;
  font-weight: 600;
}

.modal-link:hover {
  background-color: #f5f5f5;
}

/* Мобильная версия */
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
    cursor: pointer;
  }

  .logo {
    width: 102px;
    height: 30px;
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