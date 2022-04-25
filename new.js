function nowyKalkulator (operator){
	
	var a = document.getElementById('a').value;
	var b = 0 + document.getElementById('b').value;
	
	switch (operator){
			
		case '+':			
			var result = parseFloat(a) + parseFloat(b);			
		break;
		
		case '-':			
			var result = parseFloat(a) - parseFloat(b);			
		break;
		
		case 'x':			
			var result = parseFloat(a) * parseFloat(b);			
		break;
		
		case '/':			
			var result = parseFloat(a) / parseFloat(b);			
		break;
		
		case '%':			
			var result = parseFloat(a) /100 ;			
		break;
		}
	
	
	document.getElementById('result').value = '= ' + result;
	//document.getElementById('podglad').value = result + operator ;
	 
	document.getElementById('b').value = result;
	;
	

}