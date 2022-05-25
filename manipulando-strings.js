// verificando se tem a palavra teste na frase

let frase = " ver se tem a palavra 'teste' na frase"
console.log(frase.includes("teste"))
    //retorna true
console.log(frase.includes("testando"))
    // retorna false



// transformando letras minisculas em maiusculas
let frase2 = 'Programar é muito bacana'

// deixar maiscula
console.log(frase2.toUpperCase())

// deixar minuscula 
console.log(frase2.toLowerCase())



// atrelar uma coisa na outra
let frase3 = 'as palavras passaram de minusculas para maiusculas'
console.log(frase3.toLowerCase().toUpperCase())

let frase4 = 'AS PALAVRAS PASSARAM DE MAIUSCULAS PARA MINUSCULAS'
console.log(frase4.toUpperCase().toLowerCase())


// contando quantos caracteres tem em uma frase
let frase5 = 'Ingrid Carvalho da Silva'
console.log(frase5.length)
    //24 = contando com os espaços




// transformando strings em numeros

let string = '123456789'
console.log(Number(string))

// transformando numeros em strings

let numbers = 123456789
console.log(String(numbers))