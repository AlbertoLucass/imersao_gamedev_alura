class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa
    this.cenarios = [];
  }

  setup() {
    //cenario = new Cenario(imagemCenario, 3);
    
    cenario1 = new Cenario(imagemCenario1, 3);//ceu
    cenario2 = new Cenario(imagemCenario2, 2.7);//foreground - principal
    cenario3 = new Cenario(imagemCenario3, 1.2);//middle
    cenario4 = new Cenario(imagemCenario4, 0.5);//bg
    cenario5 = new Cenario(imagemCenario5, 2.7);//ground
    
    pontuacao = new Pontuacao()
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
  }  


  
  keyPressed(key) {
        if(key === 'ArrowUp') {
            personagem.pula();
            if(personagem.podePular) {
                somDoPulo.play();
            }
         }
    }
  
  mousePressed() {
      personagem.pula();
      if(personagem.podePular) {
            somDoPulo.play();
      }
  }

  draw() {
    
      cenario1.exibe();
      cenario1.move();
    
      cenario4.exibe();
      cenario4.move();
    
      cenario3.exibe();
      cenario3.move();
    
      cenario2.exibe();
      cenario2.move();

    vida.draw()
    pontuacao.exibe()
    pontuacao.adicionarPonto()
    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe()
    inimigo.move()
    
    cenario5.exibe();
    cenario5.move();


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }
    
    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida()
      somColisao.play()
      personagem.tornarInvencivel()
      if (vida.vidas == 0) {
        image(imagemGameOver, width / 2 - 200, height / 3)
        somGameOver.play();
        somDoJogo.stop();
        somDoPulo.stop()
        vida.perdeVida()
        noLoop()
      }
    }
  }
}