<template>
  <div class="products">
    <section class="og-hero">
      <Navbar />
      <div class="og-hero--content og-container is--centered">
        <div>
          <h1 class="title">Minimal and Powerful link tracking and analytics for you</h1>
          <p class="info">a2z (formerly everylink) is a super simple URL shortener/tracker made with ❤️ and specially designed and developed for content creators to give them a fast and simple way to easily share clean trackable content URLs</p>
          <div class="pt">
            <nuxt-link class="btn-grad" to="/contact">Request Access</nuxt-link>
          </div>
        </div>
        <span class="scroll"></span>
      </div>

    </section>
    <div class="">
      <section class="og-section is--flex">
        <div class="og-container">
          <div class="row start">
            <div class="column">
              <div class="product-info">
                <h3>Simple</h3>
                <p>
                  It's simple to use and interact with. a2z was created with the user in mind, with a simple interface that allows you to concentrate on what you need to do.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="product-info">
                <h3>Boost results</h3>
                <p>Discover who is clicking on your links. Knowing when and on which devices people interact with your content can help you make better decisions.</p>
              </div>
            </div>
            <div class="column">
              <div class="product-info">
                <h3>Free Forever</h3>
                <p>
                  a2z is and always will be free. You do not need to pay anything; simply create your links and you are ready to take advantage of a variety of awesome features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="og-section is--flex sm">
        <div class="og-container is-flex flex-center justify-center">
          <img src="../../assets/img/products/a2z/link.png" class="image" alt="">
        </div>
      </section>
      <div class="divider"></div>
      <div class="bg--dark">

        <div class="og-section  is-flex flex-center justify-center text-is-center ">
          <div class="og-section--heading">
            <h1 class="title text-is-white">Get more out of your links with powerful tools to assist you in growing and protecting your brand.</h1>
            <div class=" text-is-center ">
              <div class="pt">
                <nuxt-link class="btn-grad" to="/contact">Request Access</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  .products .og-hero {
    background: linear-gradient(to bottom, rgba(0, 9, 27, 0.7), rgba(0, 9, 27, 0.7)),
      url('../../assets/img/bg/a2z_bg-full.png') !important;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1rem;
  }

  @media only screen and (max-width: 960px) {
    .products .og-hero {
      background: linear-gradient(to bottom, rgba(0, 9, 27, 0.7), rgba(0, 9, 27, 0.7)),
        url('../../assets/img/bg/a2z_bg-mobile.png') !important;
    }
  }

  .product-info {
    padding: 1rem;
  }

  .product-info p {
    color: #808080;
    font-size: 1rem;
    opacity: 0.;
  }

  .product-info h3 {
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 1rem;
  }
</style>