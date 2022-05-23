/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/
// const url = "https://jsonplaceholder.typicode.com/users";

// const getUsers = url => {
//   return new Promise((resolved, rejected) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       const isRequestOk = request.readyState === 4 && request.status === 200;
//       const isRequestNotOk = request.readyState === 4;

//       if (isRequestOk) {
//         const data = request.responseText;
//         resolved(data);
//       }

//       if (isRequestNotOk) {
//         rejected("Não foi possível receber os dados da API");
//       }
//     });

//     request.open("GET", url);
//     request.send();
//   });
// };

// getUsers(url)
//   .then(value => console.log(value))
//   .catch(error => console.log(error))

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const calculator = (operator) => (number1, number2) => {
  const operations = {
    "+": `${number1} ${operator} ${number2} = ${number1 + number2}`,
    "-": `${number1} ${operator} ${number2} = ${number1 - number2}`,
    "*": `${number1} ${operator} ${number2} = ${number1 * number2}`,
    "/": `${number1} ${operator} ${number2} = ${number1 / number2}`,
    "%": `${number1} ${operator} ${number2} = ${number1 % number2}`,
  };
  return operations[operator] || 'Operação inválida';
};

const sum = calculator("qwe");
console.log(sum);
console.log(sum(1, 8));
const sub = calculator("-");
console.log(sub(9, 7));
/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

const south = ["Parana", "Santa Catarina", "Rio Grande do Sul"];
const southeast = [
  "São Paulo",
  "Rio de Janeiro",
  "Minais Gerais",
  "Espirito Santo",
];
const brazil = south.concat(southeast);
console.log(brazil);
brazil.unshift("Amazonas", "Tocantins", "Para");
console.log(brazil);
brazil.shift();
console.log(brazil);
const isItFromTheouth = (state) =>
  state === "Parana" ||
  state === "Santa Catarina" ||
  state === "Rio Grande do Sul";
const newSouth = brazil.map((state) => state).filter(isItFromTheouth);
console.log(newSouth);
console.log(brazil);

/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/

const northEast = [ 'Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'] 
brazil.splice(5)
northEast.forEach(state => {
  brazil.push(state)
})
console.log(brazil)
const newBrazil = brazil.map((state, index) => {
  return {id:index, stateName: state}
})
const statesHaveMoreThanSevenLetters = newBrazil.every(state => state.stateName.length > 7)
console.log(newBrazil)
if(statesHaveMoreThanSevenLetters){
  console.log('Sim, todos os estados tem mais de 7 letras.')
}else{
  console.log('Nem todos os estados tem mais de 7 letras.')
}

/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/

const cearaIsIncluded = brazil.includes('Ceará')

if(cearaIsIncluded){
  console.log('Ceará está incluído.')
}else{
  console.log('Ceará não foi incluído =/')
}

const newNewBrazil = newBrazil.map((state) =>{
  return {id:state.id += 1, stateName:`${state.stateName} pertence ao Brasil.`}
})

console.log(newNewBrazil)
const stateIndexIsEven = state => state.id % 2 === 0
const newNewNewBrazil = newNewBrazil.filter(stateIndexIsEven)
console.log(newNewNewBrazil)