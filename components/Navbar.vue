<template>
	<div class="navbar is-relative">
		<header class="header og-container" id="top">

			<nuxt-link to="/" class="brand animate__animated animate__bounceInDown">
				<span class="brand">ob</span><span class="period"></span>
				<p>Freelance Software Designer</p>
			</nuxt-link>

			<nav class="nav animate__animated animate__fadeInDown">
				<nuxt-link to="/">Home</nuxt-link>
				<nuxt-link to="/about">About </nuxt-link>
				<nuxt-link to="/blog">Blog</nuxt-link>
				<nuxt-link to="/contact">Contact</nuxt-link>
			</nav>
			<div class="mobile-menu-toggle" id="toggleNav" @click="toggleNav">
				<svg width="32px" height="32px" viewBox="0 0 32 32">
					<circle cx="16" cy="16" r="15"></circle>
					<g id="plus">
						<path d="M16,11 L16,21"></path>
						<path d="M11,16 L21,16"></path>
					</g>
				</svg>
			</div>

			<div id="myNav" class="overlay">
				<div class="overlay-content">
					<span class="closebtn" @click="closeNav">
						close
					</span>
					<div class="nav-row">
						<div class="nav-col col-fs">
							<span @click="closeNav">
								<nuxt-link to="/">
									<span>0.1 </span> Home
								</nuxt-link>
							</span>
						</div>
						<div class="nav-col col-sc">
							<span @click="closeNav">
								<nuxt-link to="/about">0.2 About </nuxt-link>
							</span>
						</div>
					</div>
					<div class="nav-row">
						<div class="nav-col">
							<span @click="closeNav">
								<nuxt-link to="/blog">0.3 Blog</nuxt-link>
							</span>
						</div>

						<div class="nav-col">
							<span @click="closeNav">
								<nuxt-link to="/contact">0.4 Contact</nuxt-link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	methods: {
		toggleNav() {
			const toggleBtn = document.querySelector('#toggleNav');
			const nav = document.getElementById("myNav");
			toggleBtn.classList.toggle("toggle");
			nav.classList.toggle("active");
		},
		closeNav() {
			const toggleBtn = document.querySelector('#toggleNav');
			const nav = document.getElementById("myNav");
			toggleBtn.classList.remove("toggle");
			nav.classList.remove("active");
		}
	}
}

</script>

<style scoped>
@keyframes fadeInRight {
	0% {
		opacity: 0;
		top: 20%;
	}

	100% {
		opacity: 1;
		top: 0;
	}
}

@keyframes moveRight {

	0%,
	20%,
	50%,
	80%,
	100% {
		margin-left: 0;
		opacity: 1;
	}

	40% {
		margin-left: 10px;
		opacity: .5;
	}

	60% {
		margin-left: 5px;
		opacity: .1;
	}
}

.navbar {
	position: fixed !important;
	top: 0;
	left: 0;
	width: 100%;
	background: rgba(0, 9, 27, 0.7);
	z-index: 100;
	padding: 1rem;
}

.header {
	padding: 1rem 0;
	display: flex;
	justify-content: space-between;
	min-height: 40px;
	align-items: center;
}

.overlay {
	height: 0;
	width: 100%;
	position: fixed;
	z-index: 8;
	bottom: 0;
	left: 0;
	background-color: #00091b;
	visibility: hidden;
	transition: height 0.35s, visibility 0.35s, height 0.35s;
	overflow-x: hidden;
	transition: 0.5s;
	border-top-right-radius: 2rem;
	border-top-left-radius: 2rem;
}


.overlay.active {
	height: auto;
	visibility: visible;
}

.overlay.active a {
	animation: fadeInRight 1s ease forwards;
	animation-delay: 1s;
}

.overlay.active a:nth-of-type(2) {
	animation-delay: 0.6s;
}

.overlay.active a:nth-of-type(3) {
	animation-delay: 0.7s;
}

.overlay.active a:nth-of-type(4) {
	animation-delay: 0.8s;
}

.nav-row {
	display: flex;
	justify-content: center;
}

.nav-col {

	min-height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	border: 1px solid #ddd;
	transition: height 0.35s, visibility 0.35s, height 0.35s;
}

.nav-col.col-fs {

	border-top-left-radius: 2rem;
}

.nav-col.col-sc {
	border-top-right-radius: 2rem;

}

.overlay a {
	position: relative;
	padding: 8px;
	text-decoration: none;
	font-size: 36px;
	color: #818181;
	display: block;
	opacity: 0;

}



.overlay a.nuxt-link-exact-active {
	color: #fff;
}

.overlay a:hover,
.overlay a:focus {
	color: #f1f1f1;
}

.overlay .closebtn {
	position: absolute;
	top: 0;
	left: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	font-size: 12px;
	text-align: center;
	width: 120px;
	background: #ddd;
	transform: translateX(-50%);
	border-radius: 3rem;
	cursor: pointer;

}

.mobile-menu-toggle {
	width: 32px;
	height: 32px;
	display: inline-block;
	cursor: pointer;
	border-radius: 50%;
	transition: background 0.2s ease;
	transition-delay: 0.15s;
	z-index: 8000;
	display: none;
}

.mobile-menu-toggle svg {
	transform: rotate(270deg);
	z-index: 8000;
}

.mobile-menu-toggle svg circle {
	stroke-width: 2;
	stroke: #fff;
	fill: none;
	stroke-dasharray: 95;
	stroke-dashoffset: 190;
	transition: all 0.6s ease;
	stroke-linecap: round;
	z-index: 8000;
}

.mobile-menu-toggle svg #plus {
	transform-origin: 50% 50%;
	transition: all 0.8s ease;
}

.mobile-menu-toggle svg #plus path {
	stroke-width: 2;
	stroke: #fff;
	fill: none;
	stroke-linecap: round;
	stroke-linejoin: round;
}

.mobile-menu-toggle.toggle circle {
	stroke-dasharray: 95;
	stroke-dashoffset: 285;
	z-index: 8000;
}

.mobile-menu-toggle.toggle #plus {
	transform: rotate(45deg);
}

.mobile-menu-toggle.toggle:hover {
	background: rgba(255, 255, 255, 0.06);
}

.header .brand {
	font-size: 3.4rem;
	font-weight: bold;
	color: #fff;
	text-decoration: none;
	letter-spacing: 0;
	font-family: 'Sacramento', cursive;
	padding: 0 0.2rem 0 0;
	line-height: 2.5rem;
}

.header .brand img {
	width: 120px;
}

.header .brand p {
	font-size: 10px;
	font-weight: 400;
	line-height: 0.6rem;
	padding-bottom: 0.6rem;
}

.header .nav {
	padding: 5px 0;
}

.header .nav a {
	position: relative;
	color: #fff;
	font-size: 15px;
	padding: 5px;
	font-weight: normal;
	text-decoration: none;
	display: inline-block;
	margin: 4px 4px 4px 0;
	transition: 0.8s ease-in-out;

}

.header .nav a:before {
	content: "";
	display: block;
	position: absolute;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	margin: 0 auto;
	left: 50%;
	transform: translateX(-50%);
	top: 1.7rem;
	background: transparent;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

.header .nav a:hover:before,
.header .nav a.active:before,
.header .nav a.nuxt-link-exact-active:before {
	background: var(--defaultColor);
}

@media screen and (max-width: 768px) {
	.header {
		padding: 0.5rem 0;
	}

	.overlay a {
		font-size: 16px
	}

	.nav {
		display: none;
	}

	.mobile-menu-toggle {
		display: block;
	}
}

</style>
