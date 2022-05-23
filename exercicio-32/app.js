/*
  Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
  API do GIPHY, que é um website de GIFs (https://giphy.com/).

  - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o 
    usuário digitar o termo de busca no input e pressionar enter, um GIF deve 
    ser exibido na tela. Como neste exemplo: https://youtu.be/RHe-uCJGCeA
  - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
  - Para fazer requests para a API do GIPHY, você precisará de uma API key. 
    Para obtê-la, siga os seguintes passos:
    - Acesse https://developers.giphy.com/dashboard/ e faça o login;
    - No Dashboard, clique em "Create an App", clique em "API Selected" e em 
      "Next Step";
    - Dê um nome e descrição para o app e crie-o;
    - Clique no código da API key para copiá-la;
  - O submit do form deve ser feito para o endpoint abaixo. Atente-se para os 2
    [PLACEHOLDERS] que devem ser substituídos:
    - https://api.giphy.com/v1/gifs/search?api_key=[vKhuYTAfabe9ZVBHGJVeIqtuQH3YssVp]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
      listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
  - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

// const button = document.querySelector('button')
// const input = document.querySelector('input')
// const out = document.querySelector('div')

// button.addEventListener('click', event => {
//   event.preventDefault()
//   const getGifs = async () => {
//     console.log(input.value)
//     try{
//       const request =  await fetch(`https://api.giphy.com/v1/gifs/search?api_key=vKhuYTAfabe9ZVBHGJVeIqtuQH3YssVp&limit=1&q=${input.value}`)
//       const dataObj = await request.json()
//       console.log(dataObj)
//       console.log(dataObj.data[0].images.downsized.url)

//       const image = document.createElement('img')
//       image.setAttribute('src', dataObj.data[0].images.downsized.url)
//       image.setAttribute('alt', dataObj.data[0].title)
//       out.insertAdjacentElement('afterbegin',image)
//       console.log(image)

//       if(!request.ok){
//         throw new Error('Erro na obtenção dos dados')
//       }

//       console.log(request)

//     }catch(error){
//       console.log(`Erro ${error.message}`)
//     }

//   }
//   getGifs()
// })

const key = "vKhuYTAfabe9ZVBHGJVeIqtuQH3YssVp";
const getGIFUrl = (GIFName) =>
  `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=1&q=${GIFName}`;

const form = document.querySelector("form");
const GIFSContainer = document.querySelector("div");

const generateIMGForGif = (gifUrl, title) => {
  const img = document.createElement("img");
  img.setAttribute("src", gifUrl);
  img.setAttribute("alt", title);
  return img
}

const insertGIFSInToDOM = (img) => {
  GIFSContainer.insertAdjacentElement("afterbegin", img);
};

const getGifs = async (GIFUrl) => {
  try {
    const response = await fetch(GIFUrl);
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    const GIFSData = await response.json();
    const isTheDataBlank = GIFSData.data.length === 0;

    if (isTheDataBlank) {
      throw new Error("Erro na obtenção de dados, não há gifs para essa busca");
    }
    const downsizedGIFUrl = await GIFSData.data[0].images.downsized.url;
    const title = await GIFSData.data[0].title;
    insertGIFSInToDOM(generateIMGForGif(downsizedGIFUrl, title));
  } catch (error) {
    alert(`Erro: ${error.message}`);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const GIFUrl = getGIFUrl(event.target[0].value);
  event.target.reset();
  getGifs(GIFUrl);
});
