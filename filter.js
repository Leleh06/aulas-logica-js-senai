// const numeros = [1,2,3,4,5]

// const pares = numeros.filter(num => num % 2 === 0)

// console.log("Numeros pares", pares)

const produtos = [
    {
        nome:"Notebook",
        preco:3000
    },
    {
        nome:"Mouse",
        preco:50
    },
    {
        nome:"Mouse",
        preco:70
    },
    {
        nome:"Munitor",
        preco:1200
    },
    {
        nome:"Teclado",
        preco:120
    }
]

// const produtosMaioresQueMil = produtos.filter(produtos => produtos.preco > 1000)

// console.log(produtosMaioresQueMil)

const todosOsMouse = produtos.filter (produtos => produtos.nome == `${"Mouse"}`)

console.log(todosOsMouse)