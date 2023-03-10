const largura = document.getElementById("largura");
const avanco = document.getElementById("avanco");
const valorM2 = document.getElementById("valor");

const textArea1 = document.getElementById("textArea1");
const textArea2 = document.getElementById("textArea2");
const textArea3 = document.getElementById("textArea3");
const textArea4 = document.getElementById("textArea4");

function calculaCaida(num) {
  const hipotenusa = Math.sqrt(
    avanco.value * avanco.value + avanco.value * avanco.value
  );
  num = hipotenusa + 0.3;
  if (avanco.value != false) {
    textArea1.value = num.toFixed(2);
  }

  return num;
}

function calculaMetragem(num) {
  num = calculaCaida() * largura.value;
  let numConvertido = num.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  if (largura.value != false) {
    textArea2.value = numConvertido.replace(",", ".") + "m²";
  }

  return num;
}

function lonaFabricacao(num) {
  num = calculaCaida();
  let larguraConvertida = Number(largura.value)
  let mestrosDeLona = num;

  for (i = 1.4; i < larguraConvertida; i = i + 1.40) {
    mestrosDeLona = mestrosDeLona + num;
    console.log(i)
  }

  let valorComAcrescimo = mestrosDeLona + 0.50;
  textArea3.value = valorComAcrescimo.toFixed(2) + "m"
}

function calculaValorPorM2(num) {
  num = (textArea1.value* largura.value * valorM2.value).toFixed(2);
  let valorConvertido = parseFloat(num);
  textArea4.value = valorConvertido.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return num;
}

function ativaFucao() {
  calculaCaida();
  calculaMetragem();
  lonaFabricacao();
  calculaValorPorM2();
}

function limpar() {
  largura.value = "";
  avanco.value = "";
  valorM2.value = "";

  textArea1.value = "";
  textArea2.value = "";
  textArea3.value = "";
  textArea4.value = "";
}
