<template>
  <div class="location">
    <div class="columns is-multiline m-0">
      <div class="column is-6 p-0 lh-0">
        <img src="@/assets/images/RiverDrina_map.png" alt="map" >
      </div>
      <div class="column is-6 has-text-right column--location">
        <div class="location-info">
          <img src="@/assets/images/RiverDrina_green-shape.png" alt="map" class="location-info__img">
          <div class="location-info__txt">
            <h2 class="has-wave-right">
              <span v-html="$t(`location.title`)"></span>
              <span>
            <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
          </span>
            </h2>
            <div class="location-info__p-wrapper">
              <p v-html="$t(`location.text`)"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Location extends Vue {
}

export default Location;
</script>

<style lang="scss">
.location {
  .column--location {
    background-image: url("images/RiverDrina_location.png");
    background-size: cover;
    background-position: center;
    padding-right: 250px;
    padding-left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
      padding-right: 120px;
    }

    .location-info {
      position: relative;

      .location-info__img {
        max-width: calc(100% + 40px);
      }

      .location-info__txt {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: -20px;

        @media (min-resolution: 108dpi) {
          top: -40px;
        }

        h2, p {
          color: #fff;
          margin-bottom: 0;
        }
      }

      .location-info__p-wrapper {
        height: 80%;
        display: flex;
        padding: 0 20px 0 60px;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
