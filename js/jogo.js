var jogar = true;
var papai = new Audio("midia/papai.ogg")
var arthur = new Audio("midia/arthur.ogg")
var vovo = new Audio("midia/vovo.ogg")
var alvaro = new Audio("midia/alvaro.ogg")
var daniel = new Audio("midia/daniel.ogg")
var azeem = new Audio("midia/azeem.ogg")
var palma = new Audio("midia/palma.mp3")
var imagens = ["midia/paulo.jpg",
    "midia/tutuco.jpg",
    "midia/vovo.jpg",
    "midia/alvaro.jpg",
    "midia/daniel.jpg",
    "midia/azeem.jpg"

];
//var botao = document.getElementById("botao")
var cb = 1
var som = [papai, arthur, vovo, alvaro, daniel, azeem]
var recomecar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var cartaAF = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var fechada = 0;
var imgCartas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
for (var i = 0; i < imgCartas.length; i++) {  //Embaralhar as cartas
    var sorte = parseInt(Math.random() * imgCartas.length);
    var aux = imgCartas[sorte];
    imgCartas[sorte] = imgCartas[i]
    imgCartas[i] = aux
} 
//alert(imgCartas)
//============================================
function somaArray(arg) {
    return arg.reduce((total, currentElement) => total + currentElement);
}
//===========================================
//==========================================
function mudarImg(arg) {

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
    
    for (var i = 0; i < imgCartas.length; i++) {  //Embaralhar as cartas
        var sorte = parseInt(Math.random() * imgCartas.length);
        var aux = imgCartas[sorte];
        imgCartas[sorte] = imgCartas[i]
        imgCartas[i] = aux
    } 
}

