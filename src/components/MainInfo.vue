<template>
  <div class="form">
    <div class="input_field">
        <label>
            First Name
            <input type="text"
            v-model="firstName"
            placeholder="">
        </label>
    </div>
    <div class="input_field">
        <label>
            Last Name
            <input type="text"
            v-model="lastName"
            placeholder="">
        </label>
    </div>
    <div class="input_field">
        <label>
            Email Address
            <input type="email"
            v-model="email"
            placeholder="">
        </label>
    </div>
    <div class="input_field">
        <label>
            Phone Number
            <input type="text"
            v-model="phone"
            placeholder="">
        </label>
    </div>
    <div class="input_field">
        <label>
            Position
            <input type="text"
            v-model="position"
            placeholder="">
        </label>
    </div>
    <div class="input_field">
        <label>
            Available in company
            <input type="text"
            v-model="company"
            placeholder="">
        </label>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        ref({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            position: '',
            company: ''
        });
    },
}
</script>

<style>
</style>