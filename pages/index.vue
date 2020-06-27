<template>
  <div class="container">

    <section class="og-hero">
      <Navbar />
      <div class="og-hero--content og-container">
        <div>
          <h1 class="title">Hello, I'm Tammy —</h1>
          <p class="info">
            I design User Interfaces and build Interactive applications that define experiences, products and brands.
          </p>
          <div class="is-relative">
            <router-link to="/about" class="text-default">
              <div class="og-button animate has-shadow">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                A bit more <i class="ti-arrow-right"></i>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="og-section">
      <div class="og-container">
        <div class="og-section--heading">
          <h1 class="title">Recent Projects —</h1>
          <p class="info">Collection of some of my most recent projects and works</p>
        </div>
        <div class="og-section--heading">
          <h1 class="sub-title">Web <span class="period"></span></h1>
        </div>
        <div class="row">
          <div class="column">
            <div class="project-card is-ultra">
              <a href="https://everylink.space" target="_blank">
                <img src="../assets/img/design-cards/ctr.png" alt="ctr icon">
                <h1 class="title">Everylink <br>
                  <span>—</span></h1>

                <p class="desc">Everylink is a super simple URL shortener specially designed and developed for event organizers and social media enthusiasts to give them a fast way to easily share clean content URLs</p>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="project-card is-gray">
              <a href="http://cscplayground.xyz/posts" target="_blank">
                <img src="../assets/img/design-cards/lc.png" alt="line icon">
                <h1 class="title">Playground <br>
                  <span>—</span></h1>
                <p class="desc">A Mini social media for my school department. Built as part of a practice project to get acquainted with Backend Basics</p>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="project-card is-dark">
              <a href="https://airpods-store.codeit.today" target="_blank">
                <img src="../assets/img/design-cards/screen.png" alt="screen icon">
                <h1 class="title">Airpods Store <br>
                  <span>—</span></h1>

                <p class="desc">A Frontend E-commerce template built as part of a training series for beginner - intermediate level web developers</p>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="project-card is-mint">
              <a href="https://terin.xyz" target="_blank">
                <img src="../assets/img/design-cards/block.png" alt="Block icon">
                <h1 class="title">Terin <br>
                  <span>—</span></h1>
                <p class="desc">Official website for Terin, a tech start-up focused on technological growth and innovative products</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="og-section">
      <div class="og-container">
        <div class="og-section--heading">
          <h1 class="sub-title">Design <span class="period"></span></h1>
        </div>
        <div class="row">
          <div class="column">
            <div class="design-card">
              <div>
                <img src="../assets/img/design-cards/dyces_mobile.png" alt="Dyces Mobile">

              </div>
            </div>
          </div>
          <div class="column">
            <div class="design-card">
              <div>
                <img src="../assets/img/design-cards/taskAppUI.png" alt="Task App UI">

              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="design-card">
              <div>
                <img src="../assets/img/design-cards/cup-mockup.png" alt="Coffee Cup Mockup">

              </div>
            </div>
          </div>
          <div class="column">
            <div class="design-card">
              <div>
                <img src="../assets/img/design-cards/fitness-watch.png" alt="Fitness Watch">

              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="design-card">
              <div>
                <img src="../assets/img/design-cards/rev_mediaUI.png" alt="Rev Media">

              </div>
            </div>
          </div>
          <div class="column">
            <div class="design-card">
              <div>
                <img src="../assets/img/design-cards/double.png" alt="Double">
              </div>
            </div>
          </div>
        </div>

        <div class="is-relative text-is-center pt">
          <a href="https://portfolio.tammy.dev" class="text-default" target="_blank">
            <div class="og-button animate is-fill has-shadow">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              View Portfolio <i class="ti-agenda"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="og-container">
      <div class="og-section">
        <Testimonial />
      </div>
    </section>
    <section class="og-container">
      <div class="og-section">
        <Partners />
      </div>
    </section>
    <BlogPreview />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Partners from '../components/Partners'
import BlogPreview from '../components/BlogPreview'
export default {
  name: "Home",
  scrollToTop: true,
  components: {
    Navbar,
    Footer,
    Testimonial,
    Partners,
    BlogPreview
  },
  mounted() {
    if (process.client) {
      this.$scrollTo('#__nuxt', 0, { force: true })
    }
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  },
  head() {
    return {
      title: "Ogurinka Benjamin - Ever growing creative",
      meta: [
        { name: 'description', content: 'I am an Ever Growing Creative, Christian, UI Designer, Frontend Developer and Student' },
        { property: 'og:title', content: "Ogurinka Benjamin - Ever growing creative" },
        { property: 'og:site_name', content: 'Tammy' },
        { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.jp' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.j' },
        { name: 'twitter:description', content: 'I am an Ever Growing Creative, Christian, UI Designer, Frontend Developer and Student' },
        { name: 'twitter:image', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.jpg' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  }
}

</script>

<style>

</style>
