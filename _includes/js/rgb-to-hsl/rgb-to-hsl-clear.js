function rgbToHslClear()
{
	document.getElementById('r').value = 0;
	document.getElementById('g').value = 0;
	document.getElementById('b').value = 0;

	document.getElementById('preview').style.backgroundColor = `rgb(${document.getElementById('r').value},${document.getElementById('g').value},${document.getElementById('b').value})`;

	document.getElementById('h').value = '';
	document.getElementById('s').value = '';
	document.getElementById('l').value = '';
}

