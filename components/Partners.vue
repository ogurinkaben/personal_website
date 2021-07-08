<template>
  <div class="og-container partners">
    <div class="og-section">
      <div class="og-section--heading text-is-center">
        <h1 class="title">Brands I've worked with <span class="period"></span></h1>
        <h1 class="cover-text">Worked with</h1>
      </div>
      <div class="partners-grid-area">
        <div class="partners-grid">
          <img data-src="https://res.cloudinary.com/simplytammy/image/upload/v1625737145/partners/logo.png" alt="Olete" v-lazy-load>
          <img data-src="../assets/img/partners/codeit-logo-dark.png" alt="codeit" v-lazy-load>
          <img data-src="../assets/img/partners/fd_logo.png" alt="Fliredoth" v-lazy-load>
          <img data-src="../assets/img/partners/doa.png" alt="DOA Graphics" v-lazy-load>
          <img data-src="https://res.cloudinary.com/simplytammy/image/upload/v1625434242/partners/logo-dark.png" alt="Sublime And Beauty" v-lazy-load>
          <img data-src="../assets/img/partners/eventpady.png" alt="Eventpady" v-lazy-load>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Partners',
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
<style>
.partners-grid-area {
  display: flex;
  min-height: 120px;
  align-content: center;
  justify-content: center;
  padding-bottom: 4rem;
}

.partners-grid {
  display: grid;
  grid-template-columns: 80px 80px 80px;
  grid-gap: 1rem;
  align-items: center;
}

.partners-grid img {
  max-width: 100%;
  height: 100px;
  object-fit: contain;
  filter: url("data:image/svg+xml;utf8,&lt;svg xmlns=\'http://www.w3.org/2000/svg\'&gt;&lt;filter id=\'grayscale\'&gt;&lt;feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale");
  filter: gray;
  -webkit-filter: grayscale(100%);
  transition: 0.5s ease-in-out;
}

</style>
