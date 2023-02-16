const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
        tip: "Palavra em inglês"
      },
      {
        question: "HTML é uma linguagem de:",
        options: ["Criação", "Exclusão", "Marcação", "Informação"],
        answer: "Marcação",
      },
      {
        question: "Para criar um link entre uma página e outra, usa-se a tag:",
        options: ['<a="pagina.html"></a>','<href a="pagina.html"></a>', '<a href="pagina.html"></a>', '<href="pagina.html"></a>' ],
        answer: '<a href="pagina.html"></a>',
      },
      {
        question: "O conteúdo de uma página feita em estilo incorporado fica entre as tags:",
        options: ["</title></head>", "<head></head>", "<incorp></incorp>", "<style></style>"],
        answer: "<style></style>",
      },
      {
        question: "O conteúdo de uma página feita em estilo incorporado fica entre as tags:",
        options: ["</title></head>", "<head></head>", "<incorp></incorp>", "<style></style>"],
        answer: "<style></style>",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      {
        question: "Para alinhar um texto ao centro, usamos?:",
        options: ["text-center: true;", "align: center;", "text-align: center;", "position"],
        answer: "text-align: center;",
      },
      {
        question: "Para adicionar uma margem de 10px ao topo, podemos usar?:",
        options: ["margin: 10px 0 0 0;", "margin-top: 10px;", "margin: 10px top; ", "margin-bottom: 50px"],
        answer: "margin-top: 10px;",
      },
      {
        question: "Para definir a largura máxima de um elemento, usamos:",
        options: ["max-content:", "max-width:", "width-range:", "width:"],
        answer: "max-width:",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
];

export default data;