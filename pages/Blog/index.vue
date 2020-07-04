<template>
	<div class="">
		<section class="og-hero sm blog">
			<Navbar />
			<div class="og-hero--content og-container">
				<div class="animate__animated animate__backInDown">
					<p class="info">Articles</p>
					<h1 class="title">Some carefully curated content —</h1>
				</div>
			</div>
		</section>
		<div class="og-container">
			<section class="og-section articles">
				<div class="loader" v-if="articlesLoading"></div>
				<div class="grid-layout animate__animated animate__fadeInUpBig">

					<div v-for="article in articles" :key="article.id" @click="openArticle(article.id, article.slug)" class="article">
						<img class="" :data-src="article.social_image" :alt="article.description" v-lazy-load>
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
			articles: [],
			articlesLoading: false
		}
	},
	components: {
		Navbar,
		Footer,
	},
	head() {
		return {
			title: "Blog - Ogurinka 'Tammy' Benjamin",
			meta: [
				{ name: 'description', content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.' },
				{ property: 'og:title', content: "Ogurinka 'Tammy' Benjamin - Ever growing creative" },
				{ property: 'og:site_name', content: 'Tammy' },
				{ property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.jp' },
				{ property: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.j' },
				{ name: 'twitter:description', content: 'He design User Interfaces and build Interactive applications that define experiences, products and brands.' },
				{ name: 'twitter:image', content: 'https://pbs.twimg.com/profile_images/1245935060714500096/R8c_nZOS_400x400.jpg' },
				{ name: 'robots', content: 'index,follow' }
			]
		}
	},
	methods: {
		async fetchArticles() {
			this.articlesLoading = true
			await blogService.fetchArticles()
				.then((response) => {
					switch (response.status) {
						case 200:
							{
								this.articles = response.data
								this.articlesLoading = false
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
		openArticle(id, slug) {
			this.$router.push({
				path: `/blog/post/${id}-${slug}`,
				params: {
					id: id,
					slug: slug
				}
			})
		}
	},
	mounted() {
		if (process.client) {
			this.$scrollTo('#__nuxt', 0, { force: true })
		}
		this.fetchArticles()
		this.$nextTick(() => {
			this.$nuxt.$loading.start()
			setTimeout(() => this.$nuxt.$loading.finish(), 3000)
		})
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

.loader {
	border: 8px solid #f3f3f3;
	border-top: 8px solid var(--primaryColor);
	border-radius: 50%;
	width: 80px;
	height: 80px;
	margin: 0 auto;
	animation: spin 2s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

</style>
