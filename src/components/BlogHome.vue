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
  </div>
</template>

<script>
import blogService from '@/services/blogService'
import Navbar from '@/components/Navbar.vue'
export default {
  data() {
    return {
      articles: []
    }
  },
  components: {
    Navbar,
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
    openArticle(articleId) {
      this.$router.push('/blog/post/' + articleId)
    }
  },
  mounted() {
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
