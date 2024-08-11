function hsvToRgb()
{
	let h = parseFloat(document.getElementById('h').value);
	let s = parseFloat(document.getElementById('s').value) / 100;
	let v = parseFloat(document.getElementById('v').value) / 100;

	if(isNaN(h)) h = 0;
	if(isNaN(s)) s = 0;
	if(isNaN(v)) v = 0;

	// Convert H from degrees to [0, 1]
	h = h % 360 / 60;
	const c = v * s;
	const x = c * (1 - Math.abs((h % 2) - 1));
	const m = v - c;

	let r, g, b;

	if(h >= 0 && h < 1)
	{
		[r, g, b] = [c, x, 0];
	}
	else if(h >= 1 && h < 2)
	{
		[r, g, b] = [x, c, 0];
	}
	else if(h >= 2 && h < 3)
	{
		[r, g, b] = [0, c, x];
	}
	else if(h >= 3 && h < 4)
	{
		[r, g, b] = [0, x, c];
	}
	else if(h >= 4 && h < 5){
		[r, g, b] = [x, 0, c];
	}
	else if(h >= 5 && h < 6)
	{
		[r, g, b] = [c, 0, x];
	}

	// Add m to each component and scale to 255
	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	// Update the input fields
	document.getElementById('r').value = r;
	document.getElementById('g').value = g;
	document.getElementById('b').value = b;

	// Convert RGB to hex
	const rgbToHex = (r, g, b) => {
	const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
		return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	};

	const hex = rgbToHex(r, g, b);
	document.getElementById('hex').value = hex;
	document.getElementById('preview').style.backgroundColor = hex;
}

