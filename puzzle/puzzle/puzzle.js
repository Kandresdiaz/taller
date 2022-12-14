/* se declara un array de formar global */
let piezas = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let numClick = 0;
let clickUno = 0;
/* funcion que cuandi se llama hace click en las cosillas */
function seleccionar(casillas) {
    numClick++
    if (numClick == 1) {
        /* guardar registro del click en una posicion */
        clickUno = casillas
    }
    if (numClick == 2) {
        /* declaramos una variable local */
        let clickDos = casillas;
        /* se intercmabia los valores de las casillas del puzzle */
        let intercambia = piezas[clickUno]
        piezas[clickUno] = piezas[clickDos]
        piezas[clickDos] = intercambia 
        numClick = 0
        /* refrescamos el puzzle */
        moverPuzzle()


    }
    /* creacion de un borde de color morado */
    desmarcar()
    document.getElementById("img_" + casillas).style.border = "solid 3px  blue"
}
/* elimina el borde de todas las casillas */
function desmarcar() {
    /* null para quitar el borde o tambien se podria ingresar vacio */
    for (let i = 0; i <= 8; i++) {
        document.getElementById("img_" + i).style.border = null
    }
}
/* desordenar el arrys */

function desordenar() {
    piezas = piezas.sort(function () { return Math.random() - 0.5 })
    console.log(piezas)
}


function moverPuzzle() {
    for (let i = 0; i <= 8; i++) {
        /* obtener el numero de la casilla */
        let imagen = piezas[i]
        /* pinto en la casila i, la imagen  */
        document.getElementById(`img_${i}`).src = `./puzzle/batmanPuzzle/${imagen + 1}b.jpg`
    }
}
/* funcion creada para comprobar si el puzzle esta bien posicionada */
function comprobarpuzzle() {
    let comprobar = true
    console.log(piezas)
    for (let i = 0; i <= 8; i++) {
        if (piezas[i] != i) {
            comprobar = false
        }

    }
    if (comprobar == true) {
        alert("puzzle completo")
    } else {
        alert("puzzle incompleto")
    }
}
let boton = document.getElementById("boton");
/* pasar la funcion con un evento a comprobar */


window.onload = function () {
    /*  el queryselectorall toma todos los elementos */
    let arryElemnt = document.querySelectorAll(".imagen");
    /* arrow funcion */
    arryElemnt.forEach((imagenes, index) => {

        /* setAttribute para enviar un atributo y darle un valor, el primero el atributo(onclick) y el seguno es el valor que va a tomar el el atributo */
        imagenes.setAttribute("onclick", `seleccionar(${index})`)
    })

    /* llamos ala funci??n desordenar */
    desordenar()
    /* llamo ala funci??n que va a refrescar el pluzzle */
    moverPuzzle()
}

boton.addEventListener(`click`, comprobarpuzzle)



