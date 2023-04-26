<template>
  <div class="form">
    <div class="input_field">
        <label>
            Main Location
            <input type="text"
            v-model="mainLocation"
            placeholder="">
        </label>
    </div>
    <div class="input_field">
        <label>
            Select All Location
            <input type="checkbox"
            v-model="selectAll"
            placeholder="">
        </label>
    </div>
    <div class="input_field">
        <label>
            Available Locations
        </label>
    </div>
    <div class="input_field">
        <label>
            Berlin
            <input type="checkbox"
            v-model="availableLocations"
            placeholder="">
        </label>
    </div>
    <div class="input_field">
        <label>
            Kyiv
            <input type="checkbox"
            v-model="availableLocations"
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
            mainLocation: '',
            selectAll: false,
            availableLocations: [],
        });
    },
}
</script>

<style>
</style>