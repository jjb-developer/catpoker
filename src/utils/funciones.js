export const $ = (tag)=> document.querySelector(tag)


export function extraerIndiceDeCarta(lista_de_indices){
  const indice = Math.floor(Math.random()*52)
  lista_de_indices.splice(indice,1)
  return indice
}

function repartirCartas(cuantas_veces,desde,para){
  for(let i=0; i<cuantas_veces; i++){
    para.push(extraerIndiceDeCarta(desde))
  }
}


export function repartirFlop(indices,board){
	repartirCartas(3,indices,board)
	const flop = $('#flop')
	setTimeout(()=>{
		flop.innerHTML = board.length > 0 ? `<span class='text-[2.5rem]'>${FIGURAS[board[0]]}${FIGURAS[board[1]]}${FIGURAS[board[2]]}</span>` : ''
	},1000)
}

export function repartirTurn(indices,board){
  repartirCartas(1,indices,board)
  const turn = $('#turn')
  setTimeout(()=>{
    turn.innerHTML = board[3] ? `<span class='text-[2.5rem]'>${FIGURAS[board[3]]}</span>` : ''
  },2000)
}

export function repartirRiver(indices,board){
  repartirCartas(1,indices,board)
  const river = $('#river')
  setTimeout(()=>{
    river.innerHTML = board[4] ? `<span class='text-[2.5rem]'>${FIGURAS[board[4]]}</span>` : ''
  },3000)
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