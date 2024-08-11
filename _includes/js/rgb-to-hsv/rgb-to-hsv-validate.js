// 입력 필드 값 검증 함수
function validateInput(input, maxValue)
{
	let value = parseInt(input.value, 10);

	if (isNaN(value) || value < 0)
	{
		value = 0;
	}
	else if(value > maxValue)
	{
		value = maxValue;
	}

	input.value = value;
}

// 입력 필드에 이벤트 리스너 추가
document.getElementById('r').addEventListener('input', function() {
    validateInput(this, 255);
});
document.getElementById('g').addEventListener('input', function() {
    validateInput(this, 255);
});
document.getElementById('b').addEventListener('input', function() {
    validateInput(this, 255);
});
document.getElementById('h').addEventListener('input', function() {
    validateInput(this, 360);
});
document.getElementById('s').addEventListener('input', function() {
    validateInput(this, 100);
});
document.getElementById('v').addEventListener('input', function() {
    validateInput(this, 100);
});

