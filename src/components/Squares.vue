<template>
  <div class="squares">
    <div class="vertical-line"></div>
    <div class="vertical-line"></div>
  </div>
</template>

<style lang="scss" scoped>
.squares {
	width: 500px;
	height: 500px;
	margin: 4rem auto;
	padding: 1rem;
	background-color: #ffffff;
	border-radius: 8px;
	position: relative;

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
}
</style>

