<template>
    <div class="cover">
      <div class="cover__content section">
        LOGO
        <span class="is-block">
          -
        </span>
        <h1 v-html="$t(`cover.text`)"></h1>
        <button class="button is-large is-green">
          {{ $t(`cover.cta`) }}
        </button>
      </div>
      <div class="wave"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class PageCover extends Vue {

}

export default PageCover;
</script>

<style lang="scss">
.cover {
  position: relative;
  height: calc(100vh - 92px);
  background-image: url("images/cover_bg_river-drina.jpeg");
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 1024px) {
    height: calc(100vh - 70px);
  }


  .cover__content {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: #ffffff;
      margin-bottom: 30px;
      max-width: 1000px;
      text-align: center;
      font-size: 38px;
    }
  }
}

.wave {
  position: absolute;
  width: 100%;
  height: 143px;/*PNG*/
  bottom:0;
  left:0;
  background-image: url('images/wave-animation.png');
  animation: anim 10s linear infinite;
}
.wave:before{
  content: '';
  position: absolute;
  width: 100%;
  height: 143px;
  top:0;
  left:0;
  background-image: url('images/wave-animation.png');
  opacity: 0.4;
  animation: anim-rev 10s linear infinite;

}
.wave:after{
  content: '';
  position: absolute;
  width: 100%;
  height: 143px;
  top:0;
  left:0;
  background-image: url('images/wave-animation.png');
  opacity: 0.6;
  animation-delay: -5s;
  animation: anim 20s linear infinite;

}
@keyframes anim {
  0%
  {
    background-position: 0;
  }
  100%
  {
    background-position: 1360px;
  }
}
@keyframes anim-rev {
  0%
  {
    background-position: 1360px;
  }
  100%
  {
    background-position: 0;
  }
}
</style>
