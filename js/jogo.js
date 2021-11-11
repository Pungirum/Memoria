var jogar = true;
var papai = new Audio("midia/papai.ogg")
var arthur = new Audio("midia/arthur.ogg")
var vovo = new Audio("midia/vovo.ogg")
var alvaro = new Audio("midia/alvaro.ogg")
var daniel = new Audio("midia/daniel.ogg")
var azeem = new Audio("midia/azeem.ogg")
var giulia = new Audio("midia/giulia.ogg");
var alice = new Audio("midia/alice.ogg");
var barbara = new Audio("midia/barbara.ogg")
var caio = new Audio("midia/caio.ogg")
var gabi = new Audio("midia/gabi.ogg")
var gareth = new Audio("midia/gareth.ogg")
var giulia = new Audio("midia/giulia.ogg")
var iago = new Audio("midia/iago.ogg")
var iza = new Audio("midia/iza.ogg")
var lucas = new Audio("midia/lucas.ogg")
var mamae = new Audio("midia/mamae.ogg")
var marcinha = new Audio("midia/marcinha.ogg")
var marcio = new Audio("midia/marcio.ogg")
var marcos = new Audio("midia/marcos.ogg")
var martinha = new Audio("midia/martinha.ogg")
var matheus = new Audio("midia/matheus.ogg")
var milena = new Audio("midia/milena.ogg")
var paulem = new Audio("midia/paulem.ogg")
var raissa = new Audio("midia/raissa.ogg")
var samara = new Audio("midia/samara.ogg")
var samuel = new Audio("midia/samuel.ogg")
var sofia = new Audio("midia/sofia.ogg")
var thales = new Audio("midia/thales.ogg")
var vitor = new Audio("midia/vitor.ogg")
var yasmin = new Audio("midia/yasmin.ogg")
var cintia = new Audio("midia/cintia.ogg")
var gi = new Audio("midia/gi.ogg")
var cunha = new Audio("midia/cunha.ogg")
var padrinho = new Audio("midia/padrinho.ogg")
var madrinha = new Audio("midia/madrinha.ogg")
var marina = new Audio("midia/marina.ogg")
var braz = new Audio("midia/braz.ogg")
var ian = new Audio("midia/ian.ogg")
var dje = new Audio("midia/dje.ogg")


var palma = new Audio("midia/palma.mp3")
var imagens = ["midia/paulo.jpg", //0
    "midia/tutuco.jpg", //1
    "midia/vovo.jpg", //2
    "midia/alvaro.jpg", //3
    "midia/daniel.jpg", //4
    "midia/azeem.jpg", //5
    "midia/giulia.jfif", //6
    "midia/sofia.jfif", //7
    "midia/yasmin.jfif", //8
    "midia/raissa.jfif", //9
    "midia/marta.jfif", //10
    "midia/cunha.jfif", //11
    "midia/barbara.jfif", //12
    "midia/alice.jfif", //13
    "midia/milena.jfif", //14
    "midia/gi.jfif", //15
    "midia/matheus.jfif", //16
    "midia/paulem.jfif", //17
    "midia/marcio.jfif", //18
    "midia/lucas.jfif", //19
    "midia/iago.jfif", //20
    "midia/samara.jfif", //21
    "midia/gareth.jfif", //22
    "midia/marina.jfif", //23
    "midia/gabi.jfif", //24
    "midia/braz.jfif",//25
    "midia/marcia.jpg",//26
    "midia/mamae.jpg", //27
    "midia/samuel.png", //28
    "midia/dje.jfif", //29
    "midia/vitor.jfif", //30
    "midia/cintia.jfif", //31
    "midia/thales.jfif", //32
    "midia/ian.jfif", //33
    "midia/caio.jfif", //34
    "midia/padrinho.jfif", //35
    "midia/viviane.jfif", //36
    "midia/marcos.jfif" //37
];


var mm = 0;
var ss = 0;
var ml = 0;

var tempo = 10;
var cron;

function start(){
    
    var comeco = document.getElementById("start")
    comeco.style.display = "none"

    var aparece = document.getElementById("tabuleiro")
    aparece.style.display = "block"
    
    cron = setInterval(() => { timer(); }, tempo);
}   




//Faz a contagem do tempo e exibição
function timer() {
    ml++; //Incrementa +1 na variável ss

    if (ml == 100) { //Verifica se deu 59 segundos
        ml = 0; //Volta os segundos para 0
        ss++; //Adiciona +1 na variável mm

        if (ss == 59) { //Verifica se deu 59 minutos
            ss = 0;//Volta os minutos para 0
            mm++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (ml < 10 ? '0' + ml : ml);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}
var cb = 1
var som = [papai, arthur, vovo, alvaro, daniel, azeem, giulia, sofia, yasmin, raissa, martinha, cunha, barbara, alice, milena, gi, matheus, paulem, marcio, lucas, iago, samara, gareth, marina, gabi, braz, marcinha, mamae, samuel, dje, vitor, cintia, thales, ian, caio, padrinho, madrinha, marcos]

var recomecar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var cartaAF = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var fechada = 0;

//var imgCartas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
//---------------------------------------------------------
//Buscando 6 cartas aleatorias no nosso banco 
function cartasJogo() {
    var IC = []; //[a0,a0 , a1,a1 , a2,a2 , a3,a3 , a4,a4 , a5,a5]
    while (IC.length < 6) {
        var elemento = parseInt(Math.random() * 37);
        //alert(elemento);
        if (IC.indexOf(elemento) == -1) {
            IC.push(elemento);
        }
    }
    return IC.concat(IC);
}
//-----------------------------------------------------------

var imgCartas = cartasJogo();



function embaralhamento() { 
for (var i = 0; i < imgCartas.length; i++) {  //Embaralhar as cartas
    var sorte = parseInt(Math.random() * imgCartas.length);
    var aux = imgCartas[sorte];
    imgCartas[sorte] = imgCartas[i]
    imgCartas[i] = aux
}
}
embaralhamento()
//alert(imgCartas)
//============================================
function somaArray(arg) {
    return arg.reduce((total, currentElement) => total + currentElement);
}
//===========================================
//==========================================
function mudarImg(arg) {
    //alert(typeof arg);
    
    if (jogar) {
        jogar = false;
        //alert(imgCartas)
        //alert(arg);
        if (cartaAF[arg] === 0) { //Verifia se a carta clicada está fechada
            if (somaArray(cartaAF) < 2) {  //Se não tem duas cartas abertas abre a carta clicada
                var mudarCarta = document.getElementById(arg);
                mudarCarta.src = imagens[imgCartas[arg]];
                pos = cartaAF.indexOf(1); //verifica antes de abrir a carta atual se ja existia uma aberta
                cartaAF[arg] = 1; //Marca a carta atual como aberta
                var au = som[imgCartas[arg]]

                if (somaArray(recomecar) == 10) {
                    document.getElementById("botao").style.display = "block"
                    clearInterval(cron);
                }

                au.play();
                /*    
                      if (imgCartas[cartaAF.indexOf(1)] == 0) {
                          papai.play()
                      } else if (imgCartas[cartaAF.indexOf(1)] == 1) {
                          arthur.play()
                      } else if (imgCartas[cartaAF.indexOf(1)] == 2) {
                          vovo.play()
                      } else if (imgCartas[cartaAF.indexOf(1)] == 3) {
                          alvaro.play()
                      } else if (imgCartas[cartaAF.indexOf(1)] == 4) {
                          daniel.play()
                      } else if (imgCartas[cartaAF.indexOf(1)] == 5) {
                          azeem.play()
                      } 
          
                   */
            }
            if (somaArray(cartaAF) == 2) {
                setTimeout(function () {
                    var primeira = cartaAF.indexOf(1);
                    var segunda = cartaAF.indexOf(1, primeira + 1)
                    if (imgCartas[primeira] == imgCartas[segunda]) {
                        palma.play()
                        document.getElementById(primeira).style.display = "none"
                        document.getElementById(segunda).style.display = "none"
                        recomecar[primeira] = cb
                        recomecar[segunda] = cb


                        cartaAF[primeira] = fechada
                        cartaAF[segunda] = fechada
                    } else {
                        document.getElementById(primeira).src = "midia/carta.jpg"
                        document.getElementById(segunda).src = "midia/carta.jpg"
                        cartaAF[primeira] = fechada
                        cartaAF[segunda] = fechada
                    }
                }, 1050)
            }
            //}else{
            //alert("Carta já aberta! beep");

            setTimeout(function () {
                jogar = true;
            }, 1000)
        }
    }




}
function reiniciar() {
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
    cron = setInterval(() => { timer(); }, tempo);
    
    var botuun = document.getElementById("botao")
    botuun.style.display = "none"
    var c0 = document.getElementById("0")
    var c1 = document.getElementById("1")
    var c2 = document.getElementById("2")
    var c3 = document.getElementById("3")
    var c4 = document.getElementById("4")
    var c5 = document.getElementById("5")
    var c6 = document.getElementById("6")
    var c7 = document.getElementById("7")
    var c8 = document.getElementById("8")
    var c9 = document.getElementById("9")
    var c10 = document.getElementById("10")
    var c11 = document.getElementById("11")

    c0.src = "midia/carta.jpg"
    c1.src = "midia/carta.jpg"
    c2.src = "midia/carta.jpg"
    c3.src = "midia/carta.jpg"
    c4.src = "midia/carta.jpg"
    c5.src = "midia/carta.jpg"
    c6.src = "midia/carta.jpg"
    c7.src = "midia/carta.jpg"
    c8.src = "midia/carta.jpg"
    c9.src = "midia/carta.jpg"
    c10.src = "midia/carta.jpg"
    c11.src = "midia/carta.jpg"

    c0.style.display = "block"
    c1.style.display = "block"
    c2.style.display = "block"
    c3.style.display = "block"
    c4.style.display = "block"
    c5.style.display = "block"
    c6.style.display = "block"
    c7.style.display = "block"
    c8.style.display = "block"
    c9.style.display = "block"
    c10.style.display = "block"
    c11.style.display = "block"

    recomecar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    imgCartas = cartasJogo();
    embaralhamento()
}

