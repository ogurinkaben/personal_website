<template>
  <div class="products">
    <section class="og-hero">
      <Navbar />
      <div class="og-hero--content og-container is--centered">
        <div>
          <h1 class="title">Minimal and Powerful link tracking and analytics for you</h1>
          <p class="info">a2z (formerly everylink) is a super simple URL shortener/tracker made with ❤️ and specially designed and developed for content creators to give them a fast and simple way to easily share clean trackable content URLs</p>
          <div class="pt">
            <nuxt-link class="og-button bold" to="/contact">Request Access</nuxt-link>
          </div>
        </div>
          <span class="scroll"></span>
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
    head() {
      return {
        title: "a2z by  - Ogurinka Benjamin",
        meta: [{
            name: 'description',
            content: 'A collection of products and projects I have built to make my life easier and in turn(maybe) make turn also help others in one way or another as well'
          },
          {
            property: 'og:title',
            content: "a2z by  - Ogurinka Benjamin"
          },
          {
            property: 'og:site_name',
            content: 'Ogurinka Benjamin'
          },
          {
            property: 'og:image',
            content: 'https://res.cloudinary.com/simplytammy/image/upload/v1623217825/cover/Cover.png'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            name: 'twitter:card',
            content: 'https://res.cloudinary.com/simplytammy/image/upload/v1623217825/cover/Cover.png'
          },
          {
            name: 'twitter:description',
            content: 'A collection of products and projects I have built to make my life easier and in turn(maybe) make turn also help others in one way or another as well'
          },
          {
            name: 'twitter:image',
            content: 'https://res.cloudinary.com/simplytammy/image/upload/v1623217825/cover/Cover.png'
          },
          {
            name: 'robots',
            content: 'index,follow'
          }
        ]
      }
    },
  }
</script>
<style>
  .products {
    background: var(--primaryColor);
  }
</style>