<template>
  <div class="section location">
    <div class="columns is-multiline">
      <div class="column is-6">
        MAP
      </div>
      <div class="column is-6 has-text-right">
        <h2 v-html="$t(`location.title`)"></h2>
        <p v-html="$t(`location.text`)"></p>
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

</style>
