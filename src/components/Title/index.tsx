// TUDO ISSO É UM COMPONENTE
// A TIPAGEM É COMO SE FOSSE A CARTEIRA DE ID DO COMPONENTE (MINI DOCUMETACAO PARA O COMPONENTE) PARA
// SER RENDERIZADO CORRETAMENTE 
// ISSO É TEM TYPESCRIPT

// #  -COMPONENTES // uma parte do código que é utilizado e não tem lógica nenhuma // é como se fosse os dedos da mãos

// componentes = átomos

import React from "react";
import "./style.css";


// Aqui será uma INTERFACE( tipagem de um objeto (tipagem = tambem é um objeto )) aonde vai ser atribuidas as propriedades
interface TitleProps {
  text: string;
}
// Props : tudo que o componente/propriedade(titulo/texto) recebe por parámetro 
// componente = função


// A const é do tipo funcao do react que tem as props (titleprops) que vai receber o parametro text
// Foi tipado o <TitleProps> 
// React.FC vai receber como propriedade o ({text})
// FC é o function component 
const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="title">{ text } </h1>;
};

// EXPORTANDO o UM componente React do Title que vai ser o <TitleProps>
export default Title;









// COMPONENTE = É O TITULO
// PROPRIEDADE = É O TEXTO








//  =============================>>> <<<=================================
// Explicando o CÓDIGO ==> COMPONENTES <==
// aqui basicamente: 

//  ==> IMPORTAÇÃO <==
//  - 1 > importa o react.
//  - 2 > importa o slyle dentro desta pasta Components.

//  ==> ARRAY INTERFACE TITLEPROPS <==
//  - 3 > cria uma array(interface TitleProps) onde vai ser atribuida as propriedades(text:string).

// //  ==> CRIAR UMA CONST  Title <==
//  - 4 > cira uma constante chamada Title .
//  - 5 > instancia dentro da const Title  o <TitleProps>.
//  - 6 > a const Title recebe depois da instancia <TitleProps> O react com (FC) Function componente.
//  - 7 > e o React.FC vi recebe como propriedade o ({text}).

//  ==> RETURN DO TITLEPROPS <==
//  - 8 > retorna o H1 (Titulo) com a classe className="title"
//  - 9   > recebendo como propriedade {text} 

//  ==> EXPORTAÇÃO DO TITLE <==
//  - 10 > Depois exporta um componente React do Title que vai ser o <TitleProps>.
//  =============================>>> <<<=================================


//  ==> STYLE DO COMPONENTS/CARD (syle.css)<==
//  - 11 > Estilizar no (syle.css) o  ==> .title <==
//  - 12 >   width / height / font-size 


//  =============================>>> <<<=================================