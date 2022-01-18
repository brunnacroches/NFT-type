# Getting Started with Create React App


### `npx create-react-app my-app --template=typescript`


### `npm test`


### `APAGAR `
SRC
  - App.css
  - App.test
  - index.css
  - logo.svg

### `APAGAR no App.tsx`
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

### `FICA no App.tsx`
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

### Configurar o editorconfig
 - com o mouse botão direito `Generate .editorconfig`
- Função: eles vão padronizar o código

### Configurar o prettier
- CTRL + P = >prettier
-"Create configuration file"
-`ANTES`
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120
}
-`DEPOIS`
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120

}


### INSTALAR BIBLIOTECAS DE ESTILIZAÇÃO E ROTEAMENTO 

### react router dom `npm install react-router-dom ` 
- para parametrizar as rotas do projeto para conseguir manipular e fazer com que o usuario transite entre uma pagina e outra.

https://v5.reactrouter.com/web/guides/quick-start

### INSTALAR BIBLIOTECAS DE ESTILIZAÇÃO 

### styled-components `npm install --save styled-components` 
-
https://styled-components.com/
____________________________________________

### styled-system `npm i styled-system styled-components`  
https://styled-system.com/getting-started/
- da algumas funçoes, algumas constantes que a gente consegue customizar e passar parametros 
customizáveis em nossos componentes
____________________________________________

### INSTALAR BIBLIOTECAS DE DESENVOLVIMENTO 
` npm install -D @types/styled-system @types/styled-components @types/react-dom `  
- são tipagens das bibliotecas em TypeScript
-como a gente esta no ambiente em TypeScript  é muito importante essas tipagens pq é muito comum 
a comunidade o pessoal subir o pacote da biblioteca e outro pacote da tipagem para ficar mais leve porque 
nem todo mundo trabalha com TypeScript 
____________________________________________

### CONFIGURAÇÃO DE TEMAS
