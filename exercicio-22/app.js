/*
  01

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const names = ['Caio', 'André', 'Dário']
const ordenedNames = names.map(item => item)
console.log(ordenedNames.sort())


/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

// const characters = [
//   { id: 03, name: 'Simba' },
//   { id: 02, name: 'Nala' },
//   { id: 01, name: 'Scar' },
//   { id: 04, name: 'Mufasa' }
// ]

const characters = [03, 02, 01, 04]

const ordenedCharacters = characters.map(item => item)

for(let i= 0; i< ordenedCharacters.length; i++){
  
  for(let j = 0; j< ordenedCharacters.length; j++){
    const firstElementIsBigger = ordenedCharacters[i] < ordenedCharacters[j]
    const auxiliarConst = ordenedCharacters[i]

    if(firstElementIsBigger){
      ordenedCharacters[i] =  ordenedCharacters[j]
      ordenedCharacters[j] = auxiliarConst
    }
    console.log(ordenedCharacters)

  }
}

console.log(ordenedCharacters)


/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]
const ordenedNumbers = numbers.map(item => item)

ordenedNumbers.sort((item2, item1) => item2 - item1)
console.log('Números ordenados:' + ordenedNumbers)

/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]

const biggerThan50 = randomNumbers.find(number => number > 50)
console.log(biggerThan50)
/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno']
const peopleCopy = people.map(item => item)
peopleCopy.sort().reverse()

console.log(people, peopleCopy)
/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']
const genderDefine = (word) => {
  if(word[word.length -1] === 'a'){
    return 'a'
  }
  return 'o'
}

const srt = ingredients.reduce((accumulator, word, index, array) => {
  console.log(array.length -1, index)
  if(array.length -1 !== index){
    return `${accumulator}${word} cozid${genderDefine(word)}, `
  }
  return `${accumulator}${word} cozid${genderDefine(word)}`
}, '')

console.log(srt)

/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/

const topBrazilmovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

const topBrazilDisneyMovies = topBrazilmovies.filter(movie => movie.distributedBy === 'Disney')

const peopleAmountDisney = topBrazilDisneyMovies.reduce((accumulator, movie) => {
    return accumulator + movie.peopleAmount
},0)

console.log(peopleAmountDisney)

/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const newAgePets = pets
  .filter(pet => pet.type === 'Dog')
  .map(dog => ({
    name: dog.name,
    age: dog.age * 2,
    gender: dog.gender,
    type: dog.type}))

  console.log(newAgePets)


/*
  09
  
  - Considerando o array topBrazilmovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/

const ul = document.querySelector('.list-group')

const movieNames = topBrazilmovies.reduce((accumulator, movie) =>{
  return `${accumulator}<li>${movie.title}</li>`
},'')

ul.innerHTML = movieNames
/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/



