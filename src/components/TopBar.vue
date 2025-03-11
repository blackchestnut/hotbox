<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Импортируем useRouter для навигации

const router = useRouter(); // Получаем объект router

// Состояние для модального окна
const isModalOpen = ref(false);
const isMobileMenuOpen = ref(false); // Состояние для мобильного меню
const isEmailModalOpen = ref(false); // Состояние для модального окна с формой

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

// Открытие мобильного меню
const openMobileMenu = () => {
  isMobileMenuOpen.value = true;
};

// Закрытие мобильного меню
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Открытие модального окна с формой
const openEmailModal = () => {
  isEmailModalOpen.value = true;
  closeMobileMenu(); // Закрываем мобильное меню
};

// Закрытие модального окна с формой
const closeEmailModal = () => {
  isEmailModalOpen.value = false;
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
      <div class="icon-mobile-menu" @click="openMobileMenu"></div>
    </div>

    <!-- Модальное окно для меню -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <a class="close" @click="closeModal"></a>
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

    <!-- Мобильное меню -->
    <div v-if="isMobileMenuOpen" class="modal-overlay" @click="closeMobileMenu">
      <div class="modal-content mobile-menu" @click.stop>
        <div class="modal-header">
          <a class="close" @click="closeMobileMenu"></a>
        </div>
        <div class="mobile-menu-buttons">
          <button class="mobile-menu-button">
            <span class="call-ingener"></span>
            <span class="button-text">Звонок инженеру</span>
          </button>
          <button class="mobile-menu-button">
            <span class="call-manager"></span>
            <span class="button-text">Звонок менеджеру</span>
          </button>
          <button class="mobile-menu-button" @click="openEmailModal">
            <span class="email"></span>
            <span class="button-text">Написать на почту</span>
          </button>
          <button class="mobile-menu-button">
            <span class="telegram"></span>
            <span class="button-text">Telegram</span>
          </button>
          <button class="mobile-menu-button">
            <span class="whatsapp"></span>
            <span class="button-text">WhatsApp</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Модальное окно с формой -->
    <div v-if="isEmailModalOpen" class="modal-overlay" @click="closeEmailModal">
      <div class="modal-content email-modal" @click.stop>
        <div class="modal-header">
          <a class="close" @click="closeEmailModal"></a>
        </div>
        <div class="email-modal-content">
          <h2>Написать на почту</h2>
          <p>Наш менеджер свяжется с вами в течение дня</p>
         
            <div class="form-group">
              <input placeholder="Ваше имя" type="text" id="name" required />
            </div>
            <div class="form-group">
              <input placeholder="E-mail" type="email" id="email" required />
            </div>
            <div class="form-group">
              <textarea placeholder="Сообщение" id="message" rows="10" required></textarea>
            </div>
            <div class="submit-container">
              <button type="submit" class="submit-button">Отправить</button>
            </div>
      
          <p class="privacy-policy">
            Нажимая на кнопку, вы соглашаетесь с условиями
            <a href="#" class="privacy-link">политики конфиденциальности</a>.
          </p>
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
  width: 24px;
  height: 24px;
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

/* Мобильное меню */
.mobile-menu {
  padding-bottom: 30px;
}

.mobile-menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-menu-button {
  width: 300px;
  height: 42px;
  background-color: #f3f3f3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 20px;
  text-align: left;
  color: #000; /* Черный цвет текста */
  transition: background-color 0.3s ease;
  margin: 0 auto;
}

.button-text {
  margin-left: 12px;
  font-size: 16px;
  font-weight: 500;
}

.mobile-menu-button:hover {
  background-color: #e0e0e0;
}

.call-ingener {
  background-image: url("@/assets/images/black_logos/call-ingener.svg");
}

.call-manager {
  background-image: url("@/assets/images/black_logos/call-manager.svg");
}

.email {
  background-image: url("@/assets/images/black_logos/email.svg");
}

.telegram {
  background-image: url("@/assets/images/black_logos/telegram.svg");
}

.whatsapp {
  background-image: url("@/assets/images/black_logos/whatsapp.svg");
}

.call-ingener,
.call-manager,
.email,
.telegram,
.whatsapp {
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Модальное окно почты */
.email-modal-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.email-modal-content h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
}

.email-modal-content p {
  font-size: 16px;
  text-align: center;
  padding-bottom: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form-group input,
.form-group textarea {
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  background-color: #EAEAEA;
  color: #3F3F3F;
  outline: none;
}
.form-group input,
.form-group textarea {
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  background-color: #EAEAEA;
  color: #3F3F3F;
  font-family: inherit; /* Наследуем шрифт от родителя */
}
.form-group textarea {
  resize: vertical;
  border: none;
}

/* Контейнер для кнопки отправки */
.submit-container {
  display: flex;
  justify-content: center; /* Центрирование по горизонтали */
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Кнопка отправки */
.submit-button {
  background-color: #000000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.submit-button:active {
  background-color: #696770;
}

.privacy-policy {
  font-size: 12px;
  color: #000;
  text-align: center;
}

.privacy-link {
  color: #000;
  text-decoration: underline;
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

  .icon-mobile-menu {
    display: block;
    background-image: url("@/assets/images/white_logos/menu.svg");
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
}
</style>