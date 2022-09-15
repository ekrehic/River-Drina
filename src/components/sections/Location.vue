<template>
  <div class="section location">
    <div class="columns is-multiline">
      <div class="column is-6">
        MAP
      </div>
      <div class="column is-6 has-text-right">
        <h2 class="has-wave-right">
          <span v-html="$t(`location.title`)"></span>
          <span>
            <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
          </span>
        </h2>
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
