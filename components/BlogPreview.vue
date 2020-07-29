<template>
  <div class="blog-preview og-section">
    <!-- <div class="grid-bg "></div> -->
    <div class="og-container blog-preview -container">
      <div class="">
        <div class="og-section--heading is-relative">
          <h1 class="title text-is-white">Blog Post —</h1>
          <h1 class="cover-text text-is-muted--default">Blog Post </h1>
        </div>
        <div class="row">
          <div class="column">
            <div>
              <h1 class="blog-preview__title">{{article.title}}</h1>
              <p class="blog-preview__desc">{{article.description}}</p>
              <div class="pt">
                <button @click="openArticle(article.id, article.slug)" class="preview-btn">Continue Reading <span>&rarr;</span></button>
              </div>
            </div>
          </div>
          <div class="column">
            <img :data-src="article.cover_image" :alt="article.description" class="blog-preview__image" v-lazy-load>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blogService from '@/services/blogService'
export default {
  name: 'BlogPreview',
  data() {
    return {
      article: {}
    }
  },
  beforeMount() {
    this.fetchArticle()
  },
  methods: {
    async fetchArticle() {
      const articleId = '409388'
      await blogService.fetchArticleById(articleId)
        .then((response => {
          switch (response.status) {
            case 200:
              {
                if (response.data.user.username != 'simplytammy') {
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
    },
    openArticle(id, slug) {
      this.$router.push(`/blog/post/${id}` + "-" + slug)
    }
  }
}

</script>
<style>
.preview-btn {
  display: inline-block;
  padding: 16px;
  font-size: 15px;
  text-align: center;
  color: #3363ff;
  background-color: #e6ecff;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

.preview-btn span {
  margin-left: 1rem;
  transition: 0.2s;
}

.preview-btn:hover,
.preview-btn:active {
  background-color: #dce4ff;
}

.preview-btn:hover span,
.preview-btn:active span {
  margin-left: 1.5rem;
}

.blog-preview {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 50vh;
  padding: 4rem 0;
  background: var(--primaryColor);
  background-color: var(--primaryColor);
}

.blog-preview .blog-preview -container {
  position: relative;
  z-index: 100 !important;
  background: transparent;
}

.grid-bg {
  position: absolute;
  background-color: transparent;
  background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);
  height: 100%;
  background-size: 50px 50px;
  width: 100%;
  z-index: 0;
}

.blog-preview .blog-preview__title {
  font-size: 26px;
  color: #fff;
  margin: 1rem 0;
  color: var(--defaultColor);
}

.blog-preview .blog-preview__desc {
  font-size: 16px;
  color: #fff;
}

.blog-preview .blog-preview__image {
  height: 300px;
  width: 100%;
  object-fit: cover;
  display: block;
  margin-top: 2rem;
}

@media screen and (max-width:768px) {
  .blog-preview .blog-preview__title {
    font-size: 20px;
    color: #fff;
    margin: 1rem 0;
    color: var(--defaultColor);
  }

  .blog-preview .blog-preview__desc {
    font-size: 14px;
    color: #fff;
  }

  .blog-preview .blog-preview__image {
    height: 200px;
    width: 100%;
    object-fit: cover;
    display: block;
    margin-top: 2rem;
  }
}

</style>
