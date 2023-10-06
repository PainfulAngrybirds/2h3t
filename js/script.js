let num1 = "";
let num2 = "";
let valor = "";
let temsimbolo = false;
let executa = "";


NAOcliqueAQUI = () => alert("fala bro");

function clicado() {
  alert("Olá !!");
}

mensagem = (msg) => console.log(msg);

soma = (a, b) => a + b;
sub = (a, b) => a - b;
mult = (a, b) => a * b;
div = (a, b) => a / b;
juros = (c, j) => mult(c, div(j, 100));
montante = (c, j) => soma(juros(c, j), c);



mensagem(soma(4, soma(7, soma(11, 15))));
mensagem(sub(18, 7));
mensagem(soma(2, div(2, 2)));
mensagem(juros(420, 18));
mensagem(montante(420, 18));

mostrar_display = (msg) => {
  document.getElementById("resultado").value = msg;
}

function digitando(tecla) {
  if (tecla == ",") {
    if (!temsimbolo) {
      valor += tecla;
      mostrar_display(valor);
      temsimbolo = true
    }
    return;
  }

  valor += tecla;
  mostrar_display(valor);
}

function operacao(op){
  executa = op;
  num1 = valor;
  valor = "";
}

function calcula() {
  if(executa != "") {
    num2 = valor;
    if(executa == "soma") mostrar_display(soma(Number(num1), Number(num2)));
    if(executa == "sub") mostrar_display(sub(Number(num1), Number(num2)));
    if(executa == "mult") mostrar_display(mult(Number(num1), Number(num2)));
    if(executa == "div") mostrar_display(div(Number(num1), Number(num2)));
    num1 = "";
    num2 = "";
    valor = "";
    temsimbolo = false;
    executa = "";
  } 
}
