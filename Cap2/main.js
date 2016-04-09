var statePrincipal = {
    preload: function(){
        //Códigos referentes ao carregamento do jogo (endereço de imagens, sons, etc...)

        //carrega imagem e atribui a ela um nome
        jogo.load.image('logo', 'logo.png');
    },
    create: function(){
        //Códigos referentes a criação ou adição dos componentes carregados pela função preload

        //Adiciona elemento ao jogo definindo sua posição nos eixos x, y
        //Poderia começar assim "var elemento = ..." porém o elemento não poderia ser referenciado na função update por exemplo
        //o "this" torna o elemento global
        this.elemento = jogo.add.sprite(200, 150, 'logo');

        //Define o ponto de ancoragem do elemento
                                //(x 0 a 1, y de 0 a 1)
        this.elemento.anchor.setTo(0.5, 0.5);
    },
    update: function(){
        //Códigos referentes a execução do jogo.
        //Os códigos inseridos aqui são executados 60 vezes por segundo.

        //Incrementa o angulo em 1° (grau)
        this.elemento.angle += 1;
    }
};
                        //(Largura, Altura, Modo Rederização, Div de carregamento)
var jogo = new Phaser.Game(400, 300, Phaser.AUTO, 'divJogo');

//Adiciona o State "statePrincipal" com a identificação "principal"
jogo.state.add('principal', statePrincipal);

//Inicia o state "principal"
jogo.state.start('principal');

