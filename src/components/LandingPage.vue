<template>
  <div>
    <navigation/>
    <page-cover/>
<!--    <features/>-->
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Navigation from "@/components/base/Navigation.vue";
import PageCover from "@/components/sections/PageCover.vue";
// import Features from "@/components/sections/Features.vue";

@Component({
  components: {
    Navigation,
    PageCover,
    // Features,
  }
})
class LandingPage extends Vue {

}

export default LandingPage;
</script>

<style lang="scss">

</style>
