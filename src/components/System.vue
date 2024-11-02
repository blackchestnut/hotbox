<template>
  <div class="system-wrapper">
    <div class="system">
      <div class="header">
        <h1>Котельные системы HotBox</h1>
        <div class="subheadline">
          Это современные, полностью автономные, мобильные тепловые установки.
          Более 10 лет мы работаем для вас
        </div>
      </div>
      <div class="background">
        <div class="container">
          <swiper
            ref="mySwiper"
            :slides-per-view="3"
            :space-between="30"
            :slides-per-group="1"
            class="mySwiper"
            @swiper="onSwiper">
            <swiper-slide v-for="(slide, index) in slides" :key="index">
              <div class="slide-inner">
                <div class="label">{{ slide }}</div>
                <button class="details-button" @click="showDetails(index)">Подробнее</button>
              </div>
            </swiper-slide>
          </swiper>
          <div class="slider-navigation">
            <button class="b-slider-prev" @click="goToPrevSlide"><img src="\src\assets\images\Vector.svg"></button>
            <div class="pagination-buttons">
                    <button
                      v-for="(page, index) in totalPages"
                      :key="index"
                      @click="goToPage(index)"
                      :class="['pagination-button', currentPage === index ? 'active' : '']">
                      {{ index + 1 }}
                    </button>
            </div>
            <button class="b-slider-next" @click="goToNextSlide"><img src="\src\assets\images\Vector1.svg"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        slides: [
          'ПАКУ 500 кВт 1К (Н/Р)',
          'БМАК 1000 кВт 2К',
          'БМАК 1040 кВт 1К',
          'БМАК 1200 кВт 1К',
          'БМАК 1400 кВт 1К',
          'БМАК 1600 кВт 1К',
          'БМАК 4800 кВт 2К',
          'БМАК 6000 кВт 2К',
          'БМАК 6100 кВт 2К',
          'БМАК 7400 кВт 2К',
        ],
        swiperInstance: null,
        currentPage: 0,
      };
    },
    computed: {
    totalPages() {
      return Math.ceil(this.slides.length / 3); // Количество страниц
      },
    },
    methods: {
      onSwiper(swiper) {
        this.swiperInstance = swiper; // Сохраняем экземпляр Swiper
      },
      goToNextSlide() {
        if (this.swiperInstance) {
          this.swiperInstance.slideNext();
        }
      },
      goToPrevSlide() {
        if (this.swiperInstance) {
          this.swiperInstance.slidePrev();
        }
      },
      goToPage(index) {
          if (this.swiperInstance) {
              this.swiperInstance.slideTo(index * 3); // Переход на первую карточку страницы
              this.currentPage = index; // Обновляем текущую страницу
          }
      },
      showDetails(index) {
        console.log(this.slides[index]);
      }
    },
  };
  </script>
  
<style scoped>
  .system {
      height: 1031px;
      width: 1160px;
      margin: 0 auto;
      text-align: center;
      justify-content: center;
      background-color: #f9f9f9;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .header {
      margin-top: 100px;
      text-align: center;
    }
    .subheadline {
      margin-top: 60px;
      font-family: 'Regular', sans-serif;
      font-size: 30px;
    }
    .background {
      margin-top: 30px;
    }
    .slide-inner {
      justify-content: center;
      width: 357px;
      height: 525px;
      background-color: #ffffff;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }
    .label {
      font-size: 20px;
      font-weight: bold;
      color: #333;
    }
    .slider-navigation {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    .b-slider-prev,
    .b-slider-next {
      width: 40px;
      height: 40px;
      background-color: #000000;
      border-radius: 8px;
      border-color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
    .b-slider-prev:hover,
    .b-slider-next:hover {
      background-color: #474a4d;
      border-color: #474a4d;
    }
    .b-slider-prev:active,
    .b-slider-next:active {
      background-color: #474a4d;
      border-color: #696770;
      color: white;
    }


    .pagination-buttons {
    display: flex;
    justify-content: center;
    }
    .pagination-button {
      margin: 0 5px;
      width: 40px;
      height: 40px;
      background-color: #ffffff; 
      color: black;
      border-color:#ffffff; 
      border-radius: 8px;
      transition: background-color 0.3s ease;
    }
    .pagination-button:hover {
      background-color: #474a4d;
      border-color: #474a4d;
    }
    .pagination-button:active {
      background-color: black;
      border-color: black;
      color: white;
    } 

    .details-button {
      background-color: #000000;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .details-button:hover {
      background-color: #474a4d;
}
</style>
