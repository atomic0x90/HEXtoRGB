function rgbToHexClear()
{
	document.getElementById('red-slider').value = 128;
	document.getElementById('green-slider').value = 128;
	document.getElementById('blue-slider').value = 128;

	document.getElementById('r').value = 128;
	document.getElementById('g').value = 128;
	document.getElementById('b').value = 128;

	document.getElementById('preview').style.backgroundColor = `rgb(${document.getElementById('r').value},${document.getElementById('g').value},${document.getElementById('b').value})`;

	document.getElementById('hex').value = '';
	document.getElementById('rgb').value = '';
	document.getElementById('hsl').value = '';
}

