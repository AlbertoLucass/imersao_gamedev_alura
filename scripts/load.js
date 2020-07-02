function preload() {
  
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  
  imagemCenario1 = loadImage('imagens/parallax/Sky.png');
  imagemCenario2 = loadImage('imagens/parallax/Foreground.png');
  imagemCenario3 = loadImage('imagens/parallax/Middle_Decor.png');
  imagemCenario4 = loadImage('imagens/parallax/BG_Decor.png');
  imagemCenario5 = loadImage('imagens/parallax/Ground.png');
  
  
  
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json')
  somDoJogo = loadSound('sons/somJogo.mp3');
  somDoPulo = loadSound('sons/somDoPulo.mp3');
  somGameOver = loadSound('sons/gameOver.mp3');  
  somColisao = loadSound('sons/hit.mp3');
}