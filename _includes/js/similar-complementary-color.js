document.querySelector('button[title="Convert"]').addEventListener('click', function(){
	similar();
	complementary();
});
document.querySelector('button[title="Reset"]').addEventListener('click', function(){
	similarComplementaryColorClear();
});

function rgbToHexString(r, g, b)
{
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

function similar()
{
	let r = parseInt(document.getElementById('r').value,10);
	let g = parseInt(document.getElementById('g').value,10);
	let b = parseInt(document.getElementById('b').value,10);
	
	if(isNaN(r))
	{
		r = document.getElementById('r').placeholder ? parseInt(document.getElementById('r').placeholder, 10) : 0;
	}
	if(isNaN(g))
	{
		g = document.getElementById('g').placeholder ? parseInt(document.getElementById('g').placeholder, 10) : 0;
	}
	if(isNaN(b))
	{
		b = document.getElementById('b').placeholder ? parseInt(document.getElementById('b').placeholder, 10) : 0;
	}

	const colorBoxesContainer = document.getElementById('similar-color-boxes');

	colorBoxesContainer.innerHTML = '';

	for(let i = -3; i <= 3; i++)
	{
		if(i == 0) continue;
		let newR = Math.min(255, Math.max(0, r + (i * 20) ) );
		let newG = Math.min(255, Math.max(0, g + (i * 20) ) );
		let newB = Math.min(255, Math.max(0, b + (i * 20) ) );
		let hexColor = rgbToHexString(newR, newG, newB);

		if(newR == r && newG == g && newB == b) continue;

		if(i != -3 && colorBoxesContainer.lastElementChild)
		{
			let lastHexColor = colorBoxesContainer.lastElementChild.querySelector('div:last-child').textContent.trim();
			if(lastHexColor === hexColor) continue;
		}

		const colorBox = document.createElement('div');
		colorBox.className = 'color-box';
		colorBox.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
		colorBox.style.width = '100px';
		colorBox.style.height = '100px';
		colorBox.style.display = 'inline-block';

		const colorText = document.createElement('div');
		colorText.textContent = hexColor;
		colorText.style.textAlign = 'center';
		colorText.style.color = '#000';

		const container = document.createElement('div');
		container.style.display = 'inline-block';
		container.style.textAlign = 'center';
		container.appendChild(colorBox);
		container.appendChild(colorText);

		colorBoxesContainer.appendChild(container);
	}
}

function complementary()
{
	let r = parseInt(document.getElementById('r').value,10);
	let g = parseInt(document.getElementById('g').value,10);
	let b = parseInt(document.getElementById('b').value,10);
	
	if(isNaN(r))
	{
		r = document.getElementById('r').placeholder ? parseInt(document.getElementById('r').placeholder, 10) : 0;
	}
	if(isNaN(g))
	{
		g = document.getElementById('g').placeholder ? parseInt(document.getElementById('g').placeholder, 10) : 0;
	}
	if(isNaN(b))
	{
		b = document.getElementById('b').placeholder ? parseInt(document.getElementById('b').placeholder, 10) : 0;
	}

	let compR = 255 - r;
	let compG = 255 - g;
	let compB = 255 - b;

	let compHexColor = rgbToHexString(compR, compG, compB);

	const colorBoxContainer = document.getElementById('complementary-color-box');
	const colorBoxesContainer = document.getElementById('complementary-similar-color-boxes');

	colorBoxContainer.innerHTML = '';
	colorBoxesContainer.innerHTML = '';

	const complementaryBox = document.createElement('div');
	complementaryBox.className = 'color-box';
	complementaryBox.style.backgroundColor = `rgb(${compR}, ${compG}, ${compB})`;
	complementaryBox.style.width = '100px';
	complementaryBox.style.height = '100px';
	complementaryBox.style.display = 'inline-block';

	const complementaryText = document.createElement('div');
	complementaryText.textContent = compHexColor;
	complementaryText.style.textAlign = 'center';
	complementaryText.style.color = '#000';

	const complementaryContainer = document.createElement('div');
	complementaryContainer.style.display = 'inline-block';
	complementaryContainer.style.textAlign = 'center';
	complementaryContainer.appendChild(complementaryBox);
	complementaryContainer.appendChild(complementaryText);

	colorBoxContainer.appendChild(complementaryContainer);

	for(let i = 3; i >= -3; i--)
	{
		if(i == 0) continue;
		let newR = Math.min(255, Math.max(0, compR + (i * 20) ) );
		let newG = Math.min(255, Math.max(0, compG + (i * 20) ) );
		let newB = Math.min(255, Math.max(0, compB + (i * 20) ) );
		let hexColor = rgbToHexString(newR, newG, newB);

		if(newR == compR && newG == compG && newB == compB) continue;

		if(i != 3 && colorBoxesContainer.lastElementChild)
		{
			let lastHexColor = colorBoxesContainer.lastElementChild.querySelector('div:last-child').textContent.trim();
			if(lastHexColor === hexColor) continue;
		}

		const colorBox = document.createElement('div');
		colorBox.className = 'color-box';
		colorBox.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
		colorBox.style.width = '100px';
		colorBox.style.height = '100px';
		colorBox.style.display = 'inline-block';

		const colorText = document.createElement('div');
		colorText.textContent = hexColor;
		colorText.style.textAlign = 'center';
		colorText.style.color = '#000';

		const container = document.createElement('div');
		container.style.display = 'inline-block';
		container.style.textAlign = 'center';
		container.appendChild(colorBox);
		container.appendChild(colorText);

		colorBoxesContainer.appendChild(container);
	}
}

function similarComplementaryColorClear()
{
	document.getElementById('similar-color-boxes').innerHTML = '';
	document.getElementById('complementary-color-box').innerHTML = '';
	document.getElementById('complementary-similar-color-boxes').innerHTML = '';
}
