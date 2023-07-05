let estudantes = [
  { 
    nome: 'anderson',
    primeiraNota: 6,
    segundaNota: 9,
  }, 
  {
    nome: 'beatriz',
    primeiraNota: 6,
    segundaNota: 8,
  }, 
  {
    nome: 'joão',
    primeiraNota: 1,
    segundaNota: 5,
  }
]

function calculaMedia(primeiraNota,segundaNota) {
  let media = (primeiraNota + segundaNota) / 2
  return media
}

for(let estudante of estudantes){
  mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
  let aprovadoOuNao = mediaIndividual < 7 ? 'Que pena você não conseguiu. Estude mais' : 'Você passou. Parabens'

  alert(`A média de ${estudante.nome} é ${mediaIndividual}.
${aprovadoOuNao}`)
}       