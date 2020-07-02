class TelaInicial {
  constructor(){
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(50);
    text('As aventuras de', width / 2, height / 3-50);
    textSize(150);
    text('Memel', width / 2, height / 5 * 3-50)
    
    textSize(30);
    text('Seta para cima : Pula', width / 2, height / 3 + 300)
         
    textSize(30);   
    text('2x Seta para cima : Dois pulos', width / 2, height / 3 + 330);
     
  }
  
  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
  
  
}