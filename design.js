//funções em javascript
function agradecimento() {//agradece aos usuários do sisteman
	var nome = document.getElementById('nome').value;//cria uma variável que pega o nome digitado
	var email = document.getElementById('email').value;//cria uma variável pega o e-mail digitado
	if (nome == "" || email == ""){//se o email e o nome forem vzios ou não tiverem nada
		window.alert("Preencha o formulário para se cadastrar!");//ele alerta para preencher o formulário
	}
	
	else {//caso esteja tudo certo
	window.alert("Obrigado por se cadastrar, você receberá todas as novidades do Colégio Rockefeller, tenha um ótimo dia " + nome + "!");//irei mostrar uma mensagem de agradecimento com o nome do usuario que ele digitou
	var nome = document.getElementById('nome').value = "";//eu apago o nome do usuario para receber novos dados
	var email = document.getElementById('email').value = "";//eu apago o email para receber novos dados
	}
}
//funções
function mostrarNota() {//peço para digitar para mostrar as notas que são geradas aleatoriamente
	var nomePai = document.getElementById('pai').value;//peço para o pi que é um usuário digitar o seu nome e o guardo em um variável
	var nomeFilho = document.getElementById('filho').value;//peço para este usuário que é u pi digitar o nome de seu filho e o gurdo em uma variável

	if (nomePai == "" || nomeFilho == "") {//se não for digitado nada
		window.alert("Preencha o formulário para saber a média do seu filho!");//exibo um pedido pra ser digitado o nome do pai e filho
	}

	else {
		var nota = Math.random(1) * 10 + 1;//caso seja digitado eu uso uma função da biblioteca de matemática e gero números aleatórios
		
		if (nota < 6) {//se a nota gerada aleatoriamente for menor que 6, então eu exibo que a bita estpa baixa
			var texto = "Média: " + nota.toFixed(2) + ", seu filho está abaixo da média.";
		}
		else if (nota > 9) {//se a nota for maior que nove eu exibo que o filho possue uma nota excelente
			var texto = "Média: " + nota.toFixed(2) + ", seu filho é excelente, terá um grande futuro pela frente";
		}
		else {
			var texto = "Média: " + nota.toFixed(2) + ", seu filho é um ótimo aluno.";//se a nota for maior que seis e menor que nove eu mostro que o filho é esforçado
		}
		document.getElementById('nota').innerHTML = texto;//depois de mostrar eu esvazio as variáveis que foram usadas
		var nomePai = document.getElementById('pai').value = "";
		var nomeFilho = document.getElementById('filho').value = "";
	}
}
//funções
function enviar() {
	var op = document.getElementById('op').value;//eu pego uma opinião digitada pelo usuário
	if (op == "") {//se ele não digitar nada, nada será feito

	}

	else {//caso ele digite algo eu exibo uma mensagem
		window.alert("Sua opinião foi enviada, obrigado pela colaboração!")//exibo a mensagem
		var op = document.getElementById('op').value = ""//esvazio a variável
	}
}