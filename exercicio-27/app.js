/*
  01

  - Implemente um código assíncrono entre os console.log() abaixo.
*/

console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')

// setTimeout(() => {
//   console.log("Callback executada")
// }, 5000)

console.log('Linha 5')
console.log('Linha 6')
console.log('Linha 7')
console.log('Linha 8')

/*
  02

  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

const x = (callback) => {callback('Hnagar')}
function logGreeting (name) {
  console.log(`olá, ${name}`)
}

x(logGreeting)

/*
  03

  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const numbers = [3, 4, 10, 20]
const getLessThanFive = num => num < 5
const lesserThanFive = numbers.filter(getLessThanFive)

console.log(lesserThanFive)

/*
  04

  - Refatore o código abaixo.
*/
const getTotalPrice = (amount, price) => amount + price
const prices = [12, 19, 7, 209]
let totalPrice = 0

totalPrice = prices.reduce(getTotalPrice , 0)

console.log(`Preço total: ${totalPrice}`)

/*
  05

  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/

let car = { color: 'amarelo' }
// car['color'] = 'azul'
let secondCar = car
secondCar['color'] = 'azul'
console.log(car)


/*
  06

  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

function func(firstValue, secondValue, ThirdValue){
  const successMessage ='A função deve ser invocada com 3 argumentos'
  const failureMessage = 'A função foi invocada com 3 argumentos'

  const arrayofValues = [firstValue, secondValue, ThirdValue]
  const isThereAnyUndefined = element => element === undefined
  return arrayofValues.some(isThereAnyUndefined)?successMessage:failureMessage
}

console.log(func('a','undefined'))


/*
  07

  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0,
  addBook(numberOfNewBooks){

    if(this.booksIn === this.spaces){
      console.log(`A caixa já está cheia`)
      return
    }

    const availableSpaces = this.spaces - this.booksIn


    if(numberOfNewBooks + this.booksIn <= this.spaces ){
      this.booksIn += numberOfNewBooks
      const bookPluralOrSingular = this.booksIn === 1? 'livro':'livros'
      console.log(`Já há '${this.booksIn}' ${bookPluralOrSingular} na caixa`)
      return
    }

    const fitPluralOrSingular = availableSpaces === 1? 'cabe':'cabem'
    const bookPluralOrSingular = availableSpaces ===1? 'livro':'livros'
    console.log(`Só ${fitPluralOrSingular} mais ${availableSpaces} ${bookPluralOrSingular}`)
  }
}
booksBox.addBook(9)
booksBox.addBook(2)
booksBox.addBook(2)
booksBox.addBook(1)
booksBox.addBook(1)

