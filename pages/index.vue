<template>
  <div class="container">
    <section class="og-hero home">
      <Navbar />
      <div class="og-hero--content home og-container">
        <div class="animate__animated animate__fadeInUp">
          <h1 class="title  animate__animated animate__bounce uu">
            I Design Interactive Applications that define experiences, products, and brands<span class="period"></span>
          </h1>
          <div>
            <nuxt-link class="og-link--button" to="/contact">

             Say Hello <span class="ti-arrow-right"></span>

            </nuxt-link>
          </div>
        </div>
        <span class="scroll"></span>
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
            <div class="project-card is-dsc" lazy-background>
              <a href="https://getcolr.xyz" target="_blank">
                <h1 class="title">GetColr <br>
                  </h1>

                <p class="desc">A Web App that easily helps you generate colours from an image </p>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="project-card is-io" lazy-background>
              <a href="https://iohub.ng" target="_blank">
                <h1 class="title">ioHub <br>
                  </h1>
                <p class="desc">Website for ioHub, a creative agency focused on UI/UX, Web Design and Web Development
                  services.</p>
              </a>
            </div>
          </div>
        </div>
        <div class="row" data-aos="slide-up" data-aos-easing="ease">
          <div class="column">
            <div class="project-card is-dupian" lazy-background>
              <a href="https://everylink.space" target="_blank">
               
                <h1 class="title">Everylink <br>
                  </h1>

                <p class="desc">Everylink is a super simple URL shortener specially designed and developed for event
                  organizers and social media enthusiasts to give them a fast way to easily share clean content URLs</p>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="project-card is-livid" lazy-background>
              <a href="https://ogurinkaben.github.io/krowdback" target="_blank">
                <h1 class="title">krowdback <br>
                 </h1>
                <p class="desc">krowdback is a one-page HTML template for a crowd funding platform that  helps you get started with sourcing for financial help or donating to a worth cause.</p>
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
               <a href="https://dribbble.com/shots/14868094-Macbuddy/attachments/6579205?mode=media" target="_blank">
              <div>
                <img data-src="https://res.cloudinary.com/simplytammy/image/upload/v1610052334/b21f6ae8aa6d268b01737d1208815103.png" alt="Macbudyy" v-lazy-load>

              </div>
               </a>
            </div>
          </div>
          <div class="column">
            <div class="design-card">
              <a href="#!">
              <div>
                <img data-src="https://res.cloudinary.com/simplytammy/image/upload/v1611012304/melvin_manni.png" alt="Dyces Mobile" v-lazy-load>

              </div>
              </a>
            </div>
          </div>
        </div>
        <div class="row" data-aos="slide-up" data-aos-easing="ease">
          <div class="column">
            <div class="design-card">
               <a href="#!">
              <div>
                <img data-src="../assets/img/design-cards/taskAppUI.png" alt="Task App UI" v-lazy-load>

              </div>
               </a>
            </div>
          </div>
          <div class="column">
            <div class="design-card">
              <a href="https://dribbble.com/shots/10496495-Fintech-mobile-app-UI" target="_blank">
              <div>
                <img data-src="../assets/img/design-cards/dyces_mobile.png" alt="Dyces Mobile" v-lazy-load>

              </div>
              </a>
            </div>
          </div>
        </div>
        <div class="row" data-aos="slide-up" data-aos-easing="ease">
          <div class="column">
            <div class="design-card">
              <a href="https://dribbble.com/shots/14892340-Headphone-E-commerce-Design" target="_blank">
              <div>
                <img data-src="https://res.cloudinary.com/simplytammy/image/upload/v1610052301/decf88b968cd98f4e1d1b06dc4be3e63.png" alt="Skull Candy" v-lazy-load>

              </div>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="design-card">
                <a href="https://dribbble.com/shots/14872495-JBL-Xtreme-2-Product-Page" target="_blank">
              <div>
                <img data-src="https://res.cloudinary.com/simplytammy/image/upload/v1610052720/40220e165f260f7da0ddedd3a3f2f672.png" alt="JBL Xtreme 2" v-lazy-load>
              </div>
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    <div class="bg--white">
      <div class="og-section  is-flex flex-center justify-center text-is-center ">
        <div class="og-section--heading">
          <h1 class="title">Want to see more of what I have done<span class="text-is-primary">?</span></h1>
          <div class=" text-is-center ">
          <nuxt-link class="og-link--button text-default  text-is-center " to="/contact">

             Say Hello <span class="ti-arrow-right"></span>

            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
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
        this.$scrollTo('#__nuxt', 0, {
          force: true
        })
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 3000)
      })
    },
    head() {
      return {
        title: "Ogurinka Benjamin - Ever growing creative",
        meta: [{
            name: 'description',
            content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.'
          },
          {
            property: 'og:title',
            content: "Ogurinka Benjamin - Ever growing creative"
          },
          {
            property: 'og:site_name',
            content: 'Ogurinka Benjamin'
          },
          {
            property: 'og:image',
            content: 'https://pbs.twimg.com/profile_images/1283040894808215553/CVvTaxEl_400x400.jpg'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            name: 'twitter:card',
            content: 'https://pbs.twimg.com/profile_images/1283040894808215553/CVvTaxEl_400x400.jpg'
          },
          {
            name: 'twitter:description',
            content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.'
          },
          {
            name: 'twitter:image',
            content: 'https://pbs.twimg.com/profile_images/1283040894808215553/CVvTaxEl_400x400.jpg'
          },
          {
            name: 'robots',
            content: 'index,follow'
          }
        ]
      }
    }
  }

</script>

<style>
  #flip {
    height: 50px;
    overflow: hidden;
    font-size: 36px;
  }

  #flip>div>div {
    color: #fff;
    padding: 4px 12px;
    height: 50px;
    margin-bottom: 45px;
    display: inline-block;
  }

  #flip div:first-child {
    animation: show 10s linear infinite;
  }

  #flip div div {
    background: #42c58a;
  }

  #flip div:first-child div {
    background: #4ec7f3;
  }

  #flip div:last-child div {
    background: #6a89cc;
  }

  @keyframes show {
    0% {
      margin-top: -270px;
    }

    5% {
      margin-top: -180px;
    }

    33% {
      margin-top: -180px;
    }

    38% {
      margin-top: -90px;
    }

    66% {
      margin-top: -90px;
    }

    71% {
      margin-top: 0px;
    }

    99.99% {
      margin-top: 0px;
    }

    100% {
      margin-top: -270px;
    }
  }

</style>
