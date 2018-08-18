<template>
  <div class="squares">
    <div class="vertical-line"></div>
    <div class="vertical-line"></div>
    <ul class="squares__player-cards">
      <li class="squares__player-cards-item" v-for="(player, index) in this.$store.state.currentlyPlayingQueue" v-bind:key="index">
        <div class="squares__player-cards-item--top-row">
          <p class="squares__player-cards-name">
            {{ player.playerName }}
          </p>
        </div>
        <div class="squares__player-cards-item--bottom-row">
          <button class="squares__player-cards-button squares__player-cards-button--out" v-on:click="playerOut(index)">
            Out
          </button>
          <button class="squares__player-cards-button squares__player-cards-button--plus1">
            +1
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Squares',
  methods: {
    playerOut(i) {
      let player = this.$store.state.currentlyPlayingQueue[i];
      player.currentlyPlaying = false;
      this.$store.state.playerQueue.push(player);
      this.$store.state.currentlyPlayingQueue.splice(i, 1);
    }
  },
  created() {
    for (let i = 0; i <= 3; i++) {
      let player = this.$store.state.playerQueue[i];
      this.$store.state.currentlyPlayingQueue.push(player);
    }
    for (let i = 0; i <= 3; i++) {
      this.$store.state.playerQueue.shift();
    }
  },
}
</script>


<style lang="scss" scoped>
.squares {
	width: 500px;
	height: 500px;
	margin: 1rem auto;
	background-color: #ffffff;
	border-radius: 8px;
	position: relative;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

	.vertical-line {
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
		background-color: #000000;

		&:last-of-type {
			transform: rotate(90deg);
			transform-origin: center center;
		}
	}

	&__player-cards {
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		height: 500px;
		width: 500px;
		list-style: none;

		&-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			&:nth-of-type(1) {
				order: 1;
			}
			&:nth-of-type(2) {
				order: 2;
			}
			&:nth-of-type(3) {
				order: 4;
			}
			&:nth-of-type(4) {
				order: 3;
			}
		}

		&-button {
			padding: 1rem;
			border-radius: 8px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
			font-family: 'Montserrat', sans-serif;
			font-weight: 700;
			color: #ffffff;
			font-size: 2vw;
			text-transform: uppercase;

			&:hover {
				cursor: pointer;
			}

			&--out {
				background-color: #f00;
			}

			&--plus1 {
				background-color: #3aa0ff;
			}
		}
	}
}
</style>

