const numeros = [1,2,3,4,5]
const valoresDobrados = numeros.map(num => num * 2)

// console.log(valoresDobrados)
// console.log(numeros)

const usuarios = [
    {
        nome:"Leticya",
        idade: 19
    },
    {
        nome:"Heloisa",
        idade:17
    },
    {
        nome:"Dyovana",
        idade:18
    }
]

const nomesUsuario= usuarios.map(usuario => usuario.nome)

console.log("nomes de usuarios", nomesUsuario)