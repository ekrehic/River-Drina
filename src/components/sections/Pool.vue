<template>
  <div class="pool__wrapper">
    <div class="section pool">
      <div class="columns is-multiline">
        <div class="column is-12">
          <h2>
            {{ $t(`pool.title`) }}
          </h2>
        </div>
        <div class="column is-6">
          <p v-html="$t(`pool.text`)"></p>
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
    h2, p {
      color: #ffffff;
    }
  }
}
</style>
