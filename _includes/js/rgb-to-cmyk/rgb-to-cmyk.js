function rgbToCmyk()
{
	let r = parseInt(document.getElementById('r').value, 10);
	let g = parseInt(document.getElementById('g').value, 10);
	let b = parseInt(document.getElementById('b').value, 10);

	if(isNaN(r)) r = 0;
	if(isNaN(g)) g = 0;
	if(isNaN(b)) b = 0;

	r /= 255;
	g /= 255;
	b /= 255;

	let k = 1 - Math.max(r, g, b);
	let c = (1 - r - k) / (1 - k) || 0;
	let m = (1 - g - k) / (1 - k) || 0;
	let y = (1 - b - k) / (1 - k) || 0;

	c = Math.round(c * 100);
	m = Math.round(m * 100);
	y = Math.round(y * 100);
	k = Math.round(k * 100);

	document.getElementById('c').value = c;
	document.getElementById('m').value = m;
	document.getElementById('y').value = y;
	document.getElementById('k').value = k;

	const rgbToHex = (r, g, b) => {
	const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
		return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	};

	const hex = rgbToHex(parseInt(r * 255), parseInt(g * 255), parseInt(b * 255));
	document.getElementById('hex').value = hex;
	document.getElementById('preview').style.backgroundColor = hex;
}

