<template>
  <div class="products">
    <section class="og-hero sm ">
      <Navbar />
      <div class="og-hero--content og-container is--centered">
        <div>
        		<h1 class="title">Made with ❤️</h1>
            <p class="info">Still working on this, check back later</p>
        </div>
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
        title: "Made by  - Ogurinka Benjamin",
        meta: [{
            name: 'description',
            content: 'A collection of products and projects I have built to make my life easier and in turn(maybe) make turn also help others in one way or another as well'
          },
          {
            property: 'og:title',
            content: "Made by - Ogurinka Benjamin"
          },
          {
            property: 'og:site_name',
            content: 'Made by - Ogurinka Benjamin'
          },
          {
            property: 'og:image',
            content: 'https://res.cloudinary.com/simplytammy/image/upload/v1624711222/persona/2.png'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            name: 'twitter:card',
            content: 'https://res.cloudinary.com/simplytammy/image/upload/v1624711222/persona/2.png'
          },
          {
            name: 'twitter:description',
            content: 'A collection of products and projects I have built to make my life easier and in turn(maybe) make turn also help others in one way or another as well'
          },
          {
            name: 'twitter:image',
            content: 'https://res.cloudinary.com/simplytammy/image/upload/v1624711222/persona/2.png'
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