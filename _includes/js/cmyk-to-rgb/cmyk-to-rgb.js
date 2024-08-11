function cmykToRgb()
{
	let c = parseFloat(document.getElementById('c').value) / 100;
	let m = parseFloat(document.getElementById('m').value) / 100;
	let y = parseFloat(document.getElementById('y').value) / 100;
	let k = parseFloat(document.getElementById('k').value) / 100;

	if(isNaN(c)) c = 0;
	if(isNaN(m)) m = 0;
	if(isNaN(y)) y = 0;
	if(isNaN(k)) k = 0;

	let r = 255 * (1 - c) * (1 - k);
	let g = 255 * (1 - m) * (1 - k);
	let b = 255 * (1 - y) * (1 - k);

	r = Math.round(r);
	g = Math.round(g);
	b = Math.round(b);

	document.getElementById('r').value = r;
	document.getElementById('g').value = g;
	document.getElementById('b').value = b;

	const rgbToHex = (r, g, b) => {
		const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
		return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	};

	const hex = rgbToHex(r, g, b);
	document.getElementById('hex').value = hex;
	document.getElementById('preview').style.backgroundColor = hex;
}

