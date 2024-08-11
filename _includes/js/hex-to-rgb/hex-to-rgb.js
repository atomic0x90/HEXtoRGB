function hexToRgb()
{
	hex = document.getElementById('hex').value;
	// Remove the hash if it exists
	hex = hex.replace(/^#/, '');
	
	let alpha = -1;

	if(hex.length === 3)
	{
		//Expand shorthand form (3 digits) to full form (6 digits)
		hex = hex.split('').map(char => char + char).join('');		
	}
	else if(hex.length === 8)
	{
		// Extract alpha component
		alpha = parseInt(hex.slice(6, 8), 16) / 255;
		alpha = parseFloat(alpha.toFixed(2)); // Round to 2 decimal places
		hex = hex.slice(0, 6); // Remove alpha part from the hex
	}

	const bigint = parseInt(hex, 16);
	const r = (bigint >> 16) & 255;
	const g = (bigint >> 8) & 255;
	const b = bigint & 255;
	return {r, g, b, alpha};
}

function setValue({r,g,b,alpha})
{
	document.getElementById('r').value = r;
	document.getElementById('g').value = g;
	document.getElementById('b').value = b;

	if(alpha !== -1)
	{
		document.getElementById('css').value = `rgba(${r}, ${g}, ${b}, ${alpha})`;
		document.getElementById('preview').style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${alpha})`;
	}
	else
	{
		document.getElementById('css').value = `rgb(${r}, ${g}, ${b})`;
		document.getElementById('preview').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	}
}
