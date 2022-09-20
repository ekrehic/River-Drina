<template>
  <div class="form form--book">

    <b-field label="Name">
      <b-input v-model="formData.name"></b-input>
    </b-field>
    <b-field label="Apartment">
      <b-select placeholder="Select apartment" v-model="formData.apartment">
        <option value="Apartman 1">
          Apartman 1
        </option>
        <option value="Apartman 2">
                Apartman 2
        </option>
      </b-select>
    </b-field>
    <b-field label="Email">
      <b-input type="email"
               v-model="formData.email"
               maxlength="30">
      </b-input>
    </b-field>
    <b-field label="Select a date">
      <b-datepicker
          v-model="formData.arrivalDate"
          placeholder="Click to select..."
          icon="calendar-today"
          icon-right-clickable
          trap-focus>
      </b-datepicker>
    </b-field>


    <form class="form" :name="`book`" method="post" netlify netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" :value="`book`" />
      <div class="columns is-multiline">
        <div class="column is-6 is-offset-3">
          <input class="form__input" type="text" id="name" name="name" required :value="formData.name">
        </div>
        <div class="column is-6 is-offset-3">
          <input class="form__input"  type="text" id="apartment" name="apartment" required :value="formData.apartment">
        </div>
        <div class="column is-6 is-offset-3">
          <input class="form__input"  type="email" id="email" name="email" required  :value="formData.email">
        </div>
        <div class="column is-6 is-offset-3">
          <input class="form__input" name="arrivalDate" id="arrivalDate"  :value="formData.arrivalDate"/>
        </div>

        <div class="column is-6 is-offset-3 has-text-right">
          <button class="button button--hollow m-t-10">
                <span class="text">
                  {{ $t(`services.form.cta`) }}
                </span>
            <span class="dot"></span>
            <span class="icon-wrapper">
                </span>
          </button>
        </div>

        <div class="column is-6 is-offset-3 has-text-right">
          <div class="contact__info">
            <p v-html="$t(`services.form.info`)"></p>
          </div>
        </div>
      </div>
    </form>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Quote extends Vue {
  formData = {
    name: '',
    apartment: '',
    email: '',
    arrivalDate: null,
  }
}

export default Quote;
</script>

<style lang="scss">
.form--book {
}

</style>
