function rgbToHsl()
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

	document.getElementById('h').value = Math.round(h*360);
	document.getElementById('s').value = Math.round(s*100*100)/100;
	document.getElementById('l').value = Math.round(l*100*100)/100;

	document.getElementById('preview').style.backgroundColor = `rgb(${r*255},${g*255},${b*255})`;
}
