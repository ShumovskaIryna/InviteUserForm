<template>
  <div class="wrapper">
    <div class="top">
      <h1>Invite User</h1>
      <span><font-awesome-icon icon="fa-regular fa-circle-xmark" size="xl" color="rgb(190, 190, 190)"/></span>
    </div>
    <nav class="navigation_bar">
      <div
        :class="{'active':index === formPosition}"
        v-for="(step, index) in formGroup"
        :key="'step' + index"
      >
        <RouterLink :to="`/step${index+1}`" style="text-decoration: none;">
          <span class="step_circle">{{ index + 1}}</span>{{ formGroup[index].title}}
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
library.add(faCircleXmark)

  export default {
    data: () => {
      return {
        formPosition: 0,
        animation: 'animate-in',
        formGroup: [
          {title: "Main Info",
            fields: [
              {label: "First Name", value: "", type:"text"},
              {label: "Last Name", value: "", type:"text"},
              {label: "Email Adress", value: "", type:"email"},
              {label: "Phone Number", value: "", type:"text"},
              {label: "Position", value: "", type:"text"},
              {label: "Available in company", value: "", type:"select"},
            ]},
          {title: "Available Locations",
            fields: [
              {label: "Main Location", value: "", type:"text"},
              {label: "Select All Location", value: "", type:"checkbox"},
              {label: "Available Location", value: "", type:"text"},
            ]},
          {title: "Roles",
            fields: [
              {label: "", value: ""},
            ]},
        ]
      }
    },

    methods: {
      nextStep(){
      this.animation = 'animate-out';
      setTimeout(() => {
      this.animation = 'animate-in';
      this.formPosition += 1;
      }, 600);
      },
    }
  }
</script>

<style scoped>
.wrapper {
  padding: 20px;
}
.top {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}
.navigation_bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid rgb(225, 225, 225);
  height: 50px;
}
h1 {
  width: 125px;
  height: 32px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 32px;
  align-items: center;
  color: #1D2452;
}
a {
  padding: 15px;
  width: 42px;
  height: 23px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 144%;
  color: #1D2452;
  opacity: 0.5;
}
a.router-link-active {
  color: #415ADA;
  border-bottom: 2px solid #415ADA;
  opacity: 1;
}
.step_circle {
  margin: 10px;
  background-color: rgb(240, 240, 240);
  border-radius: 50%;
  padding: 5px 10px;
}
@media (max-width:767px) {
  a {
    padding: 16px 1px;
    font-weight: 500;
    font-size: 12px;
    line-height: 144%;
  }
  .step_circle {
    margin: 5px;
    font-size: 12px;
  }
}
@media (max-width:530px) {
  .wrapper {
    padding: 0px;
  }
}
@media (max-width:395px) {
  a {
    font-size: 11px;
  }
}
</style>
