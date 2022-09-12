<template>
  <div class="section features">
    <div class="columns">
      <div v-for="f in features" :key="`feature-${f.name}`" class="column is-3">
        <div class="feature">
          <img :src="f.icon" :alt="f.name">
          <h4 v-text="f.name"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Features extends Vue {
  get features() {
    return [
      {
        name: this.$t(`features.activities`),
        icon: require('@/assets/images/RiverDrina_logo_plain.png'),
      },
      {
        name: this.$t(`features.silence`),
        icon: require('@/assets/images/RiverDrina_logo_plain.png'),
      },
      {
        name: this.$t(`features.pool`),
        icon: require('@/assets/images/RiverDrina_logo_plain.png'),
      },
      {
        name: this.$t(`features.relaxation`),
        icon: require('@/assets/images/RiverDrina_logo_plain.png'),
      },
    ];
  }
}

export default Features;
</script>

<style lang="scss">
.features {

  @media  screen and (min-width: 1024px){
    .columns {
      justify-content: space-between;

      .column {
        width: unset;
      }
    }
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 180px;
    }

    h4 {
      font-weight: 300;
    }
  }
}
</style>
