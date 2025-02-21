<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
</script>

<template>
  <div class="system-wrapper">
    <div class="system">
      <div class="header">
        <h1>Котельные системы HotBox</h1>
        <div class="subheadline">
          Это современные, полностью автономные, мобильные тепловые установки. Более 10 лет мы работаем для вас
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
            @swiper="onSwiper"
          >
            <swiper-slide v-for="(slide, index) in slides" :key="index">
              <div class="slide-inner">
                <img :src="slide.image" alt="Slide Image" class="slide-image" />
                <div class="label">{{ slide.text }}</div>
                <div class="description">{{ slide.description }}</div>
                <button class="details-button" @click="showDetails(index)">ПОДРОБНЕЕ</button>
              </div>
            </swiper-slide>
          </swiper>
          <div class="slider-navigation">
            <button class="b-slider-prev" @click="goToPrevSlide">
              <img src="\src\assets\images\arrows\Vector.svg">
            </button>
            <div class="pagination-buttons">
              <button
                v-for="(page, index) in totalPages"
                :key="index"
                @click="goToPage(index)"
                :class="['pagination-button', currentPage === index ? 'active' : '']"
              >
                {{ index + 1 }}
              </button>
            </div>
            <button class="b-slider-next" @click="goToNextSlide">
              <img src="\src\assets\images\arrows\Vector1.svg">
            </button>
          </div>
          <router-link to="/boiler-room">
            <button class="full-catalog">ПОЛНЫЙ КАТАЛОГ</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ITEMS_ON_PAGE = 3;

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          text: 'ПАКУ 500 кВт 1К (Н/Р)',
          image: "/src/assets/images/boilers/paku-500-kvt-1k-nr/1.png",
          description: 'Установка 0,5 МВт, 1 котел',
          link: 'kotelnye/paku-500-kvt-1k-nr'
        },
        {
          text: 'БМАК 1000 кВт 2К',
          image: "/src/assets/images/boilers/bmak-1000-kvt-2k/1.png",
          description: 'Котельная 1,0 МВт, 2 котла',
          link: 'kotelnye/bmak-1000-kvt-2k'
        },
        {
          text: 'БМАК 1040 кВт 1К',
          image: "/src/assets/images/boilers/bmak-1040-kvt-1k/1.png",
          description: 'Котельная 1,04 МВт, 1 котел',
          link: 'kotelnye/bmak-1040-kvt-1k'
        },
        {
          text: 'БМАК 1200 кВт 1К',
          image: "/src/assets/images/boilers/bmak-1200-kvt-1k/1.png",
          description: 'Котельная 1,2 МВт, 1 котел',
          link: 'kotelnye/bmak-1200-kvt-1k'
        },
        {
          text: 'БМАК 1400 кВт 1К',
          image: "/src/assets/images/boilers/bmak-1400-kvt-1k/1.png",
          description: 'Котельная 1,4 МВт, 1 котел',
          link: 'kotelnye/bmak-1400-kvt-1k'
        },
        {
          text: 'БМАК 1600 кВт 1К',
          image: "/src/assets/images/boilers/bmak-1600-kvt-1k/1.png",
          description: 'Котельная 1,6 МВт, 1 котел',
          link: 'kotelnye/bmak-1600-kvt-1k'
        },
        {
          text: 'БМАК 4800 кВт 2К',
          image: "/src/assets/images/boilers/bmak-4800-kvt-2k/1.png",
          description: 'Котельная 4,8 МВт, 2 котла',
          link: 'kotelnye/bmak-4800-kvt-2k' 
        },
        {
          text: 'БМАК 6000 кВт 2К',
          image: "/src/assets/images/boilers/bmak-6000-kvt-2k/1.png",
          description: 'Котельная 6 МВт, 2 котла',
          link: 'kotelnye/bmak-6000-kvt-2k' 
        },
        {
          text: 'БМАК 6100 кВт 2К',
          image: "/src/assets/images/boilers/bmak-6100-kvt-2k/1.png",
          description: 'Котельная 6,1 МВт, 2 котла',
          link: 'kotelnye/bmak-6100-kvt-2k'
        },
        {
          text: 'БМАК 7400 кВт 2К',
          image: "/src/assets/images/boilers/bmak-7400-kvt-2k/1.png",
          description: 'Котельная 7,4 МВт, 2 котла',
          link: 'kotelnye/bmak-7400-kvt-2k'
        },
      ],
      swiperInstance: null,
      currentPage: 0,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.slides.length / ITEMS_ON_PAGE); // Количество страниц
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
        this.swiperInstance.slideTo(index * ITEMS_ON_PAGE); // Переход на первую карточку страницы
        this.currentPage = index; // Обновляем текущую страницу
      }
    },
    showDetails(index) {
      const selectedSlide = this.slides[index];
      this.$router.push(selectedSlide.link); // Переход на указанный маршрут
    },
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
  border-radius: 10px;
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
  width: 100%;
}
.slide-inner {
  justify-content: center;
  width: 100%; /* Замените фиксированную ширину на 100% */
  max-width: 357px; /* Если хотите сохранить максимальную ширину */
  height: 525px;
  background-color: #EBEBEB;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.label {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}
.slider-navigation {
  display: flex;
  justify-content: center;
  padding-top: 43px;
  padding-bottom: 43px;
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
  border-color: #ffffff;
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
  width: 132px;
  height: 40px;
  background-color: #fff;
  color: #3b3b3b;
  border-color: #3b3b3b;
  border-radius: 8px;
  border: 2px solid #3b3b3b;
  transition: background-color 0.3s ease;
  font-family: 'Lato', sans-serif;
  font-size: 15px;
}
.details-button:hover {
  border-color: #000000;
  color: #000000;
}
.details-button:active {
  border-color: #696770;
  color: #696770;
}
.slide-image {
  width: 357px;
  height: 359px;
}
.full-catalog {
  width: 238px;
  height: 50px;
  color: white;
  background-color: #000000;
  border: 3px solid #000000;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
}
.full-catalog:hover {
  background-color: #474a4d;
  border: 3px solid #474a4d;
}
.full-catalog:active {
  background-color: #343638;
  border: 3px solid #474a4d;
}
.description {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
