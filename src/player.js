export function setPlayer(element,pos) {
  const div = document.createElement('div')
  const card1 = document.createElement('span')
  const card2 = document.createElement('span')
  div.innerHTML = '&#127182'
  div.classList.add(`top-[${pos[0]}px]`,`left-[${pos[1]}px]`)
  element.appendChild(div)
}
