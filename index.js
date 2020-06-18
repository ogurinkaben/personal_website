window.addEventListener('load', () => {
	setTimeout(() => {
		document.querySelector('body').classList.add("loaded");
	}, 1000);
});
const toggleBtn = document.querySelector('#toggleNav');
const nav = document.getElementById("myNav");
toggleBtn.addEventListener('click', () => {
	toggleBtn.classList.toggle("toggle");
	nav.classList.toggle("active");
})
