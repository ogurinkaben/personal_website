<template>
  <div>
    <transition :name="transitionName" mode="out-in" @beforeLeave="beforeLeave" @enter="enter">
      <Nuxt />
    </transition>
  </div>
</template>
<script>
const DEFAULT_TRANSITION = 'fade';
export default {
  name: 'App',
  scrollToTop: true,
  transition: 'slide',
  data() {
    return {
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;
      if (transitionName === 'slide') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
      this.transitionName = transitionName || DEFAULT_TRANSITION;
      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.prevHeight;
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
  watch: {
    '$route'(to, from) {
      this.transitionName = from.meta.order < to.meta.order ? 'out-up' : 'out-down'
    }
  }
}

</script>

<style>
.out-up-enter-active,
.out-up-leave-active,
.out-down-enter-active,
.out-down-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.out-up-leave-to,
.out-down-enter {
  position: absolute;
  transform: translateY(-2.5em);
  opacity: 0;
}

.out-up-enter,
.out-down-leave-to {
  position: absolute;
  transform: translateY(2.5em);
  opacity: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  position: absolute;
}

</style>
