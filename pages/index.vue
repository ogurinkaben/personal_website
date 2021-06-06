<template>
  <div class="container">
    <section class="og-hero home">
      <Navbar />
      <div class="og-hero--content home og-container">
        <div class="animate__animated animate__fadeInUp">
          <h1 class="title  animate__animated animate__bounce uu">
            I Design & Develop Interactive Applications that define Experiences, Products, and Brands<span class="period"></span>
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
    <div class="bg--cta">
      <section class="og-section">
        <div class="og-container">
          <div class="og-section--heading is-relative animate__animated animate__fadeInDownBig">
            <h1 class="title">Personal Projects —</h1>
            <h1 class="cover-text">Personal Projects</h1>
            <p class="info">Collection of some of my most recent personal projects and works</p>
          </div>
          <div class="og-section--heading" data-aos="slide-up" data-aos-easing="ease">
            <h1 class="sub-title">Web Development<span class="period"></span></h1>
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
                <a href="https://chrome.google.com/webstore/detail/cool-chrome-landing-page/bbhbmkeopfdilmkndmngkahhcocjkbfg?hl=en&authuser=0" target="_blank">

                  <h1 class="title">Cool chrome <br>
                  </h1>

                  <p class="desc">
                    The default chrome landing page is boring,so I decided to make a simple extension that allows a custom new tab screen for Chrome Web Browser with a simple timer and dynamic backgrounds (WIP)
                  </p>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="project-card is-livid" lazy-background>
                <a href="https://git.ogurinkabenjamin.com/krowdback" target="_blank">
                  <h1 class="title">krowdback <br>
                  </h1>
                  <p class="desc">krowdback is a one-page HTML template for a crowd funding platform that helps you get started with sourcing for financial help or donating to a worth cause.</p>
                </a>
              </div>
            </div>
          </div>
          <div class="row" data-aos="slide-up" data-aos-easing="ease">
            <div class="column">
              <div class="project-card is-blue" lazy-background>
                <a href="https://www.kyleads.com/" target="_blank">

                  <h1 class="title">Kyleads <br>
                  </h1>

                  <p class="desc">Mockup to code implementation of the Homepage, Blog and other components for Kyleads: a Popup And Quiz Maker Built To Generate More Leads - Faster</p>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="project-card is-son" lazy-background>
                <a href="https://sonergy.io/" target="_blank">
                  <h1 class="title">Songery <br>
                  </h1>
                  <p class="desc">Homepage website development for Sonergy, a blockchain-based data integrity protocol that connects businesses, researchers, and data providers to access quality and trustless data that will inform their strategic business decisions.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="og-section">
        <div class="og-container">
          <div class="og-section--heading" data-aos="slide-up" data-aos-easing="ease">
            <h1 class="sub-title">UI Design <span class="period"></span></h1>
          </div>
          <div class="row" data-aos="slide-up" data-aos-easing="ease">
            <div class="column">
              <div class="design-card">
                <a href="https://dribbble.com/shots/15028735-Debtor-Tracker" target="_blank">
                  <div>
                    <img data-src="https://cdn.dribbble.com/users/4073305/screenshots/15028735/media/8d03b22da58587dea128424d46c9eed3.png" alt="Payback" v-lazy-load>
                    <div class="info">
                      <p>Mobile app design for a debtor tracker application that allows users to keep track of loans sent out as well as loans received from peers.</p>
                    </div>

                  </div>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="design-card">
                <a href="#!">
                  <div>
                    <img data-src="https://res.cloudinary.com/simplytammy/image/upload/v1611012304/melvin_manni.png" alt="Dyces Mobile" v-lazy-load>
                    <div class="info">
                      <p>Personal Portfolio Design Created to provide a beautiful representation of Melvin's skillset as a React/Nodejs Developer.</p>
                    </div>
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
                     <div class="info">
                      <p>
                      A task management app for productive individuals and teams that allows them to easily manage and plan projects.
                      </p>
                    </div>

                  </div>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="design-card">
                <a href="https://dribbble.com/shots/10496495-Fintech-mobile-app-UI" target="_blank">
                  <div>
                    <img data-src="../assets/img/design-cards/dyces_mobile.png" alt="Dyces Mobile" v-lazy-load>
                     <div class="info">
                      <p>Design of a mobile app for an online wallet that provides an easy and flexible way to save and manage funds while investing and profiting.</p>
                    </div>

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
                     <div class="info">
                      <p>E-commerce website design for a Headphone store for people who are passionate about great sound.</p>
                    </div>

                  </div>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="design-card">
                <a href="https://dribbble.com/shots/15500679-Array-HR" target="_blank">
                  <div>
                    <img data-src="https://cdn.dribbble.com/users/4073305/screenshots/15500679/media/89c270988c422acffc7c9d91898f7b74.png" alt="JBL Xtreme 2" v-lazy-load>
                     <div class="info">
                      <p>Early Access page for a SAAS for HR management that focuses on easing recruitment, giving you more flexibility, and allowing you to focus on what matters most.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    <div class="">
      <div class="og-section  is-flex flex-center justify-center text-is-center ">
        <div class="og-section--heading">
          <h1 class="title">Want to see more of what I have done<span class="text-is-primary">?</span></h1>
          <div class=" text-is-center ">
            <nuxt-link class="og-link--button text-default  text-is-center " to="/contact">

              Leave a message <span class="ti-arrow-right"></span>

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