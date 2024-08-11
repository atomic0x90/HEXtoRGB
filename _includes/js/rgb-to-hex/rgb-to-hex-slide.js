// 슬라이더와 입력 필드를 동기화하는 함수
function syncSliderFromInput(inputID,sliderID)
{
	const input = document.getElementById(inputID);
	const slider = document.getElementById(sliderID);

	let value = parseInt(input.value, 10);

	if(isNaN(value) || value < 0) value = 128;
	if(value > 255) value = 255;

	slider.value = value;

	updatePreview();
}

// 슬라이더 값 변경 시 입력 필드 업데이트
function syncInputFromSlider(inputID,sliderID)
{
	const input = document.getElementById(inputID);
	const slider = document.getElementById(sliderID);

	input.value = slider.value;

	updatePreview();
}

function updatePreview() {
	let r = parseInt(document.getElementById('r').value, 10);
	let g = parseInt(document.getElementById('g').value, 10);
	let b = parseInt(document.getElementById('b').value, 10);

	if(isNaN(r)) r = 128;
	if(isNaN(g)) g = 128;
	if(isNaN(b)) b = 128;

	document.getElementById('preview').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// 초기화
syncSliderFromInput('r','red-slider');
syncSliderFromInput('g','green-slider');
syncSliderFromInput('b','blue-slider');

// 이벤트 리스너 추가
document.getElementById('r').addEventListener('input', function(){
	syncSliderFromInput('r', 'red-slider');
});
document.getElementById('red-slider').addEventListener('input', function(){
	syncInputFromSlider('r', 'red-slider');
});

document.getElementById('g').addEventListener('input', function(){
	syncSliderFromInput('g', 'green-slider');
});
document.getElementById('green-slider').addEventListener('input', function(){
	syncInputFromSlider('g', 'green-slider');
});

document.getElementById('b').addEventListener('input', function(){
	syncSliderFromInput('b', 'blue-slider');
});
document.getElementById('blue-slider').addEventListener('input', function(){
	syncInputFromSlider('b', 'blue-slider');
});
