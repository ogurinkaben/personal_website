<template>
  <div class="home">

    <section class="og-hero sm about">
      <Navbar />
      <div class="og-hero--content og-container">
        <div class="animate__animated animate__fadeInUp">
          <p class="info">About </p>
          <h1 class="title">A bit about Me —</h1>
        </div>
      </div>
    </section>
    <section class="og-section">
      <div class="og-container">
        <div class="og-section--heading animate__animated animate__fadeInDown">
          <p class="info pt"> I am a web creative with a love for beautiful and functional web content. I am ambitious, innovative, and love to build amazing and simple things as a hobby while being open to new concepts, ideas, and challenging paths. I have a serious passion for UI designs, animations, and creating intuitive, dynamic user experiences.</p>
          <p class="info pt">Currently, I live, work and play in Rivers, Nigeria while chasing a CS degree at the University of Port Harcourt, Nigeria.</p>
        </div>
        <div class="container w-x animate__animated animate__fadeInUpBig ">
          <div class="tabs" v-cloak>
            <ul>
              <li v-for="(tab, index) in tabs" :class="{'is-active': show == index}" :key="tab.id">
                <a @click.prevent="show = index">{{tab.title}}</a></li>
            </ul>
          </div>
          <div v-cloak>

            <transition-group name="fade" @click="navigate($event); alerts($event);">
              <div v-for="(tab, index) in tabs" :key="tab.id">
                <div v-html="tab.content" v-if="show == index"></div>
              </div>
            </transition-group>

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
        title: "About  - Ogurinka Benjamin",
        meta: [{
            name: 'description',
            content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.'
          },
          {
            property: 'og:title',
            content: "Ogurinka Benjamin"
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
    },
    data() {
      return {
        show: 0,
        tabs: [{
            id: 1,
            title: "Work ",
            content: `      <div class="timeline">
     	<ul>
       		<li>
     			<div class="content">
     				<h3>HoloAsh</h3>
     				<p>UX Research (Intern)</p>
     			</div>
     			<div class="time">
     				<h4>Feb, 2021 - May 2021</h4>
     			</div>
     		</li>
     		<li>
     			<div class="content">
     				<h3>UsefulPDF </h3>
     				<p>User Interface Designer (Contract)</p>
     			</div>
     			<div class="time">
     				<h4>Feb, 2021 - Present</h4>
     			</div>
     		</li>

          		<li>
     			<div class="content">
     				<h3>Studihub</h3>
     				<p>Full-stack Developer (Contract)</p>
     			</div>
     			<div class="time">
     				<h4>May, 2020 - November 2020</h4>
     			</div>
     		</li>
     		<li>
     			<div class="content">
     				<h3>Zebullon Developers Network</h3>
     				<p>Full-stack Developer (Full Time)</p>
     			</div>
     			<div class="time">
     				<h4>Feb. 2020 - June, 2020</h4>
     			</div>
     		</li>
     		<li>
     			<div class="content">
     				<h3>Uniract Integtated Services</h3>
     				<p>Front-end Developer (Intern) </p>
     			</div>
     			<div class="time">
     				<h4>Sep. 2018 - Nov. 2018</h4>
     			</div>
     		</li>
     		<li>
     			<div class="content">
     				<h3>Bubble Innovation Hub </h3>
     				<p>Front-end Developer (Intern)</p>
     			</div>
     			<div class="time">
     				<h4>Feb. 2019 - July 2019</h4>
     			</div>
     		</li>
     		<li>
     			<div class="content">
     				<h3>Proinsight Technologies.</h3>
     				<p>Web Designer &amp; Front-end Developer (Part-time)</p>
     			</div>
     			<div class="time">
     				<h4>July, 2019 - Jan. 2020</h4>
     			</div>
     		</li>
     		<li>
     			<div class="content">
     				<h3>Attenvo</h3>
     				<p>UI Developer</p>
     			</div>
     			<div class="time">
     				<h4>Nov. 2019 - Feb. 2020</h4>
     			</div>
     		</li>
     		<div style="clear:both;"></div>
     	</ul>
     </div>`
          },
          {
            id: 2,
            title: "Volunteer",
            content: `
          <div class="timeline">
    	<ul>
    		<li>
    			<div class="content">
    				<h3>Developer Student Clubs, UNIPORT</h3>
    				<p>Lead</p>
    			</div>
    			<div class="time">
    				<h4>Aug. 2020 - Present</h4>
    			</div>
    		</li>
    		<li>
    			<div class="content">
    				<h3> Microsoft Learn </h3>
    				<p>Student Partner </p>
    			</div>
    			<div class="time">
    				<h4>Jan. 2020 - Aug. 2020</h4>
    			</div>
    		</li>
    		<li>
    			<div class="content">
    				<h3>Google Africa <br>Developer Scholarship</h3>
    				<p>Mentor</p>
    			</div>
    			<div class="time">
    				<h4>May, 2020 - Oct. 2020</h4>
    			</div>
    		</li>
    		<li>
    			<div class="content">
    				<h3> DEV irl</h3>
    				<p>Organizer</p>
    			</div>
    			<div class="time">
    				<h4>August, 2019 - Present</h4>
    			</div>
    		</li>
    		<li>
    			<div class="content">
    				<h3>UNIPORT Tech Community</h3>
    				<p>Community Lead</p>
    			</div>
    			<div class="time">
    				<h4>Sep. 2019 - Present</h4>
    			</div>
    		</li>
    		<li>
    			<div class="content">
    				<h3> Ingressive</h3>
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
        this.$scrollTo('#__nuxt', 0, {
          force: true
        })
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