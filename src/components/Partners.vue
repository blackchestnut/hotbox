<script setup lang="ts">
import PartnersLogo from "@/views/PartnersLogo.vue";
</script>

<template>
  <article class="partner-wrapper page-container">
    <div class="partners">
      <div class="production">
        В производстве мы используем оборудование только проверенных
        производителей
      </div>
      <div class="text">
        При разработке мобильных котельных применяются качественные европейские
        комплектующие. Вся продукция проходит обязательные испытания и
        соответствует нормативным документам
      </div>
    </div>
    <PartnersLogo />
  </article>
</template>

<style scoped>
.production {
  font-weight: 600; /* Semi Bold */
  font-size: 40px; /* Размер шрифта 40px */
  text-align: center;
  margin-bottom: 60px;
}
.text {
  font-size: 30px;
  text-align: center;
  margin-bottom: 150px;
}
.partners {
  margin: 0 auto;
  text-align: center;
  justify-content: center;
}

@media (max-width: 430px) {
  .partners {
    margin-top: 36px;
    padding: 0px 16px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .production {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 30px;
  }
  .text {
    font-size: 15px;
    margin-bottom: 36px;
    text-align: left;
  }
}
</style>
