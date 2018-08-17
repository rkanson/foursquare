<template>
  <div class="gameboard">
    <Squares/>
    <transition name="slide">
      <PlayerQueue v-show="queueVisible" v-on:close-queue="closeQueue"/>
    </transition>
    <button v-on:click="openQueue">
      List Players
    </button>
  </div>
</template>

<script>
import Squares from './Squares';
import PlayerQueue from './PlayerQueue';

export default {
  name: 'GameBoard',
  data() {
    return {
      queueVisible: false,
    };
  },
  components: { Squares, PlayerQueue },
  methods: {
    openQueue() {
      this.queueVisible = true;
    },
    closeQueue() {
     this.queueVisible = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.gameboard {
	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.4s ease-in-out;
	}
	.slide-enter,
	.slide-leave-to {
		transform: translateY(100%);
	}
}
</style>

