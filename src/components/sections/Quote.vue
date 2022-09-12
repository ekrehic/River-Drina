<template>
  <div class="quote_wrapper">
    <div class="quote">
      <div class="section">
        <h3 v-html="$t(`quote`)"></h3>
        <span>
      line
    </span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Quote extends Vue {
}

export default Quote;
</script>

<style lang="scss">
.quote_wrapper {
  background: #D7D2BE;
}

.quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: center;
    color: #4B778D;
    max-width: 800px;
  }

}
</style>
