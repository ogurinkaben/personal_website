<template>
  <div>
    <vue-page-transition name="fade-in-up">
      <Nuxt />
    </vue-page-transition>
  </div>
</template>
<script>
import Vue from 'vue'
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)
export default {
  name: 'App',
  transition: 'fade-in-left',
  scrollToTop: true,
}

</script>
