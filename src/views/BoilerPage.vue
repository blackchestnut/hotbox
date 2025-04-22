<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import Menu from "@/components/Menu.vue";
import { boilers } from "@/data";
import BoilerOrder from "@/views/BoilerOrder.vue";
import { SUPPORT_EMAIL_MAILTO } from "@/helpers/constants";
const currentImageIndex = ref(0);
const isOrderModalVisible = ref(false);
const selectedFuel = ref("Газ");
const selectedGVS = ref("С подключением");
const isExpanded = ref(false);
const selectedBoiler = ref(""); // Название выбранного котла
const selectedImage = ref(""); // Изображение выбранного котла
const boiler = boilers.find((v) => v.path === route.params.id);
const images = boiler.images;

const name = document.getElementById("crm_lead_name")?.value || "";
const email = document.getElementById("crm_lead_email")?.value || "";
const phone = document.getElementById("crm_lead_phone")?.value || "";
const count = ref(1);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + images.length) % images.length;
};

const showOrderModal = () => {
  selectedBoiler.value = boiler.type;
  selectedImage.value = images[currentImageIndex.value];
  isOrderModalVisible.value = true;
};

const closeOrderModal = () => {
  isOrderModalVisible.value = false;
};

const toggleFuel = (fuel) => {
  selectedFuel.value = selectedFuel.value === fuel ? null : fuel;
};

const toggleGVS = (gvs) => {
  selectedGVS.value = selectedGVS.value === gvs ? null : gvs;
};

// Описание
const description = () => {
  if (isExpanded.value) {
    return boiler.fullDescription;
  } else {
    return boiler.fullDescription.substring(0, 237);
  }
};

const toggleText = () => {
  isExpanded.value = !isExpanded.value;
};
const emailData = () => {
  return (
    `${SUPPORT_EMAIL_MAILTO}?subject=Заявка на заказ` +
    `&body=Имя: ${encodeURIComponent(name)}%0A` +
    `Email: ${encodeURIComponent(email)}%0A` +
    `Телефон: ${encodeURIComponent(phone)}%0A` +
    `Количество: ${encodeURIComponent(count)}`
  );
};
</script>

<template>
  <Menu />
  <div class="page-container">
    <RouterLink to="/boiler-room">
      <div class="back">
        <div class="back-logo"></div>
      </div>
    </RouterLink>
    <div class="wrapper">
      <div
        class="boiler-card"
        :style="{ backgroundImage: 'url(' + images[currentImageIndex] + ')' }"
      >
        <button class="arrow-button left" @click="prevImage">🡨</button>
        <button class="arrow-button right" @click="nextImage">🡪</button>
      </div>

      <div class="characteristic">
        <h1>{{ boiler.type }}</h1>
        <p>{{ boiler.boiler }}</p>
        <div class="t">Вид топлива</div>

        <div class="fuel-container">
          <button
            class="fuel"
            :class="{ active: selectedFuel === 'Газ' }"
            @click="toggleFuel('Газ')"
          >
            Газ
          </button>
          <button
            class="fuel"
            :class="{ active: selectedFuel === 'Дизель' }"
            @click="toggleFuel('Дизель')"
          >
            Дизель
          </button>
        </div>

        <div class="t">Подключение ГВС</div>

        <div class="gvs-container">
          <button
            class="gvs"
            :class="{ active: selectedGVS === 'С подключением' }"
            @click="toggleGVS('С подключением')"
          >
            С подключением
          </button>
          <button
            class="gvs"
            :class="{ active: selectedGVS === 'Без подключения' }"
            @click="toggleGVS('Без подключения')"
          >
            Без подключения
          </button>
        </div>
        <div class="t" style="font-weight: bold">
          Цена предоставляется по запросу
        </div>

        <button class="buy" @click.prevent="showOrderModal">ЗАКАЗАТЬ</button>

        <div class="pacu">
          ПАКУ имеет наружное размещение. Есть возможность<br />
          каскадного подключения. Может быть оснащена ГВС.
        </div>

        <div class="description" :class="{ expanded: isExpanded }">
          <div class="gray-description">{{ description() }}</div>
        </div>
        <a href="#" @click.prevent="toggleText" class="show-more">
          {{ isExpanded ? "Скрыть" : "Читать полностью" }}
        </a>
      </div>
    </div>
    <div class="more-information">
      <h3>Основные характеристики</h3>
      <div style="margin-bottom: 30px" class="t">
        <div v-if="boiler.typeDescription">
          <span class="g">Тип:</span> {{ boiler.typeDescription }}
        </div>
        <div v-if="boiler.boilerCount">
          <span class="g">Количество котлов: </span>{{ boiler.boilerCount }}
        </div>
        <div v-if="boiler.boiler">
          <span class="g">Котел: </span>{{ boiler.boiler }}
        </div>
        <div v-if="boiler.manufactureDate">
          <span class="g">Дата изготовления: </span>{{ boiler.manufactureDate }}
        </div>
        <div v-if="boiler.purpose">
          <span class="g">Назначение: </span>{{ boiler.purpose }}
        </div>
        <div v-if="boiler.power">
          <span class="g">Мощность (макс.): </span>{{ boiler.power }}
        </div>
        <div v-if="boiler.serviceLife">
          <span class="g">Срок службы: </span> {{ boiler.serviceLife }}
        </div>
        <div v-if="boiler.electricPower">
          <span class="g">Установленная электрическая мощность: </span>
          {{ boiler.electricPower }}
        </div>
        <div v-if="boiler.electricalPowerConsumption">
          <span class="g">Потребляемая электрическая мощность: </span>
          {{ boiler.electricalPowerConsumption }}
        </div>
        <div v-if="boiler.weight">
          <span class="g">Масса БМАК: </span> {{ boiler.weight }}
        </div>
        <div v-if="boiler.weight">
          <span class="g">Вид топлива: </span> {{ boiler.fuelType }}
        </div>
        <div v-if="boiler.fuelConsumption">
          <span class="g">Расход топлива: </span> {{ boiler.fuelConsumption }}
        </div>
        <div v-if="boiler.coolantTemperature">
          <span class="g">Температура теплоносителя: </span>
          {{ boiler.coolantTemperature }}
        </div>
        <div v-if="boiler.burnersCount">
          <span class="g">Количество горелок: </span> {{ boiler.burnersCount }}
        </div>
        <div v-if="boiler.burnerType">
          <span class="g">Тип горелки: </span> {{ boiler.burnerType }}
        </div>
        <div v-if="boiler.coolantPressure">
          <span class="g">Давление теплоносителя: </span>
          {{ boiler.coolantPressure }}
        </div>
        <div v-if="boiler.fuelTank">
          <span class="g">Топливный резервуар: </span> {{ boiler.fuelTank }}
        </div>
        <div v-if="boiler.heatingCapacity">
          <span class="g">Теплопроизводительность: </span>
          {{ boiler.heatingCapacity }}
        </div>
        <div v-if="boiler.stovepipe">
          <span class="g">Дымоход: </span> {{ boiler.stovepipe }}
        </div>
        <div v-if="boiler.bmkBuilding">
          <span class="g">Корпус БМК: </span> {{ boiler.bmkBuilding }}
        </div>
        <div v-if="boiler.pump">
          <span class="g">Насосы: </span> {{ boiler.pump }}
        </div>
        <div v-if="boiler.minUsingFuel">
          <span class="g">Мин. потребление основного топлива: </span>
          {{ boiler.minUsingFuel }}
        </div>
        <div v-if="boiler.maxUsingFuel">
          <span class="g">Макс. потребление основного топлива: </span>
          {{ boiler.maxUsingFuel }}
        </div>
        <div v-if="boiler.boilerEfficiency">
          <span class="g">КПД котла: </span> {{ boiler.boilerEfficiency }}
        </div>
        <div v-if="boiler.heatingSystem">
          <span class="g">Тип системы отопления: </span>
          {{ boiler.heatingSystem }}
        </div>
        <div v-if="boiler.boilerCircuit">
          <span class="g">Теплоноситель котлового контура: </span>
          {{ boiler.boilerCircuit }}
        </div>
        <div v-if="boiler.boilerCircuitTemperature">
          <span class="g">Темп. теплоносителя котлового контура: </span>
          {{ boiler.boilerCircuitTemperature }}
        </div>
        <div v-if="boiler.heatCarrier">
          <span class="g">Теплоноситель сетевого контура: </span>
          {{ boiler.heatCarrier }}
        </div>
        <div v-if="boiler.heatCarrier">
          <span class="g">Резервный источник эл.питания: </span>
          {{ boiler.backupPowerSupply }}
        </div>
        <div v-if="boiler.boilerCircuitCoolantPressure">
          <span class="g">Давление теплоносителя котлового контура: </span>
          {{ boiler.boilerCircuitCoolantPressure }}
        </div>
        <div v-if="boiler.networkCircuitCoolantPressure">
          <span class="g">Давление теплоносителя сетевого контура: </span>
          {{ boiler.networkCircuitCoolantPressure }}
        </div>
        <div v-if="boiler.temperatureControl">
          <span class="g">Регулирование температуры: </span>
          {{ boiler.temperatureControl }}
        </div>
        <div v-if="boiler.fireSecurityAlarm">
          <span class="g">Пожарно-охранная сигнализация: </span>
          {{ boiler.fireSecurityAlarm }}
        </div>
        <div v-if="boiler.dispatching">
          <span class="g">Диспетчеризация: </span> {{ boiler.dispatching }}
        </div>
        <div v-if="boiler.maxUsingPowerGWS">
          <span class="g">Мощность отопления при макс. нагрузке ГВ: </span>
          {{ boiler.maxUsingPowerGWS }}
        </div>
        <div v-if="boiler.LxWxH">
          <span class="g">ДxШxВ: </span> {{ boiler.LxWxH }}
        </div>
      </div>
      <h3>Комплект поставки</h3>
      <div style="margin-bottom: 30px" class="t">
        <div v-if="boiler.boilerUnit">
          <span class="g">Котельный агрегат: </span> {{ boiler.boilerUnit }}
        </div>
        <div v-if="boiler.itemPasport">
          <span class="g">Паспорт изделия: </span> {{ boiler.itemPasport }}
        </div>
        <div v-if="boiler.userManual">
          <span class="g">Руководство по эксплуатации: </span>
          {{ boiler.userManual }}
        </div>
        <div v-if="boiler.boilerPlant">
          <span class="g">Котельная установка: </span> {{ boiler.boilerPlant }}
        </div>
        <div v-if="boiler.boilerPassport">
          <span class="g">Паспорт котла: </span> {{ boiler.boilerPassport }}
        </div>
        <div v-if="boiler.passportAndManualOfTheControlPanel">
          <span class="g"
            >Паспорт и руководство щита управления и вводного щита:
          </span>
          {{ boiler.passportAndManualOfTheControlPanel }}
        </div>
        <div v-if="boiler.bmak_1_2">
          <span class="g">БМАК 1,2 МВт: </span> {{ boiler.bmak_1_2 }}
        </div>
        <div v-if="boiler.bmak_1_6">
          <span class="g">БМАК 1,6 МВт: </span> {{ boiler.bmak_1_6 }}
        </div>
        <div v-if="boiler.bmak_4_8">
          <span class="g">БМАК 4,8 МВт: </span> {{ boiler.bmak_4_8 }}
        </div>
        <div v-if="boiler.bmak_6">
          <span class="g">БМАК 6 МВт: </span> {{ boiler.bmak_6 }}
        </div>
        <div v-if="boiler.bmak_6_GWS">
          <span class="g">БМАК 6 МВт с ГВС: </span> {{ boiler.bmak_6_GWS }}
        </div>
        <div v-if="boiler.chimneys">
          <span class="g">Дымовые трубы: </span> {{ boiler.chimneys }}
        </div>
      </div>
      <h3>Охрана труда и техника безопасности</h3>
      <div style="margin-bottom: 30px" class="t">
        Котельная работает в автоматизированном режиме и не имеет постоянного<br />
        обслуживающего персонала. В целях безопасной эксплуатации котельной
        необходимо<br />
        строго следовать законодательству РФ. Котельные агрегаты и
        вспомогательное<br />
        оборудование оснащены в соответствии с нормами и правилами
        необходимой<br />
        технологической защитой, отключающей оборудование при аварийных
        ситуациях,<br />
        осуществляющей сигнализацию отклонений технологических параметров от
        нормы.<br />
        Автоматика безопасности прекращает подачу топлива в котельную.<br />
        Вращающиеся части оборудования оснащены защитными кожухами,
        исключающими<br />
        травматизм обслуживающего персонала. Все токоведущие части
        оборудования<br />
        изолированы. Электрооборудование подключено к проектируемому контуру
        защитного<br />
        заземления. Оборудование и трубопроводы окрашиваются. Цветовая гамма,
        способ<br />
        нанесения окраски и опознавательных знаков регламентирован действующими
        нормами.
      </div>
      <h3>Гарантия</h3>
      <div style="margin-bottom: 30px" class="t">
        Предприятие-изготовитель гарантирует соответствие характеристик
        изделия<br />
        паспортным данным, безвозмездный ремонт в случае выявления дефектов в
        течение<br />
        гарантийного срока при соблюдении условий, указанных в паспорте.<br />
        Гарантийный срок работы изделия устанавливается 12 месяцев со дня
        реализации. Если<br />
        дату продажи установить невозможно, этот срок исчисляется со дня
        изготовления. Срок<br />
        службы изделия составляет 10 лет.<br />
        По вопросам качества БМАК обращаться к предприятию-изготовителю.
      </div>
    </div>

    <!--------------------------------------------------------------------------------->
    <div
      v-if="isOrderModalVisible"
      class="modal-overlay"
      @click="closeOrderModal"
    >
      <div class="modal-content" @click.stop>
        <a class="close" @click="closeOrderModal"></a>

        <h3>Заявка на заказ</h3>
        <div class="subheader">Наш менеджер свяжется с вами в течение дня</div>
        <div class="line"></div>

        <div class="information-container">
          <BoilerOrder
            :selectedBoiler="selectedBoiler"
            :selectedImage="selectedImage"
            :selectedFuel="selectedFuel"
            :selectedGVS="selectedGVS"
          />
        </div>
        <div class="form-container">
          <input
            id="crm_lead_client"
            name="crm_lead[client]"
            placeholder="Ваше имя"
            type="text"
          />
          <input
            id="crm_lead_email"
            name="crm_lead[email]"
            placeholder="E-mail"
            type="email"
          />
          <input
            id="crm_lead_phone"
            name="crm_lead[phone]"
            placeholder="Телефон"
            type="tel"
          />
          <div class="submit-container">
            <a class="submit-button" type="submit" :href="emailData()"
              >Отправить</a
            >
          </div>
          <div class="politics">
            Нажимая на кнопку вы соглашаетесь с условиями
            <router-link to="/privacy">политики конфиденциальности</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border: 2px solid #696770;
  position: relative;
  margin-bottom: 60px;
}

.back-logo {
  background-image: url("@/assets/images/back_arrow/back2.svg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: contain;
}

.back:hover {
  border: 2px solid #555555;
}

.back-logo:hover {
  background-image: url("@/assets/images/back_arrow/back3.svg");
}

.back:active {
  border: 2px solid #555555;
  background-color: #e8e8e8;
}

.back-logo:active {
  background-image: url("@/assets/images/back_arrow/back3.svg");
}

.boiler-card {
  width: 480px;
  height: 480px;
  position: relative;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  background-position: center;
}

.arrow-button {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(150, 150, 150, 0);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #000;
  transition: all 0.5s ease;
  font-size: 22px;
}

.arrow-button.left {
  left: 10px;
}

.arrow-button.right {
  right: 10px;
}

.arrow-button:hover {
  background-color: #000000ad;
  color: #fff;
}
.wrapper {
  display: flex;
}
.characteristic {
  margin-left: 68px;
}
.t {
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 10px;
}
.gray-description {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 10px;
}
.fuel-container,
.gvs-container {
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
}

.fuel,
.gvs {
  border-radius: 8px;
  color: #868686;
  background-color: #fff;
  border: 2px solid #868686;
  width: 76px;
  height: 40px;
}

.gvs {
  width: 160px;
}

.active {
  border: 2px solid #000;
  color: #000;
  background-color: #fff;
}

.buy {
  width: 120px;
  height: 54px;
  margin-bottom: 30px;
}

.description {
  overflow: hidden;
  max-width: 564px;
  line-height: 30px;
  color: #868686;
}
.show-more {
  color: black;
  text-decoration: none;
  margin-bottom: 60px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal-content {
  max-width: 800px;
  max-height: 90vh; /* Установите максимальную высоту в 90% от высоты окна */
  background-color: #fff;
  border-radius: 8px;
  padding: 50px; /* Уменьшите отступы для лучшей адаптивности */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto; /* Позволяет прокручивать содержимое, если оно превышает высоту */
}
@media only screen and (max-width: 600px) {
  .modal-content {
    padding: 30px;
  }
}

.close {
  width: 32px;
  height: 32px;
  cursor: pointer;
  float: right;
  background-image: url("@/assets/images/black_logos/close.svg");
  background-size: contain;
}

.subheader {
  font-size: 16px;
}
.line {
  border-top: 1px solid #b0b0b0;
  width: 100%;
  margin: 30px 0;
}

@media only screen and (max-width: 600px) {
  .boiler-image {
    display: none;
  }
}

.information-container {
  display: flex;
  gap: 38px;
  justify-content: space-between;
  align-items: center; /* Выравнивание по центру по вертикали */
  padding-bottom: 30px;
}

@media only screen and (max-width: 600px) {
  .information-container {
    flex-direction: column;
  }
}

.modal-boiler-info {
  line-height: 24px;
  font-size: 18px;
}

@media only screen and (max-width: 800px) {
  .modal-boiler-info {
    width: 100%;
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media only screen and (max-width: 600px) {
  .form-container {
    align-items: center;
    text-align: center;
  }
}

input {
  background-color: #eaeaea;
  border: none;
  padding: 18px 22px;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 8px;
  line-height: 20px;
  width: 100%;
}

input:focus {
  outline: none;
}
input::placeholder {
  color: #8d8d8d;
}
.politics {
  font-size: 14px;
}
.politics a {
  color: #000;
}
.pacu {
  font-size: 20px;
  margin-bottom: 20px;
}
@media (max-width: 430px) {
  .page-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0px 16px;
  }
  .topbar {
    display: none;
  }
  .back {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid #696770;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .back-logo {
    background-image: url("@/assets/images/back_arrow/back2.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-size: contain;
  }
  .back:hover {
    border: 2px solid #555555;
  }

  .boiler-card {
    width: 100%;
    height: 380px;
    margin-bottom: 20px;
  }
  .wrapper {
    flex-direction: column;
  }
  .arrow-button {
    width: 30px;
    height: 30px;
  }
  .characteristic {
    margin: 0px;
  }
  .characteristic h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .characteristic p {
    font-size: 16px;
    margin-bottom: 10px;
    padding: 0px;
  }
  .t {
    font-size: 14px;
    margin-bottom: 10px;
    padding: 0px;
    line-height: 24px;
  }
  .fuel-container {
    padding: 0px;
    margin-bottom: 16px;
  }
  .fuel {
    font-size: 13px;
    width: 60px;
    height: 30px;
    padding: 0px;
  }
  .gvs-container {
    padding: 0px;
  }
  .gvs {
    width: 130px;
    height: 30px;
    font-size: 13px;
    margin-bottom: 16px;
  }
  .buy {
    max-width: 90px;
    max-height: 40px;
    font-size: 14px;
    font-weight: 500;
  }
  .pacu {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .gray-description {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .show-more {
    font-size: 14px;
  }
  .more-information h3 {
    font-size: 16px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
</style>
