<template>
  <div class="og-container testimonials pt">
    <div class="og-section">
      <div class="og-section--heading text-is-center">
        <h1 class="title">Testimonials <span class="period"></span></h1>
        <p class="info">People I've worked with have said some nice things...</p>
      </div>
      <div v-cloak class="flex-img pt">
        <div class="testimonial-img pt">
          <div v-for="(testimonial, index) in testimonials" :class="[{'is-active': show == index}, testimonial.className]">
            <div class="img-wrapper">

              <a @click.prevent="show = index">
                <img :src="testimonial.img" :class="testimonial.className">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-cloak class="is-relative">
        <transition-group name="fade-up" target="div" appear @click.native="navigate($event); alerts($event);">
          <div v-for="(testimonial, index) in testimonials" v-if="show == index" :key="testimonial.id" class="testimonial-content is-relative">

            <p class="body is-relative"><span class="quote">"</span>{{testimonial.content}} </p>
            <h3 class="name">{{testimonial.name}} <br> ({{testimonial.country}}) </h3>
            <span class="cite">{{testimonial.cite}}</span>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Testimonial',
  data() {
    return {
      show: 0,
      testimonials: [{
          id: 1,
          className: "t-1",
          img: "https://res.cloudinary.com/simplytammy/image/upload/v1593024020/testimonials/derek.jpg",
          name: "Derek Vinebo",
          country: "Nigeria",
          cite: "CEO, Eventpady",
          content: `Tammy proved to have the right amount of tenacity and devotion when delivering projects. Having worked with him on many notestimonialle solutions, he was always able to not just deliver within given timeframes but maintain the level of quality needed to separate our solutions from others.
          `
        },
        {
          id: 2,
          className: "t-2",
          img: "https://res.cloudinary.com/simplytammy/image/upload/v1593045345/testimonials/sophie.jpg",
          name: "Edeki Sophia Peace",
          country: "Nigeria",
          cite: "Mentee",
          content: `Web development class with Tammy  is so far the best I've had. It's one of the highlights of my stay home period. Thanks to him I and probably would be speaking for all who attended the class had a very simplified foundational knowledge.
          `
        },
        {
          id: 3,
          className: "t-3",
          img: "https://res.cloudinary.com/simplytammy/image/upload/c_scale,w_100/v1593063042/testimonials/bree.jpg",
          name: "Bridget Eldoret",
          country: "Kenya",
          cite: "Mentee",
          content: `Learning from Tammy was one of my best experiences. He explained every concept well and would go back and explain anything that any student hadn't understood.
          `
        },
        {
          id: 4,
          className: "t-4",
          img: "https://res.cloudinary.com/simplytammy/image/upload/v1593038985/testimonials/desmond.jpg",
          name: "Ezo-Ojile Desmond",
          country: "Nigeria",
          cite: "CEO, Studihub",
          content: `Tammy is a highly skilled developer, always ready and willing to try out something new. He always gets the job done, professionally and on time.
          `
        },
        {
          id: 5,
          className: "t-5",
          img: "https://res.cloudinary.com/simplytammy/image/upload/c_scale,w_80/v1593107949/testimonials/david.jpg",
          name: "Oladele David",
          country: "Nigeria",
          cite: "Web Developer, Cardano",
          content: `I was looking for a good Front-End Developer who would create and evolve my websites as I work as the Backend Dev. Tammy delivers exactly what I want. It’s always a pleasure working and seeing him.
          `
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Passion+One:wght@900&display=swap');

@keyframes shadow-pulse {
  0% {
    box-shadow: 0px 0px 0px 6px rgba(23, 191, 99, 0.3);
  }

  100% {
    box-shadow: 0 0 0 16px rgba(23, 191, 99, 0);
  }
}


.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.2s ease-in-out;
  height: 0;
}

.fade-up-enter,
.fade-up-leave-to {
  height: 0;
  transform: translateY(-10px);
  transition: all 0.2s ease-in-out;
  opacity: 0;
}

.testimonials {
  display: flex;
  justify-content: center;
  align-items: center;
}

.testimonials .testimonial-img {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 1rem;
}

.testimonial-img .t-3 {
  grid-column: 1/3;
}

.testimonial-img img {
  transform: scale(0.7);
  opacity: 0.6;
  transition: 0.4s ease-in-out;
}


.testimonial-img .t-1 img {
  -webkit-box-shadow: 0px 0px 0px 6px #E69A8D;
  -moz-box-shadow: 0px 0px 0px 6px #E69A8D;
  box-shadow: 0px 0px 0px 6px #E69A8D;
}

.testimonial-img .t-2 img {
  -webkit-box-shadow: 0px 0px 0px 6px #5F4B8B;
  -moz-box-shadow: 0px 0px 0px 6px #5F4B8B;
  box-shadow: 0px 0px 0px 6px #5F4B8B;
}

.testimonial-img .t-3 img {
  -webkit-box-shadow: 0px 0px 0px 6px #ADEFD1;
  -moz-box-shadow: 0px 0px 0px 6px #ADEFD1;
  box-shadow: 0px 0px 0px 6px #ADEFD1;
}

.testimonial-img .t-4 img {
  -webkit-box-shadow: 0px 0px 0px 6px #E0C568;
  -moz-box-shadow: 0px 0px 0px 6px #E0C568;
  box-shadow: 0px 0px 0px 6px #E0C568;
}

.testimonial-img .t-5 img {
  -webkit-box-shadow: 0px 0px 0px 6px #FC766A;
  -moz-box-shadow: 0px 0px 0px 6px #FC766A;
  box-shadow: 0px 0px 0px 6px #FC766A;
}


.testimonial-img img:hover,
.testimonial-img .is-active img {
  -webkit-box-shadow: 0px 0px 0px 6px var(--defaultColor);
  -moz-box-shadow: 0px 0px 0px 6px var(--defaultColor);
  box-shadow: 0px 0px 0px 6px var(--defaultColor);
  cursor: pointer;
  padding: 0;
  opacity: 1;

}

.testimonial-img .is-active img {
  transform: scale(1.1);
  opacity: 1;
  animation: shadow-pulse 2s infinite;
}

.testimonials .testimonial-img img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  display: inline-block;
  margin: 0 auto;
}

.img-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.testimonial-content {
  text-align: center;
  margin-top: 2rem;
  min-height: 180px;
}

.testimonial-content .name {
  font-size: 0.75em;
  font-weight: 200;
  color: #1c1c1c;
  margin-top: 1rem;
}

.testimonial-content .cite {
  font-size: 18px;
  font-weight: 600;
  color: var(--primaryColor);
  display: inline-block;
  margin-top: 0.55rem;
  margin-bottom: 0.55rem;

}

.testimonial-content .body {
  position: relative;
  font-size: 14px;
  font-weight: 400;
  color: #1c1c1c;
  z-index: 10;
}

.testimonial-content .body .quote {
  font-size: 120px;
  position: absolute;
  top: -2rem;
  left: 0;
  font-family: 'Passion One', cursive;
  z-index: 1;
  color: #888;
  opacity: 0.3;
  display: none;

}

.flex-img {
  display: flex;
  justify-content: center;
}

</style>
