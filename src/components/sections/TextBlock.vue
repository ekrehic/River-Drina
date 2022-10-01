<template>
    <div class="text-block">
      <div class="section">
        <h3 class="has-wave-centered">
          <span v-html="text" class="text"></span>
          <span>
            <img class="wave" src="@/assets/images/wave-yellow.png" alt="Yellow river drina wave"/>
          </span>
        </h3>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, PropSync} from 'vue-property-decorator';

@Component
class TextBlock extends Vue {

  @PropSync('text', {required: true})

  created(){}

}

export default TextBlock;
</script>

<style lang="scss">
.text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #28B5B5;
  padding: 20px 0;

  h3 {
    text-align: center;
    color: #ffffff;
    max-width: 800px;
    line-height: 68px;

    .text {
      padding-bottom: 15px;
    }

    @media (min-resolution: 108dpi) {
      line-height: 64px;
    }

    @media screen and (max-width: 1024px) {
      line-height: 58px;
    }

    @media screen and (max-width: 768px) {
      line-height: 52px;
    }

  }

}
</style>
