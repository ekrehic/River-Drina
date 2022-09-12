<template>
  <div>
    <navigation/>
    <page-cover/>
    <features/>
    <about/>
    <apartments/>
    <quote/>
    <wellness/>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Navigation from "@/components/base/Navigation.vue";
import PageCover from "@/components/sections/PageCover.vue";
import Features from "@/components/sections/Features.vue";
import Apartments from "@/components/sections/Apartments.vue";
import About from "@/components/sections/About.vue";
import Quote from "@/components/sections/Quote.vue";
import Wellness from "@/components/sections/Wellness.vue";

@Component({
  components: {
    Navigation,
    PageCover,
    Features,
    About,
    Apartments,
    Quote,
    Wellness,
  }
})
class LandingPage extends Vue {

}

export default LandingPage;
</script>

<style lang="scss">

</style>
