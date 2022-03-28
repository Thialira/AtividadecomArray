let num = document.getElementById("inputNumber");
let Btinical = document.getElementById("Inserir_Inicial");
let BtFinal = document.getElementById("Inserir_Final");
let res = document.getElementById("res");

let vet = [];
let indice = [];
let valor;
let texto;

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function inFinal() {
  valor = parseInt(document.getElementById("inputNumber").value);
  if (isNumero(num.value) && !inLista(num.value, vet)) {
    vet.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
  valor = document.getElementById("inputNumber").value = "";
  valor = document.getElementById("inputNumber").focus();

  lista.innerHTML = "";
  for (let i = 0; i < vet.length; ++i) {
    lista.innerHTML += `<li>Vetor com valor ${vet[i]}</li>`;
  }
}

function inInicial() {
  valor = parseInt(document.getElementById("inputNumber").value);
  if (isNumero(num.value) && !inLista(num.value, vet)) {
    vet.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
  valor = document.getElementById("inputNumber").value = "";
  valor = document.getElementById("inputNumber").focus();

  lista.innerHTML = "";
  for (let i = 0; i < vet.length; ++i) {
    lista.innerHTML += `<li>Vetor com valor ${vet[i]}</li>`;
  }
}

function Limparvet() {
  vetor = document.getElementById("lista");
  vetor.innerHTML = vet = [];
}

function inseind() {
  let valIndice = String(document.getElementById("indice").value);
  if (valIndice == null || valIndice == "") {
    alert("Valor inválido");
    exit();
  } else {
    indice.push(valIndice);
    lista2.innerHTML = "";
    for (let i = 0; i < indice.length; ++i) {
      lista2.innerHTML += `<li>${indice[i]}</li>`;
    }
    valor = document.getElementById("indice").value = "";
    valor = document.getElementById("indice").focus();
  }
}

function removind() {
  let indpop = indice.pop();
  lista2.innerHTML = "";
  for (let i = 0; i < indice.length; ++i) {
    lista2.innerHTML += `<li>${indice[i]}</li>`;
    valor = document.getElementById("indice").value = "";
    valor = document.getElementById("indice").focus();
  }
}
