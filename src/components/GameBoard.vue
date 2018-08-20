<template>
  <div class="gameboard">
    <p class="gameboard__title">
      Current Round: {{ $store.state.currentRound }}
    </p>
    <Squares/>
    <transition name="slide">
      <PlayerQueue v-show="$store.state.queueVisible"/>
    </transition>
    <transition name="slide">
      <Scoreboard v-show="$store.state.scoreboardVisible"/>
    </transition>
    <button class="gameboard__button" v-on:click="nextRound">
      Next Round
    </button>
    <button class="gameboard__button" v-on:click="toggleQueue">
      List Players
    </button>
    <button class="gameboard__button" v-on:click="toggleScores">
      Scoreboard
    </button>
  </div>
</template>

<script>
import Squares from './Squares';
import PlayerQueue from './PlayerQueue';
import Scoreboard from './Scoreboard';

export default {
  name: 'GameBoard',
  components: { Squares, PlayerQueue, Scoreboard },
  methods: {
    nextRound() {
      this.$store.commit('incrementRounds');
      this.$store.commit('incrementTotalRounds');
      this.$store.commit('updateQueue');
    },
    toggleQueue() {
      this.$store.commit('toggleQueue')
    },
    toggleScores() {
      this.$store.commit('toggleScoreboard')
    },
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

	&__title {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: 3vw;
	}

	&__button {
		padding: 1rem 2rem;
		background-color: #3aa0ff;
		border: none;
		border-radius: 8px;
		color: #ffffff;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: 2vw;
		margin: 0 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

		&:hover {
			cursor: pointer;
		}
	}
}
</style>

