var statePrincipal = {
    preload: function(){
        jogo.load.image('imgJogador', 'assets/player.png');
        jogo.load.image('paredeV', 'assets/wallVertical.png');
        jogo.load.image('paredeH', 'assets/wallHorizontal.png')
    },
    create: function(){
        //propriedade que define a cor do fundo do jogo
        jogo.stage.backgroundColor = '#3498db';
        //inicia a física do jogo (Opções: ARCADE, NINJA, P2)
        jogo.physics.startSystem(Phaser.Physics.ARCADE);

        //As variáveis *.world.centerX, * jogo.world.centerY possuem o valor da posição central dos eixos do mundo
        this.spriteJogador = jogo.add.sprite(jogo.world.centerX, jogo.world.centerY, 'imgJogador');

        this.spriteJogador.anchor.setTo(0.5, 0.5);

        //Habilita física do tipo arcade no elemento "spriteJogador"
        jogo.physics.arcade.enable(this.spriteJogador);

        //Define a gravidade no eixo y sobre o corpo do elemento
        this.spriteJogador.body.gravity.y = 500;

        //Obten o input das teclas direcionais do teclado
        this.direcional = jogo.input.keyboard.createCursorKeys();

    },
    update: function(){
        this.moveJogador();
    },

    moveJogador: function(){
    //essa função controlará os movimentos do jogador

        //Se a tecla direcional esquerda estiver pressionada move o jogador -200 px
        if(this.direcional.left.isDown){
            this.spriteJogador.body.velocity.x = -200;
        }
        //se direita +200 px
        else if(this.direcional.right.isDown){
            this.spriteJogador.body.velocity.x = 200;
        }
        //Nenhuma tecla pressionada para o jogador
        else{
            this.spriteJogador.body.velocity.x = 0;
        }
        //se cima & se o corpo do jogador estiver tocando no chão, move (pula) -320
        if(this.direcional.up.isDown && this.spriteJogador.body.touching.down){
            this.spriteJogador.body.velocity.y = -320;
        }
    }
};




var jogo = new Phaser.Game(500, 340, Phaser.AUTO, 'divJogo');

jogo.state.add('principal', statePrincipal);
jogo.state.start('principal');
