<template>
  <div class="navigation">
    <div class="navigation__logo">
      <img alt="River Drina" src="@/assets/images/RiverDrina_logo_plain.png"/>
    </div>
    <div class="navigation__menu">
      <div class="columns is-vcentered">
        <div v-for="item in navigationItems" :key="`nav-${item.name}`" class="column is-2">
          <div class="navigation__menu__item">
            <a>
              {{ item.name }}
            </a>
          </div>
        </div>
        <div class="column is-2">
          <button class="button">
            book now
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Navigation extends Vue {
  navigationItems = [
    {
      name: 'About',
      link: ''
    },
    {
      name: 'Appartments',
      link: ''
    },
    {
      name: 'Wellness & spa',
      link: ''
    },
    {
      name: 'Location',
      link: ''
    },
    {
      name: 'Contact',
      link: ''
    },
  ]
}

export default Navigation;
</script>

<style lang="scss">
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 92px;
  z-index: 100;

  .navigation__logo {
    padding: 5px 0;
    height: 100%;

    img {
      max-height: 100%;
      width: auto;
    }
  }

  .navigation__menu {
    width: 80%;

    .columns {
      text-align: right;
    }

    .navigation__menu__item {
      text-transform: lowercase;
      font-size: 18px;
    }
  }
}
</style>
