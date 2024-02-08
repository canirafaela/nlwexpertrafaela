const perguntas = [
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "let myVar;",
            "const myVar;",
        ],
        correta: 2
    },
    {
        pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array?",
        respostas: [
            "push()",
            "addToEnd()",
            "append()",
        ],
        correta: 0
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que é chamada após um determinado tempo de espera.",
            "Uma função que é passada como argumento para outra função e é executada após algum evento.",
            "Uma função que remove um elemento de um array.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual destes é um operador de comparação em JavaScript?",
        respostas: [
            "==+",
            "===",
            "=>=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de linha em JavaScript?",
        respostas: [
            "// Este é um comentário de linha",
            "# Este é um comentário de linha",
            "/* Este é um comentário de linha */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
        respostas: [
            "parseInt()",
            "convertToString()",
            "stringToNumber()",
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '&&' faz em JavaScript?",
        respostas: [
            "Ele faz uma operação de ou lógico.",
            "Ele faz uma operação de e lógico.",
            "Ele faz uma operação de negação.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'map()' em JavaScript?",
        respostas: [
            "Ele filtra os elementos de um array.",
            "Ele mapeia os elementos de um array para um novo array.",
            "Ele concatena dois arrays.",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma expressão regular em JavaScript?",
        respostas: [
            "Uma forma de escrever comentários em múltiplas linhas.",
            "Uma sequência de caracteres que define um padrão de busca.",
            "Uma maneira de declarar uma função anônima.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
        respostas: [
            "Arredonda um número para o número inteiro mais próximo.",
            "Formata um número com um número específico de casas decimais.",
            "Converte uma string para um número.",
        ],
        correta: 1
    }
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