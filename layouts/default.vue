<template>
  <div>
    <transition v-bind:name="transitionName" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  scrollToTop: true,
  data() {
    return {
      transitionName: 'out-down',
    }
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
