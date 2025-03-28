function calcular() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let area = (base * altura) / 2;

    document.getElementById("resultado-container").style.display = "block";
	document.getElementById("calculo").innerText = `A área do triângulo é: ${Math.floor(area)}`;

    // Limpar o segundo resultado, caso exista
    document.getElementById("calculo2").innerText = "";
}