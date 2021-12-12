var cartaBatman = {
    nome: "Batman",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/batman-ben-affleck.jpg",
    atributos: {
        forca: 80,
        velocidade: 34,
        poderes: 70,
        cura: 20
    }
}

var cartaFlash = {
    nome: "Flash",
    imagem: "https://tecnoblog.net/wp-content/uploads/2021/02/fortnite-flash-e1612808253605-700x393.jpeg",
    atributos: {
        forca: 60,
        velocidade: 100,
        poderes: 70,
        cura: 85
    }
}

var cartaSuperman = {
    nome: "SuperMan",
    imagem: "https://static.wikia.nocookie.net/dccomics/images/a/a5/Superman_Vol_5_1_Textless.jpg/revision/latest?cb=20200421194020&path-prefix=pt",
    atributos: {
        forca: 99,
        velocidade: 97,
        poderes: 98,
        cura: 95
    }
}

var cartaAquaman = {
    nome: "AquaMan",
    imagem: "https://ibcdn.canaltech.com.br/fooR0xFuopSi6D_iF-1fqkzm-PY=/0x39:2000x1166/512x288/smart/i345018.jpeg",
    atributos: {
        forca: 85,
        velocidade: 40,
        poderes: 60,
        cura: 48
    }
}

var cartaMulherMaravilha = {
    nome: "Mulher Maravilha",
    imagem: "https://static.wikia.nocookie.net/dcverse/images/0/0f/Mulher-Maravilha_75A.png/revision/latest/scale-to-width-down/340?cb=20191006200135",
    atributos: {
        forca: 80,
        velocidade: 30,
        poderes: 70,
        cura: 20
    }
}

var cartaLanternaVerde = {
    nome: "Lanterna Verde",
    imagem: "https://i.pinimg.com/originals/ca/27/0b/ca270b27e4799fa0b40a3b9d08f32cf2.png",
    atributos: {
        forca: 70,
        velocidade: 35,
        poderes: 75,
        cura: 15
    }
}

var cartaCiborgue = {
    nome: "Ciborgue",
    imagem: "https://quartaparede.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/03/30162948/ciborgue-752x420.jpg",
    atributos: {
        forca: 95,
        velocidade: 20,
        poderes: 80,
        cura: 100
    }
}

var cartaMulherLeopardo = {
    nome: "Mulher Leopardo",
    imagem: "https://www.einerd.com.br/wp-content/uploads/2020/04/Mulher-Leopardo-capa.jpg",
    atributos: {
        forca: 70,
        velocidade: 90,
        poderes: 0,
        cura: 15
    }
}

var cartaCoringa = {
    nome: "Coringa",
    imagem: "https://i.pinimg.com/originals/05/19/51/0519515f32c8b481da5b1910a6f7056c.jpg",
    atributos: {
        forca: 50,
        velocidade: 30,
        poderes: 25,
        cura: 0
    }
}

var cartaLexLuthor = {
    nome: "Lex Luthor",
    imagem: "https://ovicio.com.br/wp-content/uploads/2019/02/20190212-justice-league-lex-luthor-header.jpg",
    atributos: {
        forca: 15,
        velocidade: 10,
        poderes: 85,
        cura: 10
    }
}

var cartaBrainiac = {
    nome: "Brainiac",
    imagem: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Brainiac_%28DC_Comics%29.png/201px-Brainiac_%28DC_Comics%29.png",
    atributos: {
        forca: 65,
        velocidade: 20,
        poderes: 85,
        cura: 75
    }
}

var cartaVandalSavage = {
    nome: "Vandal Savage",
    imagem: "https://4.bp.blogspot.com/-2xGVTBtepUw/WOterI-o9cI/AAAAAAAAEJs/Sy-MrOo7wz85lh1GKT1eK5yFVS5uVOhLwCLcB/s640/vd.jpg",
    atributos: {
        forca: 80,
        velocidade: 30,
        poderes: 95,
        cura: 90
    }
}

var cartaGeneralZod = {
    nome: "General Zod",
    imagem: "https://upload.wikimedia.org/wikipedia/en/7/7d/General_Zod_%28circa_2018%29.png",
    atributos: {
        forca: 75,
        velocidade: 40,
        poderes: 80,
        cura: 45
    }
}

var cartaSinestro = {
    nome: "Sinestro",
    imagem: "https://i.pinimg.com/originals/13/dd/39/13dd3985ff51ea47a4d0630897009d6a.jpg",
    atributos: {
        forca: 70,
        velocidade: 40,
        poderes: 70,
        cura: 50
    }
}

var cartaBizarro = {
    nome: "Bizarro",
    imagem: "https://static.wikia.nocookie.net/dccomics/images/7/70/Bizarro_0001.jpg/revision/latest/top-crop/width/360/height/450?cb=20180629032430&path-prefix=pt",
    atributos: {
        forca: 30,
        velocidade: 40,
        poderes: 35,
        cura: 20
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaBatman, cartaFlash, cartaSuperman, cartaAquaman, cartaMulherMaravilha, cartaLanternaVerde, cartaCiborgue, cartaMulherLeopardo, cartaCoringa, cartaLexLuthor, cartaBrainiac, cartaVandalSavage, cartaGeneralZod, cartaSinestro, cartaBizarro]
// 0    1   2   3   4   5   6   7   8   9   10  11  12  13  14

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de Cartas no Jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + " x " + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.stylebackgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de Jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosJogador < pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado

    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resutaldo')
    divResultado.innerHTML = ""
}