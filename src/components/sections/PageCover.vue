<template>
    <div class="cover">
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
  height: 100vh;
  background-image: url("images/cover_bg_river-drina.jpeg");
  background-size: cover;
  background-position: center;
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

  //background-image: url('https://vitalflow.com.ar/img/anim-onda.png');
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

  // background-image: url('https://vitalflow.com.ar/img/anim-onda.png');
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
    background-position: 1360;
  }
  100%
  {
    background-position: 0;
  }
}
</style>
