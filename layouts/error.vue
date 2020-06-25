<template>

  <div class="not-found">
    <section class="og-hero sm lost">
      <Navbar />
      <div class="og-hero--content og-container">
        <div>
          <p class="info">Ooops!</p>
          <h1 class="title" v-if="error.statusCode === 404">Page not found —</h1>
          <h1 class="title" v-else>An error occurred —</h1>
          <div class="is-relative">
            <router-link to="/" class="text-default">
              <div class="og-button animate has-shadow">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                Back Home </i>
              </div>
            </router-link>
          </div>
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
  name: 'Error',
  components: {
    Navbar,
    Footer,
  },
  props: ['error'],
  head() {
    return {
      title: "Something does not seem right!",
      meta: [
        { name: 'description', content: 'I am an Ever Growing Creative, Christian, UI Designer, Frontend Developer and Student' },
        { property: 'og:title', content: "About me - Ogurinka Benjamin" },
        { property: 'og:site_name', content: 'Tammy' },
        { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.jp' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.j' },
        { name: 'twitter:description', content: 'I am an Ever Growing Creative, Christian, UI Designer, Frontend Developer and Student' },
        { name: 'twitter:image', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.jpg' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}

</script>
<style>

</style>
