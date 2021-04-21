saudacao = window.document.querySelector("span#saudacao")
imagem = window.document.querySelector("img#imagem")
secao =  window.document.querySelector("section#secao")
infoHoras = window.document.querySelector("span#infoHoras")
corpo = window.document.querySelector("body")
hora = new Date().getHours()
if (hora == 1) {
	infoHoras.innerText = "agora é 1 hora."
} else {
	infoHoras.innerText = `agora são ${hora} horas.`
}
if (secao.offsetWidth > 274) {
	imagem.style.width = "274px";
} else {
	imagem.style.width = "100%";
}

if (hora < 12) {
	saudacao.innerText = "Bom dia"
	imagem.setAttribute("src", "img/ex01/manha.png")
	corpo.style.backgroundColor = "#E2CD9F";
} else if (hora < 18) {
	saudacao.innerText = "Boa tarde"
	imagem.setAttribute("src", "img/ex01/tarde.png")
	corpo.style.backgroundColor = "#C67E70";
} else if (hora < 24) {
	saudacao.innerText = "Boa noite"
	imagem.setAttribute("src", "img/ex01/noite.png")
	corpo.style.backgroundColor = "#726866";
} else {
	saudacao.innerText = "Seja bem-vindo!"
} 