<template>
  <div class="queue">
    <div class="queue__accent"></div>
    <p class="queue__title">
      Player Queue
    </p>
    <div class="queue__close" v-on:click="closeQueue">
      <div class="queue__close--line"></div>
      <div class="queue__close--line"></div>
    </div>
    <ul class="queue__list">
      <li class="queue__list-item" v-for="player in playerQueue" v-bind:key="player.order">
        {{ player.playerName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PlayerQueue',
  data() {
    return {
      queueVisible: this.initialQueueVisible,
      playerQueue: [
        {
          playerName: 'RJ Kanson',
          order: 1
        },
        {
          playerName: 'Tommy Hartman',
          order: 2,
        },
      ],
    };
  },
  props: ['initialQueueVisible'],
  methods: {
    closeQueue() {
      this.$emit('close-queue');
    }
  },
};
</script>

<style lang="scss" scoped>
.queue {
	position: fixed;
	left: 0;
	top: 5%;
	width: 100vw;
	min-height: 100vh;
	background-color: #e5e5e5;

	&__accent {
		width: 100%;
		height: 8px;
		background-color: #3aa0ff;
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
			padding: 0.5rem;
			margin: 1rem 0;
			text-align: left;
			background-color: #ffffff;
			border-radius: 8px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
		}
	}
}
</style>

