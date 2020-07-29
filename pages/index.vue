<template>
  <div class="container">

    <section class="og-hero home">
      <Navbar />
      <div class="og-hero--content home og-container">
        <div class="animate__animated animate__fadeInUp">
          <h1 class="title  animate__animated animate__bounce uu">Hi, I'm Tammy <span class="period"></span></h1>
          <p class="info animate__animated animate__fadeInUp"> I design User Interfaces and build Interactive Applications that define experiences, products, brands and helps businesses grow.</p>
        </div>
      </div>
    </section>
    <section class="og-section">
      <div class="og-container">
        <div class="og-section--heading is-relative animate__animated animate__fadeInDownBig">
          <h1 class="title">Recent Projects —</h1>
          <h1 class="cover-text">Recent Projects</h1>
          <p class="info">Collection of some of my most recent projects and works</p>
        </div>
        <div class="og-section--heading" data-aos="slide-up" data-aos-easing="ease">
          <h1 class="sub-title">Web <span class="period"></span></h1>
        </div>
        <div class="row" data-aos="slide-up" data-aos-easing="ease">
          <div class="column">
            <div class="project-card is-dupian" lazy-background>
              <a href="https://everylink.space" target="_blank">
                <img data-src="../assets/img/design-cards/ctr.png" alt="ctr icon" v-lazy-load>
                <h1 class="title">Everylink <br>
                  <span>—</span></h1>

                <p class="desc">Everylink is a super simple URL shortener specially designed and developed for event organizers and social media enthusiasts to give them a fast way to easily share clean content URLs</p>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="project-card is-livid" lazy-background>
              <a href="http://cscplayground.xyz/posts" target="_blank">
                <img data-src="../assets/img/design-cards/lc.png" alt="line icon" v-lazy-load>
                <h1 class="title">Playground <br>
                  <span>—</span></h1>
                <p class="desc">A Mini social media for my school department. Built as part of a practice project to get acquainted with Backend Basics</p>
              </a>
            </div>
          </div>
        </div>
        <div class="row" data-aos="slide-up" data-aos-easing="ease">
          <div class="column">
            <div class="project-card is-dark" lazy-background>
              <a href="https://airpods-store.codeit.today" target="_blank">
                <img data-src="../assets/img/design-cards/screen.png" alt="screen icon" v-lazy-load>
                <h1 class="title">Airpods Store <br>
                  <span>—</span></h1>

                <p class="desc">A Frontend E-commerce template built as part of a training series by codeit.today for beginner - intermediate level web developers</p>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="project-card is-mint" lazy-background>
              <a href="https://terin.xyz" target="_blank">
                <img data-src="../assets/img/design-cards/block.png" alt="Block icon" v-lazy-load>
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
        <div class="og-section--heading" data-aos="slide-up" data-aos-easing="ease">
          <h1 class="sub-title">Design <span class="period"></span></h1>
        </div>
        <div class="row" data-aos="slide-up" data-aos-easing="ease">
          <div class="column">
            <div class="design-card">
              <div>
                <img data-src="../assets/img/design-cards/dyces_mobile.png" alt="Dyces Mobile" v-lazy-load>

              </div>
            </div>
          </div>
          <div class="column">
            <div class="design-card">
              <div>
                <img data-src="../assets/img/design-cards/taskAppUI.png" alt="Task App UI" v-lazy-load>

              </div>
            </div>
          </div>
        </div>
        <div class="row" data-aos="slide-up" data-aos-easing="ease">
          <div class="column">
            <div class="design-card">
              <div>
                <img data-src="../assets/img/design-cards/cup-mockup.png" alt="Coffee Cup Mockup" v-lazy-load>

              </div>
            </div>
          </div>
          <div class="column">
            <div class="design-card">
              <div>
                <img data-src="../assets/img/design-cards/fitness-watch.png" alt="Fitness Watch" v-lazy-load>

              </div>
            </div>
          </div>
        </div>
        <div class="row" data-aos="slide-up" data-aos-easing="ease">
          <div class="column">
            <div class="design-card">
              <div>
                <img data-src="../assets/img/design-cards/rev_mediaUI.png" alt="Rev Media" v-lazy-load>

              </div>
            </div>
          </div>
          <div class="column">
            <div class="design-card">
              <div>
                <img data-src="../assets/img/design-cards/oke-daniel.png" alt="Oke Daniel Portfolio" v-lazy-load>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="og-container" data-aos="slide-up" data-aos-easing="ease">
      <div class="og-section">
        <Testimonial />
      </div>
    </section>
    <section class="og-container" data-aos="slide-up" data-aos-easing="ease">
      <div class="og-section">
        <Partners />
      </div>
    </section>
    <BlogPreview data-aos="slide-up" data-aos-easing="ease" />
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
      title: "Tammy - Ever growing creative",
      meta: [
        { name: 'description', content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.' },
        { property: 'og:title', content: "Tammy - Ever growing creative" },
        { property: 'og:site_name', content: 'Tammy' },
        { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1283040894808215553/CVvTaxEl_400x400.jpg' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'https://pbs.twimg.com/profile_images/1283040894808215553/CVvTaxEl_400x400.jpg' },
        { name: 'twitter:description', content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.' },
        { name: 'twitter:image', content: 'https://pbs.twimg.com/profile_images/1283040894808215553/CVvTaxEl_400x400.jpg' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

.uu {
  font-family: 'Kaushan Script', cursive;
}

</style>
