function hslToRgb()
{
	let h = parseFloat(document.getElementById('h').value);
	let s = parseFloat(document.getElementById('s').value) / 100;
	let l = parseFloat(document.getElementById('l').value) / 100;

	if (isNaN(h)) h = 0;
	if (isNaN(s)) s = 0;
	if (isNaN(l)) l = 0;

	let r, g, b;

	if(s === 0)
	{
		r = g = b = l; // 무채색
	}
	else
	{
		const hueToRgb = (p, q, t) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1/6) return p + (q - p) * 6 * t;
			if (t < 1/2) return q;
			if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hueToRgb(p, q, h / 360 + 1/3);
		g = hueToRgb(p, q, h / 360);
		b = hueToRgb(p, q, h / 360 - 1/3);
	}

	r = Math.round(r * 255);
	g = Math.round(g * 255);
	b = Math.round(b * 255);

	document.getElementById('r').value = r;
	document.getElementById('g').value = g;
	document.getElementById('b').value = b;

	document.getElementById('hex').value = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
	document.getElementById('preview').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
