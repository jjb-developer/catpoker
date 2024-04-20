import './style.css'
import { $ } from './src/utils/funciones.js'
import { TAPE1, TAPE2, FIGURAS, CARTAS } from './src/utils/constantes.js'

let participantes = 0

const p1 = $('#p1')
const p2 = $('#p2')
const p3 = $('#p3')
const p4 = $('#p4')
const p5 = $('#p5')
const p6 = $('#p6')

let start = false

p1.addEventListener('click', ()=>{

})

p2.addEventListener('click', ()=>{
  if(board[1] === 'vacio' && board[7] === 'vacio'){
    board[1] = 'esperando'
    board[7] = 'esperando'
    participantes += 1
    console.info(board)
  }
  if(participantes >= 2 && start === false){
    start = true
    poker()
  }
})

p3.addEventListener('click', ()=>{
  if(board[2] === 'vacio' && board[8] === 'vacio'){
    board[2] = 'esperando'
    board[8] = 'esperando'
    participantes += 1
    console.info(board)
  }
  if(participantes >= 2 && start === false){
    start = true
    poker()
  }
})

p4.addEventListener('click', ()=>{
  if(board[3] === 'vacio' && board[9] === 'vacio'){
    board[3] = 'esperando'
    board[9] = 'esperando'
    participantes += 1
    console.info(board)
  }
  if(participantes >= 2 && start === false){
    start = true
    poker()
  }
})

p5.addEventListener('click', ()=>{
  if(board[4] === 'vacio' && board[10] === 'vacio'){
    board[4] = 'esperando'
    board[10] = 'esperando'
    participantes += 1
    console.info(board)
  }
  if(participantes >= 2 && start === false){
    start = true
    poker()
  }
})

p6.addEventListener('click', ()=>{
  start = true
  if(board[5] === 'vacio' && board[11] === 'vacio'){
    board[5] = 'esperando'
    board[11] = 'esperando'
    participantes += 1
    console.info(board)
  }
  if(participantes >= 2 && start === false){
    start = true
    poker()
  }
})

const seat_p1 = $('#seat_p1')
const salir_p1 = $('#salir_p1')
const name_p1 = $('#name_p1')
const coins_p1 = $('#coins_p1')
seat_p1.addEventListener('click',()=>{
  name_p1.innerText = 'andrew'
  coins_p1.innerText = 5000
  seat_p1.classList.add('hidden')
  salir_p1.classList.remove('hidden')
  if(board[0] === 'vacio' && board[6] === 'vacio'){
    board[0] = 'esperando'
    board[6] = 'esperando'
    participantes += 1
    console.info(board)
  }
  if(participantes >= 2 && start === false){
    start = true
    poker()
  }
})

salir_p1.addEventListener('click',()=>{
  name_p1.innerText = ''
  coins_p1.innerText = ''
  seat_p1.classList.remove('hidden')
  salir_p1.classList.add('hidden')
})

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


let board = [
'vacio','vacio','vacio','vacio','vacio','vacio',
'vacio','vacio','vacio','vacio','vacio','vacio',
'','','','','']

let cronometro = $('#cronometro')

/*
const pos_j1 = [0,6]
const pos_j2 = [1,7]
const pos_j3 = [2,8]
const pos_j4 = [3,9]
const pos_j5 = [4,10]
const pos_j6 = [5,11]
*/

const SEGUNDOS_FOR_BET = 3
const INTERVALO_SHOW_CARDS = 0.175

let intervalo_para_apostar = SEGUNDOS_FOR_BET


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
    if(board[i] !== 'vacio' && board[i] !== 'ausente' && board[i] !== 'esperando') setCard(i)
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


function getBoardElement(i,player){
  return new Promise((resolve,reject)=>{
    if(typeof(board[i]) === 'number'){
      setTimeout(()=>{
        player.innerHTML = FIGURAS[board[i]]
        resolve('listo, elemento renderizado.')
      },INTERVALO_SHOW_CARDS*1000)
    } else {
      resolve('nada que renderizar.')
    }
  })
}

function apuesta(player){
  return new Promise((resolve,reject)=>{
    const intervalo = setInterval(()=>{
      intervalo_para_apostar -= 1
      cronometro.classList.remove('hidden')
      cronometro.innerHTML = intervalo_para_apostar
    }, 1000);
    setTimeout(()=>{
      clearInterval(intervalo)
      intervalo_para_apostar = SEGUNDOS_FOR_BET
      cronometro.classList.add('hidden')
      resolve('jugador ya decidio.')
    },SEGUNDOS_FOR_BET*1000)
  })
}

function baseApuesta(player){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('jugador ya decidio.')
    },2500)
  })
}

async function turno(player,c1){
  if(typeof(board[c1]) === 'number'){
    player.classList.add('border-lime-500')
    await apuesta(player)
    player.classList.remove('border-lime-500')
    //console.info(`Jugador ${player.id} ya aposto.`)
  }
}

async function mostrarCartas(){
  await getBoardElement(0,j1c1)
  await getBoardElement(1,j2c1)
  await getBoardElement(2,j3c1)
  await getBoardElement(3,j4c1)
  await getBoardElement(4,j5c1)
  await getBoardElement(5,j6c1)

  await getBoardElement(6,j1c2)
  await getBoardElement(7,j2c2)
  await getBoardElement(8,j3c2)
  await getBoardElement(9,j4c2)
  await getBoardElement(10,j5c2)
  await getBoardElement(11,j6c2)


  //console.info('Rondas de apuestas Pre-Flop.')
  await turno(p1,0)
  await turno(p2,1)
  await turno(p3,2)
  await turno(p4,3)
  await turno(p5,4)
  await turno(p6,5)


  await getBoardElement(12,flop1)
  await getBoardElement(13,flop2)
  await getBoardElement(14,flop3)
  //console.info('Rondas de apuestas Flop.')
  await turno(p1,0)
  await turno(p2,1)
  await turno(p3,2)
  await turno(p4,3)
  await turno(p5,4)
  await turno(p6,5)


  await getBoardElement(15,turn)
  //console.info('Rondas de apuestas Turn.')
  await turno(p1,0)
  await turno(p2,1)
  await turno(p3,2)
  await turno(p4,3)
  await turno(p5,4)
  await turno(p6,5)


  await getBoardElement(16,river)
  //console.info('Rondas de apuestas River.')
  await turno(p1,0)
  await turno(p2,1)
  await turno(p3,2)
  await turno(p4,3)
  await turno(p5,4)
  await turno(p6,5)
}


let play = true

const salir = $('#salir')
salir.addEventListener('click',()=>{
  play = !play
  participantes -= 1
  start = false
})


function run(){
  if(board.slice(0,6).filter(e=>typeof(e) === 'number').length>1){
    return true
  }
  return false
}

function updateBoard(){
  board = board.map(e=>{
    if(e==='esperando'){
      return 0
    } else {
      return e
    }
  })
}


async function poker(){
  while(participantes >= 2){
    updateBoard()
    repartir()
    await mostrarCartas()
    clearBoard()
  }
}

/*

for(let i=0; i<5; i++){
  repartir()
  await mostrarCartas()
  clearBoard()
}

*/
