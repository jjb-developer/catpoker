import './style.css'
import { $ } from './src/utils/funciones.js'
import { TAPE1, TAPE2, FIGURAS, CARTAS } from './src/utils/constantes.js'


const p1 = $('#p1')
const p2 = $('#p2')
const p3 = $('#p3')
const p4 = $('#p4')
const p5 = $('#p5')
const p6 = $('#p6')

const j1c1 = $('#j1c1')
const j2c1 = $('#j2c1')
const j3c1 = $('#j3c1')
const j4c1 = $('#j4c1')
const j5c1 = $('#j5c1')
const j6c1 = $('#j6c1')
const j1c2 = $('#j1c2')
const j2c2 = $('#j2c2')
const j3c2 = $('#j3c2')
const j4c2 = $('#j4c2')
const j5c2 = $('#j5c2')
const j6c2 = $('#j6c2')
const flop1 = $('#flop1')
const flop2 = $('#flop2')
const flop3 = $('#flop3')
const turn = $('#turn')
const river = $('#river')


let indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]


let board = [0,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]


let jugadores = [0,1,2,3,4,5]
let turno_de = null

/*
const pos_j1 = [0,6]
const pos_j2 = [1,7]
const pos_j3 = [2,8]
const pos_j4 = [3,9]
const pos_j5 = [4,10]
const pos_j6 = [5,11]
*/

let time_j1 = 60
let time_j2 = 60
let time_j3 = 60
let time_j4 = 60
let time_j5 = 60
let time_j6 = 60

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function setCard(i){
  const index = Math.floor(Math.random()*indices.length)
  board[i] = indices[index]
  indices = indices.filter(ic=>ic!==indices[index])
}


function repartir(){
  for(let i=0; i<17; i++){
    if(board[i] !== -1) setCard(i)
  }
  //console.info(board)
}


function clearBoard(){
  indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]
  j1c1.innerHTML = ''
  j2c1.innerHTML = ''
  j3c1.innerHTML = ''
  j4c1.innerHTML = ''
  j5c1.innerHTML = ''
  j6c1.innerHTML = ''
  j1c2.innerHTML = ''
  j2c2.innerHTML = ''
  j3c2.innerHTML = ''
  j4c2.innerHTML = ''
  j5c2.innerHTML = ''
  j6c2.innerHTML = ''
  flop1.innerHTML = ''
  flop2.innerHTML = ''
  flop3.innerHTML = ''
  turn.innerHTML = ''
  river.innerHTML = ''
}


async function showCards(){
  return new Promise(resolve=>{
    if(board[0] !== -1){
      setTimeout(()=>{
        j1c1.innerHTML = FIGURAS[board[0]]
      },1000)
    }

    if(board[1] !== -1){
      setTimeout(()=>{
        j2c1.innerHTML = FIGURAS[board[1]]
      },1500)
    }

    if(board[2] !== -1){
      setTimeout(()=>{
        j3c1.innerHTML = FIGURAS[board[2]]
      },2000)
    }
    if(board[3] !== -1){
      setTimeout(()=>{
        j4c1.innerHTML = FIGURAS[board[3]]
      },2500)
    }
    if(board[4] !== -1){
      setTimeout(()=>{
        j5c1.innerHTML = FIGURAS[board[4]]
      },3000)
    }
    if(board[5] !== -1){
      setTimeout(()=>{
        j6c1.innerHTML = FIGURAS[board[5]]
      },3500)
    }
    if(board[6] !== -1){
      setTimeout(()=>{
        j1c2.innerHTML = FIGURAS[board[6]]
      },4000)
    }
    if(board[7] !== -1){
      setTimeout(()=>{
        j2c2.innerHTML = FIGURAS[board[7]]
      },4500)
    }
    if(board[8] !== -1){
      setTimeout(()=>{
        j3c2.innerHTML = FIGURAS[board[8]]
      },5000)
    }
    if(board[9] !== -1){
      setTimeout(()=>{
        j4c2.innerHTML = FIGURAS[board[9]]
      },5500)
    }
    if(board[10] !== -1){
      setTimeout(()=>{
        j5c2.innerHTML = FIGURAS[board[10]]
      },6000)
    }

    if(board[11] !== -1){
      setTimeout(()=>{
        j6c2.innerHTML = FIGURAS[board[11]]
      },6500)
    }

    // RONDA DE APUESTAS PRE-FLOP
    if(board[0] !== -1){
      setTimeout(()=>{
        p1.classList.add('border-lime-500')
        turno_de = 0
        console.info(turno_de)
      },(6500+(800*1)))
    }

    if(board[1] !== -1){
      setTimeout(()=>{
        p1.classList.remove('border-lime-500')
        p2.classList.add('border-lime-500')
        turno_de = 1
        console.info(turno_de)
      },(6500+(800*2)))
    }

    if(board[2] !== -1){
      setTimeout(()=>{
        p2.classList.remove('border-lime-500')
        p3.classList.add('border-lime-500')
        turno_de = 2
        console.info(turno_de)
      },(6500+(800*3)))
    }

    if(board[3] !== -1){
      setTimeout(()=>{
        p3.classList.remove('border-lime-500')
        p4.classList.add('border-lime-500')
        turno_de = 3
        console.info(turno_de)
      },(6500+(800*4)))
    }

    if(board[4] !== -1){
      setTimeout(()=>{
        p4.classList.remove('border-lime-500')
        p5.classList.add('border-lime-500')
        turno_de = 4
        console.info(turno_de)
      },(6500+(800*5)))
    }

    if(board[5] !== -1){
      setTimeout(()=>{
        p5.classList.remove('border-lime-500')
        p6.classList.add('border-lime-500')
        turno_de = 5
        console.info(turno_de)
      },(6500+(800*6)))
    }

    // PRE-FLOP

    // FLOP
    if(board[12] !== -1){
      setTimeout(()=>{
        p6.classList.remove('border-lime-500')
        flop1.innerHTML = `<span class='text-[2.5rem]'>${FIGURAS[board[12]]}</span>`
      },12000)
    }

    if(board[13] !== -1){
      setTimeout(()=>{
        flop2.innerHTML = `<span class='text-[2.5rem]'>${FIGURAS[board[13]]}</span>`
      },12500)
    }

    if(board[14] !== -1){
      setTimeout(()=>{
        flop3.innerHTML = `<span class='text-[2.5rem]'>${FIGURAS[board[14]]}</span>`
      },13000)
    }

    // RONDA DE APUESTAS FLOP
    setTimeout(()=>{

    },18000)

    // TURN
    if(board[15] !== -1){
      setTimeout(()=>{
        turn.innerHTML = `<span class='text-[2.5rem]'>${FIGURAS[board[15]]}</span>`
      },18500)
    }

    // RONDA DE APUESTAS TURN
    setTimeout(()=>{

    },23500)

    // RIVER
    if(board[16] !== -1){
      setTimeout(()=>{
        river.innerHTML = `<span class='text-[2.5rem]'>${FIGURAS[board[16]]}</span>`
      },24000)
    }

    // RONDA DE APUESTAS RIVER
    setTimeout(()=>{

    },29000)

    setTimeout(()=>{
      resolve("Ha finalizado la mano!.")
    },31000)

  })
}

let play = true

const salir = $('#salir')
salir.addEventListener('click',()=>{
  play = false
  //console.log(play)
})

for(let i=0;i<2;i++){
    repartir()
    await showCards()
    clearBoard()
}

/*

while(play){
    repartir()
    await showCards()
    clearBoard()
}


*/
