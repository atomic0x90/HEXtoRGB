function hexToRgb()
{
	hex = document.getElementById('hex').value;
	// Remove the hash if it exists
	hex = hex.replace(/^#/, '');
	
	if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(hex))
	{
		return;
	}

	if(hex.length === 3)
	{
		//Expand shorthand form (3 digits) to full form (6 digits)
		hex = hex.split('').map(char => char + char).join('');		
	}

	const bigint = parseInt(hex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;

	document.getElementById('r').value = r;
	document.getElementById('g').value = g;
	document.getElementById('b').value = b;
}

function rgbToHex()
{
	let r = parseInt(document.getElementById('r').value, 10);
	let g = parseInt(document.getElementById('g').value, 10);
	let b = parseInt(document.getElementById('b').value, 10);

	if(isNaN(r)) r = 0;
	if(isNaN(g)) g = 0;
	if(isNaN(b)) b = 0;

	const hexR = componentToHex(r);
	const hexG = componentToHex(g);
	const hexB = componentToHex(b);

	document.getElementById('hex').value = `${hexR}${hexG}${hexB}`;
}

function componentToHex(c)
{
	const hex = c.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}
