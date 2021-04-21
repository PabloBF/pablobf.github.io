window.location = "ex02.html"
//var n1 = 5//Number.parseInt(window.prompt('Digite um número'))
//var n2 = 7//Number.parseFloat(window.prompt('Digite outro número'))
//window.alert('Primeiro número foi ' + n1 + '. Segundo número foi ' + n2 + '. ' + n1 + ' + ' + n2 + ' = ' + (n1 + n2))
//window.document.write(`<p>O primeiro número foi ${n1}. O segundo número foi ${n2}. A soma entre ${n1} e ${n2} é igual a ${n1+n2}.</p>`)
//window.document.write(`<p>${n2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`)
//window.document.write(window.navigator.appName)
nome = "Pablo"//window.prompt('Qual seu nome?')
window.document.querySelector('span#vocativo').innerText = nome

var texto1 = window.document.querySelector("p#texto1")
var botao1 = window.document.querySelector("div#botao1")

function clicar(){
	texto1.innerHTML = "Ai! :("
	botao1.style.background = 'red';
}

function entrar(){
	texto1.innerHTML = "Entrou!"
	botao1.style.background = 'blue';
}

function sair(){
	texto1.innerHTML = "Saiu!"
	botao1.style.background = 'green';
}

var botao2 = window.document.querySelector("div#botao2")
botao2.addEventListener('mouseenter', entrar2)
botao2.addEventListener('click', clicar2)
botao2.addEventListener('mouseleave', sair2)

function clicar2(){
	texto2.innerHTML = "Ai! :("
	botao2.style.background = 'yellow';
	botao2.style.color = 'black';
}

function entrar2(){
	texto2.innerHTML = "Entrou!"
	botao2.style.background = 'pink';
}

function sair2(){
	texto2.innerHTML = "Saiu!"
	botao2.style.background = 'lightblue';
}
var fatores = window.document.querySelectorAll('input.fatores')
fatores[0].addEventListener('input', operar)
fatores[1].addEventListener('input', operar)
var operador = window.document.querySelector('select#operador')
operador.addEventListener('change', operar)

var resultado = window.document.querySelector('span#resultado')

function operar(b) {
	n1 = Number(fatores[0].value)
	n2 = Number(fatores[1].value)
	vOperador = operador.value
	if (vOperador == "+") {
		somar()
	} else if (vOperador == "-") {
		subtrair()
	} else if (vOperador == "*") {
		multiplicar()
	} else if (vOperador == "/") {
		dividir()
	}
}

function somar() {
	resultado.innerHTML = String(n1 + n2)
}

function subtrair() {
	resultado.innerHTML = String(n1 - n2)
}

function multiplicar() {
	resultado.innerHTML = String(n1 * n2)
}

function dividir() {
	resultado.innerHTML = String(n1 / n2)
}

var vel = 60
if (vel > 60) {
	console.log('Você foi multado!')
}
else {
	console.log('Não foi multado.')
}
botoes = window.document.querySelectorAll("div.botoes")
var i;
for(i = 0; i < botoes.length; i++) {
	if (botoes[i].hasAttribute("onmouseenter") || botoes[i].getAttribute("id") == "botao2") {} else {
		botoes[i].addEventListener('mouseenter', function (){
			this.lastElementChild.innerHTML = "Olar!";
			this.style.background = 'blue';
			}
		)
	}
	if (botoes[i].hasAttribute("onclick") || botoes[i].getAttribute("id") == "botao2") {} else {
		botoes[i].addEventListener('click', function (){
			this.lastElementChild.innerHTML = "Ui! ¬¬";
			this.style.background = 'red';
			}
		)
	}
	if (botoes[i].hasAttribute("onmouseleave") || botoes[i].getAttribute("id") == "botao2") {} else {
		botoes[i].addEventListener('mouseleave', function (){
			this.lastElementChild.innerHTML = "<i lang='es'>¡Adiós!</i>";
			this.style.background = "rgb(148, 122, 9)";
			}
		)
	}
}