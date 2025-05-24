<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { SUPPORT_EMAIL, SUPPORT_EMAIL_MAILTO } from "@/helpers/constants";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

import { links } from "@/helpers/constants";

const activeLink = computed(() => {
  const index = links.findIndex(
    (link) =>
      link.path === route.path || route.path.includes(link.extraMatchPath)
  );

  console.log(route.path);
  console.log(route.path.includes("kotelnye"));

  return index !== -1 ? index : 0;
});

const router = useRouter();
const isMobileMenuOpen = ref(false);
const isMobileContactsOpen = ref(false);
const isEmailModalOpen = ref(false);

const formName = ref("");
const formEmail = ref("");
const formMessage = ref("");

const isSubmitDisabled = computed(() => {
  return !formName.value || !formEmail.value || !formMessage.value;
});

const openMobileMenu = () => {
  isMobileMenuOpen.value = true;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const openMobileContacts = () => {
  isMobileContactsOpen.value = true;
};

const closeMobileContacts = () => {
  isMobileContactsOpen.value = false;
};

// Открытие модального окна с формой
const openEmailModal = () => {
  isEmailModalOpen.value = true;
  closeMobileContacts();
};

// Закрытие модального окна с формой
const closeEmailModal = () => {
  isEmailModalOpen.value = false;
};

const emailData = () => {
  // return `${SUPPORT_EMAIL_MAILTO}?subject=${encodeURIComponent('Заявка на заказ')}` +
  //   `&body=${encodeURIComponent(formMessage)}\n\n${encodeURIComponent(formName)}\n` +
  //   `${encodeURIComponent(formEmail)}`;
  return (
    `${SUPPORT_EMAIL_MAILTO}?subject=Заявка на заказ` +
    `&body=${formMessage.value}\n\n${formName.value}\n` +
    `${formEmail.value}`
  );
};
function callEngineer() {
  window.location.href = "tel:+7(999) 822-11-45";
}
function callManager() {
  window.location.href = "tel:+7(977) 953-39-11";
}
</script>

<template>
  <div class="container">
    <div class="menu">
      <div class="contact-info">
        <div class="icon-phone" />
        <div class="icon-mobile-menu" @click="openMobileMenu"></div>
        <div class="contact-details">
          <a href="tel:+79779533911" class="phone-number">+7 (977) 953 39 11</a>
          <a :href="SUPPORT_EMAIL_MAILTO" class="support-email">{{
            SUPPORT_EMAIL
          }}</a>
        </div>
      </div>
      <router-link to="/">
        <div class="logo"></div>
      </router-link>
      <button class="call-button" @click="callEngineer">ЗВОНОК ИНЖЕНЕРУ</button>
      <div class="icon-mobile-headphones" @click="openMobileContacts"></div>
    </div>

    <div v-if="isMobileMenuOpen" class="modal-overlay" @click="closeMobileMenu">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <a class="close" @click="closeMobileMenu"></a>
        </div>
        <div class="modal-links">
          <router-link
            v-for="(link, index) in links"
            :key="index"
            :class="['modal-link', { active: activeLink === index }]"
            :to="link.path"
            @click="closeMobileMenu"
          >
            {{ link.text }}
          </router-link>
        </div>
      </div>
    </div>

    <div
      v-if="isMobileContactsOpen"
      class="modal-overlay"
      @click="closeMobileContacts"
    >
      <div class="modal-content mobile-menu" @click.stop>
        <div class="modal-header">
          <a class="close" @click="closeMobileContacts"></a>
        </div>
        <div class="mobile-menu-buttons">
          <button class="mobile-menu-button">
            <span class="call-ingener"></span>
            <span class="button-text" @click="callEngineer"
              >Звонок инженеру</span
            >
          </button>
          <button class="mobile-menu-button">
            <span class="call-manager"></span>
            <span class="button-text" @click="callManager"
              >Звонок менеджеру</span
            >
          </button>
          <button class="mobile-menu-button" @click="openEmailModal">
            <span class="email"></span>
            <span class="button-text">Написать на почту</span>
          </button>
          <!--<button class="mobile-menu-button">
            <span class="telegram"></span>
            <span class="button-text">Telegram</span>
          </button>-->
          <a
            href="https://api.whatsapp.com/send/?phone=79998221145&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C%21+%D0%A5%D0%BE%D1%87%D1%83+%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C+%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="mobile-menu-button">
              <span class="whatsapp"></span>
              <span class="button-text">WhatsApp</span>
            </button>
          </a>
        </div>
      </div>
    </div>

    <!-- Модальное окно почты -->
    <div v-if="isEmailModalOpen" class="modal-overlay" @click="closeEmailModal">
      <div class="modal-content email-modal" @click.stop>
        <div class="modal-header">
          <a class="close" @click="closeEmailModal"></a>
        </div>
        <div class="email-modal-content">
          <h2>Написать на почту</h2>
          <p>Наш менеджер свяжется с вами в течение дня</p>

          <form @submit="sendEmail">
            <div class="form-group">
              <input
                v-model="formName"
                placeholder="Ваше имя"
                type="text"
                name="name"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="formEmail"
                placeholder="E-mail"
                type="email"
                name="email"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                v-model="formMessage"
                placeholder="Сообщение"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <div class="submit-container">
              <!--button type="submit" class="submit-button">Отправить</button-->
              <!--div>{{ emailData() }}</div-->
              <a
                class="submit-button"
                type="submit"
                :href="emailData()"
                :class="{ disabled: isSubmitDisabled }"
                :disabled="isSubmitDisabled"
              >
                Отправить
              </a>
            </div>

            <p class="privacy-policy">
              Нажимая на кнопку, вы соглашаетесь с условиями
              <a href="#" class="privacy-link">политики конфиденциальности</a>.
            </p>
          </form>
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

.phone-number,
.support-email {
  text-decoration: none;
  color: inherit;
}

.phone-number:hover,
.support-email:hover {
  text-decoration: underline;
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

/* модальное окно почты для пк версии*/
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
.close {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-image: url("@/assets/images/black_logos/close.svg");
  background-size: contain;
}
.close:hover {
  background-image: url("@/assets/images/black_logos/close_hover.svg");
}
.close:active {
  background-image: url("@/assets/images/black_logos/close_active.svg");
}
.modal-header {
  display: flex;
  justify-content: flex-end; /* Крестик справа */
  align-items: center;
  margin: 20px;
}
.email-modal {
  background-color: white;
  width: 430px; /* Ширина модального окна */
  max-height: 90vh; /* Ограничиваем высоту окна */
  overflow-y: auto; /* Включаем вертикальную прокрутку */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
  border-radius: 0px 0px 8px 8px;
}
.email-modal-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px 20px 20px;
  overflow-y: auto;
}

.email-modal-content h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0px;
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
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  background-color: #eaeaea;
  color: #3f3f3f;
  outline: none;
}
.form-group input,
.form-group textarea {
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  background-color: #eaeaea;
  color: #3f3f3f;
  font-family: inherit; /* Наследуем шрифт от родителя */
}
.form-group textarea {
  resize: vertical;
  border: none;
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
/*----------*/

/* Мобильная версия */

@media (max-width: 1024px) {
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
    height: 50px;
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
    text-decoration: none;
  }
  a[href*="whatsapp"] {
    text-decoration: none !important;
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
  .email-modal {
    background-color: white;
    width: 430px; /* Ширина модального окна */
    max-height: 90vh; /* Ограничиваем высоту окна */
    overflow-y: auto; /* Включаем вертикальную прокрутку */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
  }
  .email-modal-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 20px 20px 20px;
    overflow-y: auto;
  }

  .email-modal-content h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0px;
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
  }

  .form-group input,
  .form-group textarea {
    padding: 14px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    background-color: #eaeaea;
    color: #3f3f3f;
    outline: none;
  }
  .form-group input,
  .form-group textarea {
    padding: 14px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    background-color: #eaeaea;
    color: #3f3f3f;
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

  .privacy-policy {
    font-size: 12px;
    color: #000;
    text-align: center;
  }

  .privacy-link {
    color: #000;
    text-decoration: underline;
  }
}
</style>
