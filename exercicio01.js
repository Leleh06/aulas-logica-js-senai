// Crie uma variavel que seja um array de objeto que tenha os seguintes pares: chave e valor

// nome da variavel => users

// valores => um objeto com os valores login, password , cursos , sendo cursos um array com dois valores

//redenrizar no console a seguinte frase com o primeiro user do array `Meu login é ${login}, minha senha é ${password} e faço os cursos x e y`

const users = [
    {
        login:"Ana",
        password:"ana0967",
        cursos:["tecnico em informatica", "designer de interiores"]
    },
    {
        login:"Carol",
        password:"carollinda",
        cursos:["tecnico em informatica","games"]
    }
]

console.log(`Meu login é ${users[0].login}, minha senha é ${users[0].password}, e faço curso ${users[0].cursos[0]} e ${users[0].cursos[1]}`)