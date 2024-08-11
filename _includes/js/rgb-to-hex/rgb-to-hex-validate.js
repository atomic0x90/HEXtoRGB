// 입력 필드 값 검증 함수
function validateInput(input)
{
	let value = parseInt(input.value, 10);

	if(isNaN(value) || value < 0)
	{
		value = 0;
	}
	else if(value > 255)
	{
		value = 255;
	}

	input.value = value;
}

// 입력 필드에 이벤트 리스너 추가
document.getElementById('r').addEventListener('input', function(){
	validateInput(this);
});

document.getElementById('g').addEventListener('input', function(){
	validateInput(this);
});

document.getElementById('b').addEventListener('input', function(){
	validateInput(this);
});

// `-` 기호 입력 방지
document.getElementById('r').addEventListener('keydown', function(event){
	if (event.key === '-' || event.key === 'e' || event.key === '+' || event.key === '.'){
		event.preventDefault();
	}
});

document.getElementById('g').addEventListener('keydown', function(event){
	if (event.key === '-' || event.key === 'e' || event.key === '+' || event.key === '.'){
		event.preventDefault();
	}
});

document.getElementById('b').addEventListener('keydown', function(event){
	if (event.key === '-' || event.key === 'e' || event.key === '+' || event.key === '.'){
		event.preventDefault();
	}
});
