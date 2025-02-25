<template>
    <div class="leadform-wrapper">
      <div class="leadform">
        <div class="leadform-content">

            <div class="welcome">
              <h1>Оставьте заявку!</h1><br>
              <p>Укажите свои данные и мы обязательно свяжемся с</p>
              <p>вами для уточнения деталей вашего запроса</p>
            </div>
            <img src="\src\assets\images\red_logos\fire.svg" alt="Fire Logo" class="fire-logo" />
            <div class="b-input red-background">
              <input id="crm_lead_client" name="crm_lead[client]"
              placeholder="Ваше имя" type="text">
            </div>

            <div class="phone-area">
              <div class="b-input red-background select country_code custom-select">
                <div class="b-input red-background phone">
                  <input id="crm_lead_phone" name="crm_lead[phone]"
                  placeholder="Телефон" type="tel">
                </div>
              </div>
            </div>

            <div class="email-area">
              <div class="b-input red-background select country_code custom-select">
                <div class="b-input red-background email">
                  <input id="crm_lead_phone" name="crm_lead[email]"
                  placeholder="E-mail" type="email">
                </div>
              </div>
            </div>

            <div class="b-input red-background">
              <input id="crm_lead_service" name="crm_lead[service]"
              placeholder="Услуга" type="text">
            </div>

            <div class="submit-container">
              <input class="submit" type="submit" value="Отправить запрос">
            </div>

            <div class="note">
              Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c
              <a href="https://hotboxrf.ru/politika">политикой конфиденциальности</a>
            </div>
        </div>
      </div>
    </div>
  </template>
  
<style scoped>
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
  text-decoration: underline #FDA29B;
  color: #FDA29B;
}
.b-input input {
  padding-left: 24px;
  width: 532px;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 24px;
  font-size: 30px;
  margin-left: 650px;
  border: 3px solid #ffffff;
}
.b-input input:focus {
  border-color: #FDA29B;
  outline: none;
}
.submit {
  width: 320px;
  height: 88px;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 30px;
  margin-left: 650px;
  border: 4px solid #000000;
  cursor: pointer;

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
  background-color: #B12117;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 60px; 
}
.fire-logo {
  position: absolute;
  width: 380px;
  height: 483.64px;
}
.welcome {
  color: white;
  margin-left: 650px;
}
</style>

