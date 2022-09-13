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
      <div class="column is-6 has-text-right">
        <p v-html="$t(`wellness.text`)" class="p-b-15"></p>
        <p v-html="$t(`wellness.sauna`)" class="p-b-10 has-text-weight-semibold"></p>
        <p v-html="$t(`wellness.saunaText`)" class=""></p>
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
  background: #f4f0dd;
}
</style>
