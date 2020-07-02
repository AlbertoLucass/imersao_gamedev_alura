class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50
    this.pulos = 0
    this.invencivel = false
    this.podePular = true;
  }
  
  pula() {
    if(this.puloDuplo < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.puloDuplo++;
    } else {
      this.podePular = false;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial) {
      this.y = this.yInicial;
      this.puloDuplo = 0;
      this.podePular = true;
    }
  }
  
  tornarInvencivel() {
    this.invencivel = true
    setTimeout(() => {
      this.invencivel = false
    }, 1500)
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel) {
      return false
    }
    
    const precisao = .9
   /* noFill()
    rect(this.x+20, 
      this.y + 30, 
      this.largura * precisao-30, 
      this.altura * precisao-20)
    rect( 
      inimigo.x+30,
      inimigo.y+40,
      inimigo.largura * precisao-30,
      inimigo.altura * precisao-40)*/
    const colisao = collideRectRect(
      this.x+20, 
      this.y+30, 
      this.largura * precisao-30, 
      this.altura * precisao-20,
      inimigo.x+30,
      inimigo.y+40,
      inimigo.largura * precisao-30,
      inimigo.altura * precisao-40
    );
    
    return colisao;
  }

}