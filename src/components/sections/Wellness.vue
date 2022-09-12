<template>
  <div class="section wellness">
    <div class="columns is-multiline">
      <div class="column is-12 p-b-0 has-text-right">
        <h2>
          {{ $t(`wellness.title`) }}
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
class Wellness extends Vue {
}

export default Wellness;
</script>

<style lang="scss">
.wellness{
  background: #D7D2BE;
}
</style>
