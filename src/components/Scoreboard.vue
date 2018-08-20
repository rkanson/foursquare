<template>
  <div class="scoreboard">
    <div class="scoreboard__accent"></div>
    <p class="scoreboard__title">
      Scoreboard
    </p>
    <div class="scoreboard__close" v-on:click="toggleScoreboard">
      <div class="scoreboard__close--line"></div>
      <div class="scoreboard__close--line"></div>
    </div>
    <ul class="scoreboard__list">
      <li class="scoreboard__list-item" v-for="player in getAllPlayers" v-bind:key="player.order">
        {{ player.playerName }} | Total Rounds: {{ player.totalRounds }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PlayerScoreboard',
  methods: {
    toggleScoreboard() {
      this.$store.commit('toggleScoreboard');
    }
  },
  computed: {
    getAllPlayers() {
      let allPlayers = this.$store.state.playerQueue.concat(this.$store.state.currentlyPlayingQueue);

      let sorted = allPlayers.sort(function (a, b) {
        return a.totalRounds - b.totalRounds;
      });

      return sorted.reverse();
    }
  }
};
</script>

<style lang="scss" scoped>
.scoreboard {
	position: absolute;
	left: 1vw;
	top: 5%;
	width: 98vw;
	min-height: 100vh;
	background-color: #e5e5e5;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

	&__accent {
		width: 100%;
		height: 8px;
		background-color: #3aa0ff;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}

	&__title {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: 3vw;
	}

	&__close {
		position: absolute;
		top: 3rem;
		right: 2rem;
		width: 1rem;
		height: 1rem;
		transform: rotate(45deg);

		&:hover {
			cursor: pointer;
			transform: rotate(45deg) scale(1.1);
		}

		&--line {
			width: 1rem;
			height: 1px;
			background-color: #000000;

			&:last-of-type {
				transform: rotate(90deg) translateX(-1px);
				transform-origin: center center;
			}
		}
	}

	&__list {
		padding-left: 0;
		list-style: none;
		max-width: 95%;
		margin: 0 auto;

		&-item {
			padding: 1rem;
			margin: 1rem 0;
			text-align: left;
			background-color: #ffffff;
			border-radius: 8px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
		}
	}
}
</style>

