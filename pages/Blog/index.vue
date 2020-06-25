<template>
	<div class="">
		<section class="og-hero sm blog">
			<Navbar />
			<div class="og-hero--content og-container">
				<div>
					<p class="info">Articles</p>
					<h1 class="title">Stuff I've written —</h1>
				</div>
			</div>
		</section>
		<div class="og-container">
			<section class="og-section articles">
				<h3 v-if="articles.length < 1" class="text-gray-600">No posts yet, stay tuned!</h3>
				<div class="grid-layout">

					<div v-for="article in articles" :key="article.id" @click="openArticle(article.id)" class="article">
						<img class="" :src="article.social_image" :alt="article.description">
						<div class="article--body">
							<div class="px-6 py-4">
								<h3 class="article--title">{{ article.title }}</h3>
								<p class="article--desc">{{ article.description }}</p>
							</div>
							<div class="pt">
								<span class="article--tag" v-for="tag in article.tag_list" :key="tag">
									#{{ tag }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<Footer />
	</div>
</template>

<script>
import blogService from '@/services/blogService'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: "Blog",
	scrollToTop: true,
	data() {
		return {
			articles: []
		}
	},
	components: {
		Navbar,
		Footer,
	},
	head() {
		return {
			title: "My Blog - Ogurinka Benjamin",
			meta: [
				{ name: 'description', content: 'I am an Ever Growing Creative, Christian, UI Designer, Frontend Developer and Student' },
				{ property: 'og:title', content: "My Blog - Ogurinka Benjamin" },
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
	methods: {
		async fetchArticles() {
			await blogService.fetchArticles()
				.then((response) => {
					switch (response.status) {
						case 200:
							{
								this.articles = response.data
								break
							}
						default:
							{
								this.articles = false
								break
							}
					}
				})
		},
		openArticle(id) {
			this.$router.push('/blog/' + id)
		}
	},
	mounted() {
		if (process.client) {
			this.$scrollTo('#__nuxt', 0, { force: true })
		}
		this.fetchArticles()
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}

</style>
