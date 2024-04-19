
let btn = document.getElementById('btn')
btn.addEventListener('click',table)
function table(e) {
	let inp = document.getElementById('input')
	let num = inp.value
	inp.value = ""
	let i = 1;
	let j = 0;
	while(i<=10 && j<10){
		let tab = num * i;
		i++;
		j++;
		let ul = document.getElementById('ul')
		let list = document.createElement('li')
		list.textContent = num + " + " + j + " = " + tab
		ul.appendChild(list) 
	}
}
