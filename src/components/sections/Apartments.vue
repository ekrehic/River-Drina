<template>
  <div id="apartments" class="apartments">
    <div class="apartments__navigation columns is-mobile m-0">
      <div
          v-for="apartment in apartments" :key="`apartment-nav-${apartment.id}`"
          class="apartments__navigation__item column is-4"
          :style="`background: ${apartment.navigationBg}`"
      >
        <span class="apartment_nav_number">
          {{ apartment.id }}
        </span>
        <span class="apartment_nav_apartment">
          {{ $t(`apartments.apartment`)}}
        </span>
        <span class="apartment_nav_line">
          <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
        </span>
        <span class="nav-icon" @click="currentSlide = apartment.id - 1; scrollToApartments();">
          <svg-icons icon="chevronRight" :width="24" :height="24" stroke="#fff"/>
        </span>
      </div>
    </div>
    <div class="apartment" id="apartment" :style="`background-color: ${apartments[currentSlide].color}`">
      <div class="apartment__info">
        <div class="apartment__title p-b-10">
                <span class="apartment__title_number">
                  {{ apartments[currentSlide].id }}
                </span>
                <span class="apartment__title_apartment">
                        {{ $t(`apartments.apartment`)}}
                      </span>
                <span class="apartment__title_line">
                  <img class="wave" src="@/assets/images/wave-green.png" alt="Green river drina wave"/>
                </span>
        </div>

        <div class="apartment__description p-b-5">
          <p v-html="apartments[currentSlide].description" class="p-b-5"></p>
          <p v-html="$t('apartments.capacityInfo')" class="p-b-5"></p>
        </div>

        <div class="apartment__icons p-b-10">
          <div
              v-for="(icon, index) in apartments[currentSlide].icons"
              :key="`ap-${currentSlide}-icon-${index}`"
              class="apartment__icon"
          >
            <img :src="icon.src" :alt="icon.alt">
          </div>
        </div>

        <div class="apartment__cta">
          <button class="button">
            {{ $t(`apartments.bookNow`) }}
          </button>
        </div>

        <div class="apartment__slides-nav">
        <span :class="(currentSlide > 0) ? '' : 'is-disabled'" class="nav-icon" @click="toPrevSlide()">
          <svg-icons icon="chevronLeft" :width="24" :height="24" stroke="currentColor"/>
        </span>
          <span :class="(currentSlide < apartments.length-1) ? '' : 'is-disabled'" class="nav-icon" @click="toNextSlide()">
          <svg-icons icon="chevronRight" :width="24" :height="24" stroke="currentColor"/>
        </span>
        </div>
      </div>
      <div class="apartment__slider">
        <carousel :per-page="1" :navigate-to="currentSlide" :pagination-enabled="false">
          <slide v-for="apartment in apartments" :key="`apartment-cover-${apartment.id}`">
            <img :alt="`River Drina Apartment ${apartment.id}`" :src="apartment.cover"/>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Carousel, Slide } from 'vue-carousel';

@Component({
  components: {
    Carousel,
    Slide,
  }
})
class Apartments extends Vue {
  currentSlide = 0;

  get apartments() {
    return [
      {
        id: 1,
        text: `${this.$t(`apartments.apartment`)} 1`,
        color: '#f4f0dd',
        navigationBg: '#8FD9A8',
        cover: require('@/assets/images/apartments/apartment1/cover.png'),
        description: this.$t(`apartments.apartment1.description`),
        icons: [
          {
            src: require('@/assets/images/amanities/smart-tv.png'),
            alt: 'Smart TV'
          },
          {
            src: require('@/assets/images/amanities/air-conditioning.png'),
            alt: 'Air Conditioning'
          },
          {
            src: require('@/assets/images/amanities/fridge.png'),
            alt: 'Fridge'
          },
          {
            src: require('@/assets/images/amanities/cutlery.png'),
            alt: 'Cutlery'
          },
          {
            src: require('@/assets/images/amanities/coffee.png'),
            alt: 'Coffee'
          },
          {
            src: require('@/assets/images/amanities/bedding.png'),
            alt: 'Bedding'
          },
          {
            src: require('@/assets/images/amanities/hair-dryer.png'),
            alt: 'Hair Dryer'
          },
          {
            src: require('@/assets/images/amanities/shampoo.png'),
            alt: 'Shampoo'
          },
        ],
      },
      {
        id: 2,
        text: `${this.$t(`apartments.apartment`)} 2`,
        color: '#EBE5D6',
        navigationBg: '#28B5B5',
        cover: require('@/assets/images/apartments/apartment2/cover.png'),
        description: this.$t(`apartments.apartment2.description`),
        icons: [
          {
            src: require('@/assets/images/amanities/smart-tv.png'),
            alt: 'Smart TV'
          },
          {
            src: require('@/assets/images/amanities/air-conditioning.png'),
            alt: 'Air Conditioning'
          },
          {
            src: require('@/assets/images/amanities/fridge.png'),
            alt: 'Fridge'
          },
          {
            src: require('@/assets/images/amanities/cutlery.png'),
            alt: 'Cutlery'
          },
          {
            src: require('@/assets/images/amanities/coffee.png'),
            alt: 'Coffee'
          },
          {
            src: require('@/assets/images/amanities/bedding.png'),
            alt: 'Bedding'
          },
          {
            src: require('@/assets/images/amanities/hair-dryer.png'),
            alt: 'Hair Dryer'
          },
          {
            src: require('@/assets/images/amanities/shampoo.png'),
            alt: 'Shampoo'
          },
        ],
      },
      {
        id: 3,
        text: `${this.$t(`apartments.apartment`)} 3`,
        color: '#ECE2C6',
        navigationBg: '#4B778D',
        cover: require('@/assets/images/apartments/apartment3/cover.png'),
        description: this.$t(`apartments.apartment3.description`),
        icons: [
          {
            src: require('@/assets/images/amanities/smart-tv.png'),
            alt: 'Smart TV'
          },
          {
            src: require('@/assets/images/amanities/air-conditioning.png'),
            alt: 'Air Conditioning'
          },
          {
            src: require('@/assets/images/amanities/fridge.png'),
            alt: 'Fridge'
          },
          {
            src: require('@/assets/images/amanities/cutlery.png'),
            alt: 'Cutlery'
          },
          {
            src: require('@/assets/images/amanities/coffee.png'),
            alt: 'Coffee'
          },
          {
            src: require('@/assets/images/amanities/bedding.png'),
            alt: 'Bedding'
          },
          {
            src: require('@/assets/images/amanities/hair-dryer.png'),
            alt: 'Hair Dryer'
          },
          {
            src: require('@/assets/images/amanities/shampoo.png'),
            alt: 'Shampoo'
          },
        ],
      },
    ];

  }

  toPrevSlide() {
    if (this.currentSlide === 0) return;

    this.currentSlide--;
  }

  toNextSlide() {
    if (this.currentSlide === this.apartments.length - 1) return;

    this.currentSlide++;
  }

  scrollToApartments() {
    const el = document.querySelector('#apartment');
    window.scrollTo({
      left: 0,
      top: el.offsetTop - 100,
      behavior: 'smooth'
    });
  }
}

export default Apartments;
</script>

<style lang="scss">
.apartments {
  .apartments__navigation {
    height: 180px;

    @media screen and (max-width: 768px) {
      height: 160px;
    }

    .apartments__navigation__item {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      position: relative;

      .apartment_nav_number {
        position: absolute;
        font-size: 160px;
        font-weight: 900;
        opacity: 0.1;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;

        @media screen and (max-width: 768px) {
          font-size: 120px;
        }

      }

      .apartment_nav_apartment {
        font-size: 36px;
        color: #ffffff;
        position: relative;
        z-index: 2;
        padding-top: 24px;

        @media screen and (max-width: 768px) {
          font-size: 22px;
        }

        @media screen and (max-width: 420px) {
          font-size: 18px;
        }
      }

      .apartment_nav_line {
        max-width: 40px;
        position: relative;
        z-index: 3;
      }

      .nav-icon {
        position: absolute;
        z-index: 3;
        bottom: 12px;
        right: 12px;
        border: 3px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        transition: all 250ms ease;

        &:hover {
          transform: scale(1.1);
        }

        @media screen and (max-width: 420px) {
          transform: scale(0.9);
        }
      }
    }
  }

  .apartment {
    display: flex;
    position: relative;
    transition: all 400ms ease;

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    .apartment__info {
      width: 50%;
      transition: all 400ms ease;
      position: relative;
      padding: 40px 80px 80px 200px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;

      @media screen and (min-width: 1920px) {
        padding: 40px 80px 80px 300px;
      }

      @media screen and (min-width: 2250px) {
        padding: 40px 80px 80px 350px;
      }

      @media screen and (max-width: 1600px) {
        padding: 40px 80px 80px 180px;
      }

      @media screen and (max-width: 1412px) {
        padding: 40px 40px 40px 120px;
      }

      @media screen and (max-width: 1024px) {
        padding: 40px 80px 80px 80px;
      }

      @media screen and (max-width: 1024px) {
        padding: 40px;
        width: 100%;
        align-items: center;

        >* {
          margin-bottom: 10px;
        }
      }

      .apartment__title {
        position: relative;
        height: 140px;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 1312px) and (min-width: 1024px) {
          height: 100px;
        }

        .apartment__title_line {
          max-width: 40px;
          position: relative;
          z-index: 3;
        }

        .apartment__title_number {
          position: absolute;
          font-size: 180px;
          font-weight: 900;
          opacity: 0.1;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;

          @media screen and (max-width: 1312px) and (min-width: 1024px) {
            font-size: 100px;
          }

          @media screen and (max-width: 1024px) {
            font-size: 160px;
          }
        }

        .apartment__title_apartment {
          font-size: 36px;
          color: #ffffff;
          position: relative;
          z-index: 2;
          padding-top: 24px;
          font-weight: 600;
        }
      }

      .apartment__icons {
        display: flex;

        .apartment__icon {
          padding: 0 5px;
        }
      }
    }

    .apartment__slider {
      width: 50%;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      .VueCarousel {
        line-height: 0;

        * {
          line-height: 0;
        }

        .VueCarousel-slide {
          img {
            width: 100%;
          }
        }
      }
    }

    .apartment__slides-nav {
      position: absolute;
      right: 50px;
      bottom: 40px;
      display: flex;

      @media screen and (max-width: 768px) {
        top: 20px;
        right: 20px;
        bottom: unset;
      }

      .nav-icon {
        border: 3px solid #28B5B5;
        color: #28B5B5;
        border-radius: 50%;
        margin-left: 12px;

        &.is-disabled {
          opacity: 0.3;
        }
        
        &:not(.is-disabled) {
          cursor: pointer;
          transition: all 250ms ease;

          &:hover {
            color: #8fd9a8;
            border-color: #8FD9A8;
          }
        }
      }
    }
  }
}
</style>
