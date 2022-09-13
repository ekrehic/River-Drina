<template>
  <div class="section about">
    <div class="columns is-multiline">
      <div class="column is-12 p-b-0">
        <h2 class="has-wave-right">
          {{ $t(`about.title`) }}
          <span>
            <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
          </span>
        </h2>
      </div>
      <div class="column is-6">
       PHOTO
      </div>
      <div class="column is-6">
        <p v-html="$t(`about.p1`)" class="p-b-15"></p>
        <p v-html="$t(`about.p2`)" class="p-b-15"></p>
        <p v-html="$t(`about.p3`)"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class About extends Vue {
}

export default About;
</script>

<style lang="scss">

</style>
