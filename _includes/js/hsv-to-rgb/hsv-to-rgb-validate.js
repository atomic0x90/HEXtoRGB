// 입력 필드 값 검증 함수
function validateInput(input, maxValue)
{
	let value = input.value;
	// 소수점과 숫자만 허용
	if(/[^0-9.]/.test(value))
	{
		value = value.replace(/[^0-9.]/g, '');
	}

	// 소수점이 여러 번 입력되는 경우 첫 번째 소수점 뒤의 모든 소수점 제거
	const parts = value.split('.');
	if(parts.length > 2)
	{
		value = parts[0] + '.' + parts.slice(1).join('');
	}

	value = parseFloat(input.value, 10);

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
document.getElementById('h').addEventListener('input', function() {
    validateInput(this, 360);
});
document.getElementById('s').addEventListener('blur', function() {
    validateInput(this, 100);
});
document.getElementById('v').addEventListener('blur', function() {
    validateInput(this, 100);
});


