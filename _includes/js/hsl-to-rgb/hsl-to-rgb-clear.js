function hslToRgbClear()
{
	document.getElementById('h').value = 0;
	document.getElementById('s').value = 0;
	document.getElementById('l').value = 0;

	document.getElementById('hex').value = 0;
	document.getElementById('r').value = 0;
	document.getElementById('g').value = 0;
	document.getElementById('b').value = 0;

	document.getElementById('preview').style.backgroundColor = `rgb(0,0,0)`;
}

