<template>
  <div class="">
    <section class="og-hero sm blog" v-bind:style="{background:'#00091b',background: 'linear-gradient(to bottom, rgba(0, 9, 27, 0.9), rgba(0, 9, 27, 0.9)),url(' + article.cover_image + ')  no-repeat center center / cover' }">
      <Navbar />
      <div class="og-hero--content og-container">
        <div class="animate__animated animate__fadeInUp">
          <p class="info">{{article.published_at | moment}}</p>
          <h1 class="title" v-if="!article">That post can't be found.</h1>
          <h1 class="title">{{ article.title }} —</h1>
        </div>
      </div>
    </section>
    <section class="og-section article-single">
      <div class="og-container">
        <div class="half-width">
          <div class="article-single-body" v-html="article.body_html"></div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import blogService from '@/services/blogService'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import moment from 'moment'
export default {
  name: "BlogPost",
  scrollToTop: true,
  data() {
    return {
      article: {}
    }
  },
  beforeMount() {
    this.fetchArticle()
  },
  components: {
    Navbar,
    Footer,
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
  filters: {
    moment: function(date) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  methods: {
    async fetchArticle() {
      const articleId = this.$route.params.id
      await blogService.fetchArticleById(articleId)
        .then((response => {
          switch (response.status) {
            case 200:
              {
                if (response.data.user.username != 'ogurinkaben') {
                  this.article = false;
                  this.$router.push('/error')
                } else {
                  this.article = response.data
                }
                break
              }
            default:
              {
                this.article = false
                break
              }
          }
        }))
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        { name: 'description', content: this.article.description },
        { property: 'og:title', content: this.article.title },
        { property: 'og:site_name', content: 'Ogurinka Benjamin' },
        { property: 'og:image', content: this.article.cover_image },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: this.article.cover_image },
        { name: 'twitter:description', content: this.article.description },
        { name: 'twitter:image', content: this.article.cover_image },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('~/assets/syntaxHighlight.css')

</style>
