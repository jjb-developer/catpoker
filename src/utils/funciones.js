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
