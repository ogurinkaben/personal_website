<template>
  <div class="home">

    <section class="og-hero sm about">
      <Navbar />
      <div class="og-hero--content og-container">
        <div>
          <p class="info">About </p>
          <h1 class="title">A bit about Me —</h1>
        </div>
      </div>
    </section>
    <section class="og-section">
      <div class="og-container">
        <div class="og-section--heading">
          <p class="info pt">Hi, I am Ogurinka 'Tammy' Benjamin, a Natural Leader and Ever-growing creative who's drawn towards coaching people and fostering amazing creative teams.</p>
          <p class="info pt">You can say I am impact driven!</p>
          <p class="info pt">I am ambitious, innovative and love to build amazing and simple things as a hobby, while being open to new concepts, ideas and challenging paths. I have serious passion for UI designs, animations and creating intuitive, dynamic user experiences. </p>
          <p class="info pt">Currently, I live, work and play in Rivers, Nigeria and chasing a CS degree at the University of Port Harcourt, Nigeria.</p>
        </div>
        <div class="container w-x">
          <div class="tabs" v-cloak>
            <ul>
              <li v-for="(tab, index) in tabs" :class="{'is-active': show == index}">
                <a @click.prevent="show = index">{{tab.title}}</a></li>
            </ul>
          </div>
          <div v-cloak>

            <vue-page-transition name="fade-in-up" target="div" appear @click.native="navigate($event); alerts($event);">
              <div v-for="(tab, index) in tabs" v-if="show == index" :key="tab.id" v-html="tab.content"></div>
            </vue-page-transition>

          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition)
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'About',
  scrollToTop: true,
  components: {
    Navbar,
    Footer,
  },
  head() {
    return {
      title: "About  - Ogurinka 'Tammy' Benjamin",
      meta: [
        { name: 'description', content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.' },
        { property: 'og:title', content: "Ogurinka 'Tammy' Benjamin - About" },
        { property: 'og:site_name', content: 'Tammy' },
        { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.jp' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.j' },
        { name: 'twitter:description', content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.' },
        { name: 'twitter:image', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.jpg' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  },
  data() {
    return {
      show: 0,
      tabs: [{
          id: 1,
          title: "Work History",
          content: `      <div class="timeline">
        <ul>
          <li>
            <div class="content">
              <h3> <a href="http://uniract.com" class="og-link plain" target="_blank">Uniract Integtated Services </a></h3>
              <p>Front-end Developer (Intern) </p>
            </div>
            <div class="time">
              <h4>Sep. 2018 - Nov. 2018</h4>
            </div>
          </li>

          <li>
            <div class="content">
              <h3><a href="#!" class="og-link plain">Bubble Innovation Hub </a></h3>
              <p>Front-end Developer (Intern)</p>
            </div>
            <div class="time">
              <h4>Feb. 2019 - July 2019</h4>
            </div>
          </li>

          <li>
            <div class="content">
              <h3><a href="https://www.proinsight.com.ng/" class="og-link plain" target="_blank">Proinsight
                  Technologies. </a></h3>
              <p>Web Designer &amp; Front-end Developer (Part-time)</p>
            </div>
            <div class="time">
              <h4>July, 2019 - Jan. 2020</h4>
            </div>
          </li>

          <li>
            <div class="content">
              <h3><a href="https://eventpady.com/" class="og-link plain" target="_blank">EventPady </a></h3>
              <p>UI Developer</p>
            </div>
            <div class="time">
              <h4>Nov. 2019 - Feb. 2020</h4>
            </div>
          </li>

          <li>
            <div class="content">
              <h3><a href="http://zebulloners.com/" class="og-link plain" target="_blank">Zebullon Developers Network </a></h3>
              <p>Full-stack Developer (Full Time)</p>
            </div>
            <div class="time">
              <h4>Feb. 2020 - June, 2020</h4>
            </div>
          </li>
          <li>
            <div class="content">
              <h3><a href="http://studihub.com.ng" class="og-link plain" target="_blank">Studihub </a></h3>
              <p>Full-stack Developer (Contract)</p>
            </div>
            <div class="time">
              <h4>May, 2020 - Present</h4>
            </div>
          </li>

          <div style="clear:both;"></div>
        </ul>

      </div>`
        },
        {
          id: 2,
          title: "Community Impact",
          content: `
          <div class="timeline">
        <ul>

          <li>
            <div class="content">
              <h3><a href="https://studentpartners.microsoft.com" target="_blank" class="og-link plain"> Microsoft </a> </h3>
              <p>Student Partner</p>
            </div>
            <div class="time">
              <h4>Jan. 2020 - Present</h4>
            </div>
          </li>
          <li>
            <div class="content">
              <h3> <a href="https://andela.com/alc/" target="_blank" class="og-link plain"> Google Africa <br>Developer Scholarship</a></h3>
              <p>Mentor</p>
            </div>
            <div class="time">
              <h4>May, 2020 - Present</h4>
            </div>
          </li>
          <li>
            <div class="content">
              <h3> <a href="https://irl.dev" target="_blank" class="og-link plain"> DEV irl</a></h3>
              <p>Organizer</p>
            </div>
            <div class="time">
              <h4>August, 2019 - Present</h4>
            </div>
          </li>
          <li>
            <div class="content">
              <h3><a href="https://codeit.today" class="og-link plain" target="_blank">codeit </a></h3>
              <p>Public Relations</p>
            </div>
            <div class="time">
              <h4>May, 2020 - Present</h4>
            </div>
          </li>


          <li>
            <div class="content">
              <h3><a href="https://codeclubph.tech" target="_blank" class="og-link plain">Codeclub PH</a> &amp; <a href="https://twitter.com/dscuniport" target="_blank" class="og-link plain"> DSC, Uniport</a></h3>
              <p>Co-Lead and Mentor</p>
            </div>
            <div class="time">
              <h4>Sep. 2019 - Present</h4>
            </div>
          </li>

          <li>
            <div class="content">
              <h3> <a href="https://ingressive.co" target="_blank" class="og-link plain"> Ingressive</a></h3>
              <p>Campus Ambassador</p>
            </div>
            <div class="time">
              <h4>April, 2019 - June, 2020</h4>
            </div>
          </li>

          <div style="clear:both;"></div>
        </ul>

      </div>`
        },
      ]
    }
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
  methods: {
    navigate: function(e) {
      if (e.target.dataset.show) {
        e.preventDefault();
        this.show = e.target.dataset.show;
      }
    },
    alerts: function(e) {
      if (e.target.dataset.alert) {
        e.preventDefault();
        alert(e.target.dataset.alert);
      }
    }
  }
}

</script>
<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-up-enter,
.fade-up-leave-to {
  height: 0;
  transform: translateY(30px);
  opacity: 0;
}

.w-x {
  min-height: 100vh;
}

</style>
