function rgbToHsv()
{
	let r = parseInt(document.getElementById('r').value, 10);
	let g = parseInt(document.getElementById('g').value, 10);
	let b = parseInt(document.getElementById('b').value, 10);

	// Validate input ranges
	r = Math.max(0, Math.min(255, isNaN(r) ? 0 : r));
	g = Math.max(0, Math.min(255, isNaN(g) ? 0 : g));
	b = Math.max(0, Math.min(255, isNaN(b) ? 0 : b));

	r /= 255;
	g /= 255;
	b /= 255;

	let max = Math.max(r, g, b);
	let min = Math.min(r, g, b);
	let h, s, v = max;

	let delta = max - min;
	s = max === 0 ? 0 : delta / max;

	if (delta === 0)
	{
		h = 0;
	}
	else
	{
		switch(max)
		{
			case r:
				h = (g - b) / delta + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / delta + 2;
				break;
			case b:
				h = (r - g) / delta + 4;
				break;
		}
		h /= 6;
	}

	// Convert to degrees and percentages
	document.getElementById('h').value = Math.round(h * 360);
	document.getElementById('s').value = (s * 100).toFixed(2);
	document.getElementById('v').value = (v * 100).toFixed(2);

	// Update color preview
	document.getElementById('preview').style.backgroundColor = `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
}

