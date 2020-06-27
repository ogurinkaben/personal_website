<template>
  <div class="og-container partners">
    <div class="og-section">
      <div class="og-section--heading text-is-center">
        <h1 class="title">Brands I've worked with <span class="period"></span></h1>
      </div>
      <div class="partners-grid-area">
        <div class="partners-grid">
          <img src="../assets/img/partners/olete_logo.png">
          <img src="../assets/img/partners/codeit-logo-dark.png">
          <img src="../assets/img/partners/fd_logo.png">
          <img src="../assets/img/partners/doa.jpg">
          <img src="../assets/img/partners/eventpady.png" class="ev">
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
  min-height: 100px;
  align-content: center;
  justify-content: center;
  padding-bottom: 4rem;
}

.partners-grid {
  display: grid;
  grid-template-columns: 60px 60px;
  grid-gap: 1rem;
  align-items: center;
}

.partners-grid img {
  max-width: 100%;
  max-height: 80px;
  object-fit: cover;
  filter: url("data:image/svg+xml;utf8,&lt;svg xmlns=\'http://www.w3.org/2000/svg\'&gt;&lt;filter id=\'grayscale\'&gt;&lt;feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale");
  filter: gray;
  -webkit-filter: grayscale(100%);
}


.partners-grid img.ev {
  grid-column: 1 /3;
}

</style>
