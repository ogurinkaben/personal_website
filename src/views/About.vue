<template>
	<div class="home">

		<section class="og-hero sm about">
			<Navbar />
			<div class="og-hero--content og-container">
				<div>
					<p class="info">About me</p>
					<h1 class="title">Ogurinka Benjamin —</h1>
				</div>
			</div>
		</section>
		<section class="og-section">
			<div class="og-container">
				<div class="og-section--heading">
					<h1 class="sub-title">A bit about me <span class="period"></span></h1>
					<p class="info">Hi, I am Tammy. I code for fun and build amazingly beautiful and simple things as a hobby. I pay attention to best practices known to me
						and I'm always open to learn new things and take on challenging paths.</p>
					<p class="info">When I am not coding, I serve as a mentor to younger developers and people with little to zero knowlege about where and how to start there development journey.</p>
				</div>
				<div class="og-section--heading pt">
					<h1 class="sub-title clear">Tools and tech <span class="period"></span></h1>
				</div>
				<div class="is_flexed styled-list half-width">
					<ul>
						<li>Bootstrap</li>
						<li>Bulma</li>
						<li>CSS</li>
						<li>Canva</li>
						<li>Dart </li>
						<li>Express </li>
						<li>Figma </li>
						<li>Firebase</li>
					</ul>
					<ul>
						<li>GitHub</li>
						<li>GitLab</li>
						<li>Heroku</li>
						<li>HTML</li>
						<li>JAMstack </li>
						<li>Javascript </li>
						<li>MongoDB </li>
					</ul>
					<ul>
						<li>Netlify</li>
						<li>Node.js </li>
						<li>PHP </li>
						<li>Vercel </li>
						<li>Vue.js </li>
						<li>Wireflow </li>
						<li>Wordpress</li>
					</ul>
				</div>
				<div class="container section">
					<div class="tabs" v-cloak>
						<ul>
							<li v-for="(tab, index) in tabs" :class="{'is-active': show == index}"><a @click.prevent="show = index">{{tab.title}}</a></li>
						</ul>
					</div>
					<div v-cloak>
						<transition-group name="fade-up" target="div" appear @click.native="navigate($event); alerts($event);">
							<div v-for="(tab, index) in tabs" v-if="show == index" :key="tab.id" v-html="tab.content"></div>
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
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: 'About',
	components: {
		Navbar,
		Footer,
	},
	metaInfo() {
		return {
			title: "About me - Ogurinka Benjamin",
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
      <div class="og-section">
        <div class="">

          <div class="work">
            <span class="date">May, 2020 - Present</span>
            <h5 class="company"><a href="https://andela.com/alc/" target="_blank" class="og-link plain"> Google Africa <br>Developer Scholarship</a></h5>
            <p class="role">Mentor</p>
          </div>
          <div class="work">
            <span class="date">May, 2020 - Present</span>
            <h5 class="company"><a href="#!" target="_blank" class="og-link plain"> codeit</a></h5>
            <p class="role">Public Relations</p>
          </div>
          <div class="work">
            <span class="date">Jan. 2020 - Present</span>
            <h5 class="company"><a href="https://studentpartners.microsoft.com" target="_blank" class="og-link plain"> Microsoft </a> </h5>
            <p class="role">Student Partner</p>
          </div>
          <div class="work">
            <span class="date">Sep. 2019 - Present</span>
            <h5 class="company"><a href="https://codeclubph.tech" target="_blank" class="og-link plain">Codeclub PH</a> &amp; <a href="https://twitter.com/dscuniport" target="_blank" class="og-link plain"> DSC, Uniport</a></h5>
            <p class="role">Co-Lead and Mentor</p>
          </div>
          <div class="work">
            <span class="date">April, 2019 - Present</span>
            <h5 class="company"><a href="https://ingressive.co" target="_blank" class="og-link plain"> Ingressive</a></h5>
            <p class="role">Campus Ambassador</p>
          </div>
        </div>
  
      </div>`
				},
			]
		}
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

</style>
