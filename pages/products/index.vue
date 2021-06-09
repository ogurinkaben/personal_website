<template>
  <div class="products">
    <section class="og-hero sm ">
      <Navbar />
      <div class="og-hero--content og-container is--centered">
        		<h1 class="title">Made with ❤️</h1>
      </div>

    </section>
    <Footer />
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: "Product",
    scrollToTop: true,
    components: {
      Navbar,
      Footer,
    },
  }
</script>
<style>
  .products {
    background: var(--primaryColor);
  }
</style>