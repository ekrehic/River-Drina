<template>
  <div class="pool__wrapper">
    <div class="section pool">
      <div class="columns is-multiline">
        <div class="column is-12 column__title">
          <h2>
            {{ $t(`pool.title`) }}
            <span>
              <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
            </span>
          </h2>
        </div>
        <div class="column is-6 column__text">
          <p v-html="$t(`pool.text`)"></p>
        </div>
        <div class="column is-6 column__image">
          <img src="@/assets/images/pool/pool_cover.png" alt="About River Drina"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Pool extends Vue {
}

export default Pool;
</script>

<style lang="scss">
.pool__wrapper {
  background: #2ca9f9;

  .pool {
    height: 46.5vw;
    position: relative;

    .columns {
      height: 100%;

      .column__title,
      .column__text {
        position: relative;
        z-index: 2;
      }

      .column__text {
        padding-right: 80px;
      }

      .column__image {
        img {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
      }
    }

    h2, p {
      color: #ffffff;
    }
  }
}
</style>
