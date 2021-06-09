<template>
  <div class="container">

    <section class="og-hero sm versions">
      <Navbar />
      <div class="og-hero--content og-container ">
        <div class="animate__animated animate__fadeInUp">
          <p class="info">
            Website
          </p>
          <h1 class="title">Versions —</h1>

        </div>
      </div>
    </section>
    <section class="og-section max-padding-bottom">
      <div class="og-container">
        <div class="og-section--heading">
          <h1 class="title">List of website versions —</h1>

        </div>
        <div class="row">
          <div class="column">
            <div class="version--item">
              <div class="card">
                <div class="card-content">
                  <h1 class="card-header">Version 1</h1>
                  <a href="https://ogb-v1.netlify.app/" target="_blank" class="card-btn">Explore <span>&rarr;</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="version--item">
              <div class="card">
                <div class="card-content">
                  <h1 class="card-header">Version 2</h1>
                  <a href="https://ogb-v2.netlify.app/" target="_blank" class="card-btn">Explore <span>&rarr;</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="column">
            <div class="version--item">
              <div class="card">
                <div class="card-content">
                  <h1 class="card-header">Version 2.1</h1>
                  <a href="https://ogb-v2-1.netlify.app" target="_blank" class="card-btn">Explore <span>&rarr;</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="version--item">
              <div class="card">
                <div class="card-content">
                  <h1 class="card-header">Version 3</h1>
                  <a href="https://ogb-v3.netlify.app/" target="_blank" class="card-btn">Explore <span>&rarr;</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="column">
            <div class="version--item">
              <div class="card">
                <div class="card-content">
                  <h1 class="card-header">Version 4</h1>
                  <a href="https://ogb-v4.netlify.app" target="_blank" class="card-btn">Explore <span>&rarr;</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="version--item">
              <div class="card">
                <div class="card-content">
                  <h1 class="card-header">Version 5 (current)</h1>
                  <nuxt-link to="/" class="card-btn">Explore <span>&rarr;</span></nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  name: "Versions",
  scrollToTop: true,
  components: {
    Navbar,
    Footer
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
  head() {
    return {
      title: "Website Versions",
      meta: [
        { name: 'description', content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.' },
        { property: 'og:title', content: "Ogurinka Benjamin - Website Versions" },
        { property: 'og:site_name', content: 'Ogurinka Benjamin' },
        { property: 'og:image', content: 'https://res.cloudinary.com/simplytammy/image/upload/v1623217825/cover/Cover.png' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'https://res.cloudinary.com/simplytammy/image/upload/v1623217825/cover/Cover.png' },
        { name: 'twitter:description', content: 'I design User Interfaces and build Interactive applications that define experiences, products and brands.' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/simplytammy/image/upload/v1623217825/cover/Cover.png' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  }
}

</script>

<style scoped>
.max-padding-bottom {
  padding-bottom: 10rem;
}

.version--item {
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;
  min-height: 80px;
  width: 100%;
  margin: 0.5rem auto;
  display: flex;
  align-items: center;
}

.version--item:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
}


.card-content {
  padding: 3rem 3rem;
}

.card-header {
  font-size: 20px;
  font-weight: bold;
  color: var(--defaultColor);
  margin-bottom: 1.5rem;
}

.card-text {
  font-size: 16px;
  letter-spacing: 0.1rem;
  line-height: 1.7;
  color: #3d3d3d;
  margin-bottom: 2.5rem;
}

@media screen and (max-width:768px) {
  .version--item {
    min-height: auto;
  }

  .card-text {
    font-size: 14px;
  }

  .card-content {
    padding: 3rem 1rem;
  }
}

.card-btn {
  display: inline-block;
  padding: 16px;
  font-size: 15px;
  text-align: center;
  color: #3363ff;
  border-bottom: 10px solid #e6ecff;
  border-radius: 0;
  transition: 0.2s;
  cursor: pointer;
}

.card-btn span {
  margin-left: 1rem;
  transition: 0.2s;
}

.card-btn:hover,
.card-btn:active {
  background-color: #dce4ff;
}

.card-btn:hover span,
.card-btn:active span {
  margin-left: 1.5rem;
}

</style>
