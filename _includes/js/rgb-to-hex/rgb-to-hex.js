function rgbToHex()
{
	let r = parseInt(document.getElementById('r').value, 10);
	let g = parseInt(document.getElementById('g').value, 10);
	let b = parseInt(document.getElementById('b').value, 10);

	if(isNaN(r)) r = 128;
	if(isNaN(g)) g = 128;
	if(isNaN(b)) b = 128;

	const hexR = componentToHex(r);
	const hexG = componentToHex(g);
	const hexB = componentToHex(b);

	const {h,s,l} = rgbToHsl(r,g,b);

	document.getElementById('hex').value = `#${hexR}${hexG}${hexB}`;
	document.getElementById('rgb').value = `rgb(${r}, ${g}, ${b})`;
	document.getElementById('hsl').value = `hsl(${h}, ${s}, ${l})`;
}

function componentToHex(c)
{
	const hex = c.toString(16).toUpperCase();
	return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHsl(r, g, b)
{
	r /= 255;
	g /= 255;
	b /= 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h, s, l = (max + min) / 2;

	if (max === min)
	{
		h = s = 0; // 무채색
	}
	else
	{
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch(max)
		{
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}

		h /= 6;
	}

	return{
		h: Math.round(h * 360),
		s: Math.round(s * 100),
		l: Math.round(l * 100)
	};
}
