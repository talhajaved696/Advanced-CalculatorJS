// Variables

let output = document.querySelector('#output-value');
let history = document.querySelector('#history-value');
let stored_value = '';

// Operators

let operators = document.querySelectorAll('.operator')
operators.forEach( (opr) => {
	opr.addEventListener('click', () => {
		let operation = opr.id;
		let output_val = output.innerText;
		let history_val = history.innerText;
		// switch (operation){
		// 	case 'clear':
		// 		output.innerText = ''
		// 		history.innerText = ''
		// }
		if(opr.id === 'clear'){
			output.innerText = ''
			history.innerText = ''
		}
		else if (opr.id === 'MC'){
			stored_value = ''
		}
		else if (opr.id === 'MR'){
			output.innerText = stored_value
		}
		else if (opr.id === 'M+'){
			output.innerText = eval(`${stored_value} + ${output_val}`)
		}
		else if (opr.id === 'MS'){
			stored_value = output.innerText;
		}
		else if (opr.id === '+-'){
			
			output.innerText = `-${output_val}`
		}
		else if (opr.id === '.'){
			
			output.innerText = `${output_val}.`+ '0'
		}
		else if (opr.id === 'sqr'){
			
			output.innerText = Math.sqrt(output_val)
		}
		else if (opr.id === 'sq'){
			
			output.innerText = Math.pow(output_val,2)
		}
		else if (opr.id === 'del'){
			
			output.innerText = output_val.substring(0,output_val.length - 1)
		}
		else if (opr.id === '1/x'){
			
			output.innerText = eval(1/output_val).toFixed(2)
		}else{
	
			if(output_val == '' && history_val!=''){
				if(isNaN(history_val[history_val.length - 1])){
					history_val = history_val.substring(0, history_val.length - 1)
				}
			}
			if(output_val != '' || history_val != ''){
				history_val = history_val + output_val;
				if(opr.id == '='){
					let result = eval(history_val)
					output.innerText = result
					history.innerText = ''

				}else{
					history_val = history_val + opr.innerText;
					history.innerText = history_val;
					output.innerText = ''
				} 
			}
		}
	})
})

// Displaying Numbers

let number = document.querySelectorAll('.number')
number.forEach( num =>
{	num.addEventListener('click' , () => {
	let output_value = output.innerText;	
	if(output_value != NaN){
		output_value = output_value + num.innerText;
		output.innerText = output_value; 
	}
})	
})