<script setup>
import { SUPPORT_EMAIL_MAILTO } from "@/helpers/constants";
import { ref, computed } from "vue";

const formMessage = ref("");

const clientName = ref("");
const clientEmail = ref("");
const clientPhone = ref("");

const isSubmitDisabled = computed(() => {
  return !clientName.value || !clientEmail.value || !clientPhone.value;
});

const isLocalSubmitDisabled = computed(() => {
  return isSubmitDisabled.value || !formMessage.value.trim();
});

const emailData = () => {
  return (
    `${SUPPORT_EMAIL_MAILTO}?subject=Заявка на заказ` +
    `&body=${formMessage.value}\n\nИмя: ${clientName.value}\n` +
    `Email: ${clientEmail.value}\nТелефон: ${clientPhone.value}`
  );
};
</script>
<template>
  <div class="leadform-wrapper">
    <div class="leadform">
      <div class="leadform-content">
        <!-- Логотип огня для ПК версии -->
        <img
          src="\src\assets\images\red_logos\fire.svg"
          alt="Fire Logo"
          class="fire-logo fire-logo-desktop"
        />
        <div class="input-wrapper">
          <h1>Оставьте заявку!</h1>
          <br />
          <p>
            Укажите свои данные и мы обязательно свяжемся с вами для уточнения
            деталей вашего запроса
          </p>

          <div class="b-input">
            <input v-model="clientName" placeholder="Ваше имя" type="text" />
          </div>
          <div class="b-input">
            <input v-model="clientPhone" placeholder="Телефон" type="tel" />
          </div>
          <div class="b-input">
            <input v-model="clientEmail" placeholder="E-mail" type="email" />
          </div>
          <div class="b-input">
            <input v-model="formMessage" placeholder="Услуга" type="text" />
          </div>
          <div class="b-input">
            <a
              class="submit"
              :class="{ disabled: isLocalSubmitDisabled }"
              :href="isLocalSubmitDisabled ? '#' : emailData()"
            >
              Отправить
            </a>
          </div>
        </div>

        <!-- Логотип огня для мобильной версии -->
        <img
          src="\src\assets\images\red_logos\fire.svg"
          alt="Fire Logo"
          class="fire-logo fire-logo-mobile"
        />
      </div>
      <div class="note">
        Нажимая на кнопку, вы даете согласие на обработку персональных данных и
        соглашаетесь c
        <router-link to="/privacy">политикой конфиденциальности</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.leadform-content h1 {
  color: #ffffff;
}
.leadform-content p {
  color: #ffffff;
}
.note {
  margin-top: 30px;
  font-size: 18px;
  color: white;
  text-align: center;
}
.note a {
  color: white;
  text-decoration: underline;
}
.note a:hover {
  text-decoration: underline #fda29b;
  color: #fda29b;
}
.b-input {
  margin-bottom: 24px;
  width: 100%;
}

.b-input input {
  height: 80px;
  border-radius: 8px;
  font-size: 30px;
  border: 3px solid #ffffff;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}
.b-input input:focus {
  border-color: #fda29b;
  outline: none;
}
.submit {
  padding: 14px 28px;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 30px;

  border: 4px solid #000000;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}
.submit:hover {
  background-color: #343638;
  border-color: #343638;
}
.submit:active {
  background-color: #343638;
  border-color: #474a4d;
}
.submit.disabled {
  background-color: #8b8a8f;
  border-color: #8b8a8f;
  pointer-events: none;
}
.leadform {
  background-color: #b12117;
  padding-top: 60px;
  padding-bottom: 60px;
}
.leadform-content {
  max-width: 1200px;
  padding: 0px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 160px;
  margin: 0 auto;
}
.fire-logo-desktop {
  width: 380px;
  height: 483.64px;
}
.fire-logo-mobile {
  display: none; /* Скрываем логотип для ПК версии */
}
@media (max-width: 1000px) {
  .leadform-content {
    text-align: left;
    max-width: 100%;
    flex-direction: column;
    gap: 0px;
    margin-bottom: 30px;
    align-items: center;
    text-align: center;
  }
  .fire-logo-desktop {
    margin-bottom: 60px;
  }
}
/* Мобильная версия */
@media (max-width: 430px) {
  .leadform-content h1 {
    font-size: 24px;
    margin-bottom: 0px;
    color: #ffffff;
  }
  .leadform-content p {
    font-size: 15px;
    color: #ffffff;
  }
  .leadform {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .leadform-wrapper {
    max-width: 100%;
    padding: 0px 16px;
    background-color: #b12117;
  }
  .leadform-content {
    text-align: left;
    max-width: 100%;
    flex-direction: column;
    padding: 0px;
    gap: 0px;
    margin-bottom: 30px;
  }

  .note {
    font-size: 16px;
    text-align: left;
  }

  .b-input input {
    width: 100%;
    max-height: 48px;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 12px;
  }

  .submit {
    font-size: 16px;
    margin: 0px;
  }
  .fire-logo-desktop {
    display: none; /* Скрываем логотип для ПК версии */
  }
  .fire-logo-mobile {
    display: block; /* Показываем логотип для мобильной версии */
    width: 200px;
    height: 254.55px;

    margin-left: auto;
    margin-right: auto;
  }

  .note {
    margin-top: 0px;
  }
}
</style>
