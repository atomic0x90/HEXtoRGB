// 입력 필드 값 검증 함수
function validateInput(input, minValue, maxValue)
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

	value = parseFloat(input.value);

	if(isNaN(value))
	{
		value = minValue;
	}
	else if(value < minValue)
	{
		value = minValue;
	}
	else if(value > maxValue)
	{
		value = maxValue;
	}

	input.value = value;
}

// 입력 필드에 이벤트 리스너 추가
document.getElementById('c').addEventListener('blur', function() {
	validateInput(this, 0, 100);
});
document.getElementById('m').addEventListener('blur', function() {
	validateInput(this, 0, 100);
});
document.getElementById('y').addEventListener('blur', function() {
	validateInput(this, 0, 100);
});
document.getElementById('k').addEventListener('blur', function() {
	validateInput(this, 0, 100);
});

