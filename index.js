const perguntas = [
    {
      pergunta: "Qual time brasileiro ganhou a Copa Libertadores da América em 2019?",
      respostas: [
          "a) Flamengo",
          "b) Palmeiras",
          "c) Grêmio",
      ],
      correta: 0
    },
    {
      pergunta: "Quem foi o artilheiro do Campeonato Brasileiro de 2018?",
      respostas: [
          "a) Gabigol",
          "b) Dudu",
          "c) Ricardo Oliveira",
      ],
      correta: 0
    },
    {
      pergunta: "Qual equipe brasileira conquistou a Copa do Brasil em 2016?",
      respostas: [
          "a) Cruzeiro",
          "b) Palmeiras",
          "c) Atlético Mineiro",
      ],
      correta: 2
    },
    {
      pergunta: "Quem foi o técnico da seleção brasileira durante a Copa do Mundo de 2014?",
      respostas: [
          "a) Tite",
          "b) Mano Menezes",
          "c) Luiz Felipe Scolari",
      ],
      correta: 2
    },
    {
      pergunta: "Qual jogador brasileiro venceu o prêmio de Melhor do Mundo da FIFA em 2017?",
      respostas: [
          "a) Neymar",
          "b) Cristiano Ronaldo",
          "c) Lionel Messi",
      ],
      correta: 0
    },
    {
      pergunta: "Qual time foi campeão da Copa do Brasil de 2020?",
      respostas: [
          "a) Palmeiras",
          "b) Grêmio",
          "c) Flamengo",
      ],
      correta: 0
    },
    {
      pergunta: "Em qual estádio brasileiro foi disputada a final da Copa do Mundo de 2014?",
      respostas: [
          "a) Estádio do Maracanã",
          "b) Arena Corinthians",
          "c) Mineirão",
      ],
      correta: 1
    },
    {
      pergunta: "Quem foi o artilheiro da Copa Libertadores da América de 2021?",
      respostas: [
          "a) Gabriel Barbosa",
          "b) Hulk",
          "c) Diego Souza",
      ],
      correta: 0
    },
    {
      pergunta: "Qual clube brasileiro venceu a Copa Sul-Americana em 2018?",
      respostas: [
          "a) Athletico Paranaense",
          "b) Flamengo",
          "c) Atlético Mineiro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o último time brasileiro a conquistar a Copa Libertadores da América antes de 2019?",
      respostas: [
          "a) Corinthians",
          "b) Santos",
          "c) Internacional",
      ],
      correta: 0
    },
  ];
  

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

//loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' +perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
      }

      quizItem.querySelector('dl').appendChild(dt)  
      
  }  

  quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}