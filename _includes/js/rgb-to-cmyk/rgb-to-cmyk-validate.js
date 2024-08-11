// 입력 필드 값 검증 함수
function validateInput(input, minValue, maxValue)
{
	let value = parseInt(input.value, 10);

	if(isNaN(value))
	{
		value = minValue;
	}
	else if(value < minValue)
	{
		value = minValue;
	}
	else if (value > maxValue)
	{
		value = maxValue;
	}

	input.value = value;
}

// 입력 필드에 이벤트 리스너 추가
document.getElementById('r').addEventListener('input', function() {
    validateInput(this, 0, 255);
});
document.getElementById('g').addEventListener('input', function() {
    validateInput(this, 0, 255);
});
document.getElementById('b').addEventListener('input', function() {
    validateInput(this, 0, 255);
});

