<template>
  <div id="app">
    <div class="og-cursor">
      <div :style="`transform: translateX(${xParent}px) translateY(${yParent}px) translateZ(0) translate3d(0, 0, 0);`" class="og-cursor__circle"></div>
      <div class="g-cursor__point" ref="point" :style="`transform: translateX(${xChild - 3}px) translateY(${yChild - 3}px) translateZ(0) translate3d(0, 0, 0);`"></div>
    </div>
    <transition v-bind:name="transitionName" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style>
.out-up-enter-active,
.out-up-leave-active,
.out-down-enter-active,
.out-down-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: all .3s ease;
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
<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'out-down',
      loading: false,
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true
    }
  },
  mounted() {
    const moveCursor = e => {
      this.hideCursor = false;
      this.xChild = e.clientX ? e.clientX : e.touches[0].clientX;
      this.yChild = e.clientY ? e.clientY : e.touches[0].clientY;
      setTimeout(() => {
        this.xParent =
          e.clientX - 15 ? e.clientX - 15 : e.touches[0].clientX - 15;
        this.yParent =
          e.clientY - 15 ? e.clientY - 15 : e.touches[0].clientY - 15;
      }, 100);
    };
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("touchmove", moveCursor);
    window.addEventListener("touchstart", () => {
      this.hideCursor = false;
    });
    window.addEventListener("touchend", () => {
      this.hideCursor = true;
    });
  },
  watch: {
    '$route'(to, from) {
      this.transitionName = from.meta.order < to.meta.order ? 'out-up' : 'out-down'
    }
  }
}

</script>
