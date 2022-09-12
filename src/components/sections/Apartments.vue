<template>
  <div class="apartments">
    <div class="apartments__navigation columns m-0">
      <div
          v-for="apartment in apartments" :key="`apartment-nav-${apartment.id}`"
          class="apartments__navigation__item column"
          :style="`background: ${apartment.navigationBg}`"
      >
        <span class="apartment_nav_number">
          {{ apartment.id }}
        </span>
        <span class="apartment_nav_apartment">
          {{ $t(`apartments.apartment`)}}
        </span>
        <span class="apartment_nav_line">
          -
        </span>
        <span class="nav-icon" @click="currentSlide = apartment.id - 1; scrollToApartments();">
          <svg-icons icon="chevronRight" :width="24" :height="24" stroke="#fff"/>
        </span>
      </div>
    </div>
    <div class="apartment" id="apartment">
      <div class="apartment__info" :style="`background-color: ${apartments[currentSlide].color}`">
        <div class="apartment__title">
                <span class="apartment__title_number">
                  {{ apartments[currentSlide].id }}
                </span>
                <span class="apartment__title_apartment">
                        {{ $t(`apartments.apartment`)}}
                      </span>
                <span class="apartment__title_line">
                  -
                </span>
        </div>

        <div class="apartment__description">
          <p v-html="apartments[currentSlide].description" class="p-b-5"></p>
          <p v-html="$t('apartments.capacityInfo')" class="p-b-5"></p>
        </div>

        <div class="apartment__icons">
          <div v-for="(icon, index) in apartments[currentSlide].icons" :key="`ap-${currentSlide}-icon-${index}`">
            <img :src="icon">
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
        color: '#D7D2BE',
        navigationBg: '#8FD9A8',
        cover: require('@/assets/images/apartments/apartment-1.jpg'),
        description: this.$t(`apartments.apartment1.description`),
        icons: [
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
        ],
      },
      {
        id: 2,
        text: `${this.$t(`apartments.apartment`)} 2`,
        color: '#b2b8ac',
        navigationBg: '#28B5B5',
        cover: require('@/assets/images/apartments/apartment-2.jpg'),
        description: this.$t(`apartments.apartment2.description`),
        icons: [
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
        ],
      },
      {
        id: 3,
        text: `${this.$t(`apartments.apartment`)} 3`,
        color: '#ddcc9b',
        navigationBg: '#4B778D',
        cover: require('@/assets/images/apartments/apartment-3.jpg'),
        description: this.$t(`apartments.apartment3.description`),
        icons: [
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
          require('@/assets/images/RiverDrina_logo_plain.png'),
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

    .apartments__navigation__item {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      position: relative;

      .apartment_nav_number {
        position: absolute;
        font-size: 160px;
        font-weight: 800;
        opacity: 0.15;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Ubuntu', sans-serif;
        z-index: 1;
      }

      .apartment_nav_apartment {
        font-size: 36px;
        color: #ffffff;
        position: relative;
        z-index: 2;
        padding-top: 24px;
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
      }
    }
  }

  .apartment {
    display: flex;
    position: relative;

    .apartment__info {
      width: 50%;
      transition: all 400ms ease;
      position: relative;
      padding: 40px 80px 80px 200px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;

      @media screen and (max-width: 1024px) {
        padding: 40px 80px 80px 120px;
      }

      @media screen and (max-width: 768px) {
        padding: 40px;
      }

      .apartment__title {
        position: relative;
        height: 140px;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .apartment__title_number {
          position: absolute;
          font-size: 180px;
          font-weight: 800;
          opacity: 0.15;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Ubuntu', sans-serif;
          z-index: 1;
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
      }
    }

    .apartment__slider {
      width: 50%;

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
            color: #8FD9A8;
            border-color: #8FD9A8;
          }
        }
      }
    }
  }
}
</style>