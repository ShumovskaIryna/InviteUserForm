<script setup>
import HeaderComponentVue from './components/HeaderComponent.vue'
import FooterComponentVue from './components/FooterComponent.vue'
</script>

<template>
  <div class="container">
    <article>
      <header>
        <HeaderComponentVue />
      </header>
      <section>
        <RouterView />
      </section>
      <footer>
        <FooterComponentVue />
      </footer>
    </article>
  </div>
</template>

<style scoped>
.container{
    background-color: #FFFFFF;
    margin: 30px auto;
    padding: 20px;
    box-shadow: 0px 8px 16px rgba(54, 62, 113, 0.24);
    border-radius: 16px;
}
@media (max-width:1300px) {
  .container {
    max-width: 960px;
  }
}
@media (max-width:992px) {
  .container {
    max-width: 750px;
  }
}
@media (max-width:767px) {
  .container {
    max-width: 490px;
  }
}
@media (max-width:530px) {
  .container {
    max-width: 470px;
  }
}
@media (max-width:395px) {
  .container {
    max-width: 300px;
  }
}
</style>
