/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const date = new Date("May 9 2022 18:05:32");
console.log(
  date.getHours(),
  date.getMinutes(),
  date.getFullYear(),
  date.getDate(),
  date.getDay()
);
// const formatDate = (date) => {
//   const day =
//     String(date.getDay() + 1).length === 1
//       ? `0${date.getDay() + 1}`
//       : `${date.getDay() + 1}`;
//   const month =
//     String(date.getMonth()).length === 1
//       ? `0${date.getMonth()}`
//       : `${date.getMonth()}`;
//   const year = date.getFullYear();

//   return `${day}/${month}/${year}`;
// };

// console.log(formatDate(date));

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const days = [
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
  "domingo",
];

const formatDate = (date) => {
  const minutes =
    String(date.getMinutes() + 1).length === 1
      ? `0${date.getMinutes() + 1}`
      : `${date.getMinutes() + 1}`;
  const hours =
    String(date.getHours() + 1).length === 1
      ? `0${date.getHours() + 1}`
      : `${date.getHours() + 1}`;

  const year = date.getFullYear();

  return `${hours}:${minutes} - ${days[date.getDay()]}, ${date.getDate()} de ${
    months[date.getMonth()]
  } de ${year}`;
};

console.log(formatDate(new Date()));
/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true };
const { id, isVerified } = user;

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: "Bender" };
const robotB = { name: "HAL 9000" };
const { name: nameA } = robotA;
const { name: nameB } = robotB;
console.log(nameA, nameB);
/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = "a";
const b = "b";
const c = "c";
const letters = { a, b, c };
console.log(letters);
/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = (value) => console.log(value);

const updateSomething = ({ target, property, willChange } = {}) => {
  const isTheExpectedValue = willChange === "valor indesejado";
  if (isTheExpectedValue) {
    willChange = "valor desejado";
  }

  useDataSomewhereElse({
    target,
    property,
    willChange,
  });
};

updateSomething({ target: "1", property: "2", willChange: "valor indesejado" });

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const timeFormat = (time) => {
  return String(time).length === 1 ? `0${time}` : time;
};

const clockContainer = document.querySelector(".clock-container");

const getClockHTML = (hours, minutes, seconds) => {
  clockContainer.innerHTML = `
  <span>${hours}</span> :
  <span>${minutes}</span> :
  <span>${seconds}</span>`;
};

const updateClock = () => {
  const present = new Date();
  const hours = timeFormat(present.getHours());
  const minutes = timeFormat(present.getMinutes());
  const seconds = timeFormat(present.getSeconds());
  getClockHTML(hours, minutes, seconds);
};

setInterval(updateClock, 1000);
