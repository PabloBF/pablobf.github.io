const formulario = window.document.querySelector("form#formulario");
formulario.addEventListener("submit", function(event) {
	event.preventDefault();
	var nasc = window.document.querySelector("input#nasc");
	var dataNiver = new Date(nasc.value);
	var idade = Math.floor((Date.now() - dataNiver) / 31558149763.5456) //31 bi é a quantidade de milissegundos por ano.
	elGenero = window.document.getElementsByName("genero")
	for (var i = 0; i < elGenero.length; i++) {
		if(elGenero[i].checked) {
			var genero = elGenero[i].value
		}
	}
	var maturidade = ""
	if (idade < 16) {
		maturidade = "bebe"
	} else if (idade < 26) {
		maturidade = "jovem"
	} else if (idade < 56) {
		maturidade = "adulto"
	} else {
		maturidade = "idoso"
	}
	infoResp = window.document.createElement("p")
	infoResp.setAttribute("id", "infoResp")
	if (genero == "f") {
		infoResp.innerHTML = `Você é uma mulher de ${idade} ano${(idade == 1)?"":"s"}.`
	} else if (genero == "m") {
		infoResp.innerHTML = `Você é um homem de ${idade} ano${(idade == 1)?"":"s"}.`
	} else {
		infoResp.innerHTML = `Você tem ${idade} ano${(idade == 1)?"":"s"}.`
	}
	window.document.querySelector("div#resultado").appendChild(infoResp)
	imagem = window.document.createElement("img")
	imagem.setAttribute("id", "imagem")
	imagem.setAttribute("src", `img/ex02/${maturidade}-${genero}.png`)
	imagem.style.width = "200px";
	window.document.querySelector("div#resultado").appendChild(imagem)
	//window.alert(`O formulário foi enviado com sucesso. ${idade} ${genero}`);
})