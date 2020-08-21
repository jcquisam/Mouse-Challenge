document.addEventListener('mousemove', function(e) {
	let r = Math.round(e.pageX * 255 / window.innerWidth);
	let b = Math.round(e.pageY * 255 / window.innerHeight);
	let rgb = `rgb(${r}, 0, ${b})`;
	document.body.style.backgroundColor = rgb;
	console.log(rgb);
});
