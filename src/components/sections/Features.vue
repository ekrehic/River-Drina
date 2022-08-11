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
  features = [
    {
      name: 'feature',
      icon: require('@/assets/images/RiverDrina_logo_plain.png'),
    },
    {
      name: 'feature',
      icon: require('@/assets/images/RiverDrina_logo_plain.png'),
    },
    {
      name: 'feature',
      icon: require('@/assets/images/RiverDrina_logo_plain.png'),
    },
    {
      name: 'feature',
      icon: require('@/assets/images/RiverDrina_logo_plain.png'),
    },
  ]
}

export default Features;
</script>

<style lang="scss">
.features {
  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 180px;
    }
  }
}
</style>
