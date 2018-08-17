<template>
  <div class="navigation">
    <div class="navigation__accent"></div>
    <nav class="navigation__menu">
      <ul>
        <li class="navigation__menu-item">
          <router-link to="/">
            Foursquare Tournament
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
	position: relative;
	display: flex;
	flex-direction: column;

	&__accent {
		width: 100vw;
		height: 8px;
		background-color: #3aa0ff;
	}

	&__menu {
		background-color: #fff;

		ul {
			margin: 0;
			padding: 1rem 1rem;
			list-style-type: none;

			.navigation__menu-item {
				text-align: left;

				a {
					font-family: 'Montserrat', sans-serif;
					font-weight: 700;
					font-size: calc(14px + 1.67vw);
					color: #000000;
					margin-bottom: 0;
					text-decoration: none;
				}
			}
		}
	}
}
</style>

