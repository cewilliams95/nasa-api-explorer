<template>
  <div>
    <nasa-header></nasa-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
    import Header from '@/components/Header.vue';
    export default {
        components: {
          'nasa-header': Header
        }
    }
</script>

<style>
body {
  font-family: "Open Sans";
}
.danger {
  background: coral;
}

.slide-leave-active {
    transition: opacity 0.5s ease;
    opacity: 0;
    animation: slide-out 0.5s ease-out forwards;
}
.slide-leave {
    opacity: 1;
    transform: translateX(0);
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-30px);
    }
}

@keyframes slide-in {
    0% {
        transform: translateX(-30px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
