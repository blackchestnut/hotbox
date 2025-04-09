<script setup>
import { ref } from "vue";
import { SUPPORT_EMAIL_MAILTO } from "@/helpers/constants";

const formName = ref("");
const formEmail = ref("");
const formMessage = ref("");
const formPhone = ref("");

const emailData = () => {
  return (
    `${SUPPORT_EMAIL_MAILTO}?subject=Заявка на заказ` +
    `&body=${formMessage.value}\n\nИмя: ${formName.value}\n` +
    `Email: ${formEmail.value}\nТелефон: ${formPhone.value}`
  );
};
</script>
<template>
  <div class="leadform-wrapper">
    <div class="leadform">
      <div class="leadform-content">
        <div class="welcome">
          <div class="leave-request">Оставьте заявку!</div>
          <br />
          <div class="your-data">
            Укажите свои данные и мы<br />обязательно свяжемся с вами для<br />уточнения
            деталей вашего запроса
          </div>
        </div>
        <!-- Логотип огня для ПК версии -->
        <img
          src="\src\assets\images\red_logos\fire.svg"
          alt="Fire Logo"
          class="fire-logo fire-logo-desktop"
        />
        <div class="b-input">
          <input
            v-model="formName"
            placeholder="Ваше имя"
            type="text"
            class="input1"
          />
        </div>
        <div class="b-input">
          <input
            v-model="formPhone"
            placeholder="Телефон"
            type="tel"
            class="input1"
          />
        </div>
        <div class="b-input">
          <input
            v-model="formEmail"
            placeholder="E-mail"
            type="email"
            class="input1"
          />
        </div>
        <div class="b-input">
          <input
            v-model="formMessage"
            placeholder="Услуга"
            type="text"
            class="input1"
          />
        </div>
        <div class="b-input">
          <a class="submit" type="submit" :href="emailData()">Отправить</a>
        </div>
        <div class="note">
          Нажимая на кнопку, вы даете согласие на обработку персональных данных
          и соглашаетесь c
          <a href="https://hotboxrf.ru/politika"
            >политикой конфиденциальности</a
          >
        </div>

        <!-- Логотип огня для мобильной версии -->
        <img
          src="\src\assets\images\red_logos\fire.svg"
          alt="Fire Logo"
          class="fire-logo fire-logo-mobile"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.leave-request {
  font-size: 40px;
  font-weight: 600;
}
.your-data {
  font-size: 20px;
  margin-bottom: 26px;
}
.note {
  margin-top: 50px;
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
}

.b-input input {
  padding-left: 24px;
  width: 532px;
  height: 80px;
  border-radius: 8px;

  font-size: 30px;
  margin-left: 650px;
  border: 3px solid #ffffff;
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
  margin-left: 650px;
  border: 4px solid #000000;
  cursor: pointer;
  text-decoration: none;
}
.submit:hover {
  background-color: #343638;
  border-color: #343638;
}
.submit:active {
  background-color: #343638;
  border-color: #474a4d;
}
.leadform {
  background-color: #b12117;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 60px;
}
.fire-logo-desktop {
  position: absolute;
  width: 380px;
  height: 483.64px;
}
.welcome {
  color: white;
  margin-left: 650px;
}
.fire-logo-mobile {
  display: none; /* Скрываем логотип для ПК версии */
}
/* Мобильная версия */
@media (max-width: 430px) {
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
  }
  .leave-request {
    font-size: 24px;
    text-align: left;
  }
  .your-data {
    font-size: 16px;
    max-width: 100%;
    text-align: left;
  }
  .note {
    font-size: 16px;
    text-align: left;
  }

  .b-input input {
    width: 100%;

    max-height: 48px;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
  }
  .input1 {
    max-width: 92%;
  }
  .submit {
    width: 100%;
    height: 54px;
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
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .welcome {
    margin-left: 0;
    text-align: center;
    line-height: 30px;
  }
}
</style>
