var mouseEvent = "empty";// cira variavel mouseEvente de valor vazio
var lastPositionOfX, lastPositionOfY;//cria as variaveis que vao armazenar as cordenadas do mouse

canvas = document.getElementById("myCanvas");//pega o elemento canvas e armazena em uma variavel
ctx = canvas.getContext("2d");//usa o contexto em 2d

color = "black";// declara um variavel de valor black
widthOfLine = 1;// declara a variavel de largura da linha com o valor 1
canvas.addEventListener("mousedown", my_mousedown);//o canvas está aguardando o evento mouse down
function my_mousedown(e) {// chama a função my mouse down
    //Início da Atividade Adicional
    color = document.getElementById("color").value;// pega o valor inserido no elemento color
    widthOfLine = document.getElementById("widthOfLine").value;// pega o valor inserido no elemento width of line
    //Fim da Atividade Adicional
  
  mouseEvent = "mousedown";// altera o valor da variavel para mousedown
}

canvas.addEventListener("mouseup", my_mouseup);//o canvas espera o evento mouse up 
function my_mouseup(e) {// recebe o evento na funçao e executa
  mouseEvent = "mouseup";// altera a variavel para mouseup
}

canvas.addEventListener("mouseleave", my_mouseleave);//o canvas espera o evento mouseleave
function my_mouseleave(e) {// recebe o evento na funçao e executa
  mouseEvent = "mouseleave";// altera a variavel para mouseleave
}

canvas.addEventListener("mousemove", my_mousemove);//o canvas esperaa o evento mousemove
function my_mousemove(e) {//espera um evento mouse move
  currentPositionOfMouseX = e.clientX - canvas.offsetLeft;//posição atual do mouse e= evento client x subitraido do valor do canvas
  currentPositionOfMouseY = e.clientY - canvas.offsetTop;//posição atual do mouse e= evento client x subitraido do valor do canvas

  if (mouseEvent == "mousedown") {//verifica se o event é mousedown é verdade
    ctx.beginPath();//inicia o caminho
    ctx.strokeStyle = color;//a cor utilizada
    ctx.lineWidth = widthOfLine;//a expessura da linha

    console.log("Ultima posicao das coordenadas x e y = ");//passa as cordenadas para o console
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);//
    ctx.moveTo(lastPositionOfX, lastPositionOfY);//de qual ponto que o desenho vai começar

    console.log("Posicao atual das coordenadas x e y = ");//passa as cordenadas para o console
    console.log(
      "x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY
    );
    ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);//leva alinha até a posição atual do mouse
    ctx.stroke();// adiciona a borda da linha
  }

  lastPositionOfX = currentPositionOfMouseX;//transforma a posiçao atual na posiçao antiga
  lastPositionOfY = currentPositionOfMouseY;//transforma a posiçao atual na posiçao antiga
}

//Atividade Adicional
function clearArea() {// limpa a tela
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);// faz um limpa em linha reta que preenche a tela toda
}
