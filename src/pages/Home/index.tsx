// #  -PAGES
// tem controle total da aplicação
// requisão para o Back End


import React from "react";
import Title from "../../components/Title";
import NFTCard from "../../containers/NFTCard";

import img from "../../assets/img/image-equilibrium.jpg";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <NFTCard name="Equilibrium #3429" img={img} />
      <NFTCard name="Equilibrium #3429" img={img} />
    </div>
  );
};

// EXPORTANDO o UM componente React do Home
export default Home;


//  =============================>>> <<<=================================
// Explicando o CÓDIGO ==> COMPONENTES <==
// aqui basicamente: 

//  ==> IMPORTAÇÃO <==
//  - 1 > importa o react.
//  - 2 > importa o Title dentro desta pasta Components. (../..)
//  - 3 > importa o NFTCard dentro desta pasta Containers. (../..)
//  - 4 > importa o img dentro desta pasta Assets. (../..)
//  - 5 > importa o style dentro desta pasta Pages. (./)

// //  ==> CRIAR UMA CONST Home <==
//  - 6 > cira uma constante chamada Home .
//  - 7 >  SEM instancia dentro da const Home  o <---->.
//  - 8 > a const Home NÃO recebe propriedade o ({text}).

//  ==> RETURN DO Home <==
//  - 9  > retorna criando uma div class Home
//  - 10 > dentro da div class Home ==> 
//  - 11 > instancia o NFTCard <NFTCard name="Equilibrium #3429" img={img} />
//  - 12 > nomeia o NFTCard <NFTCard name="Equilibrium #3429"
//  - 13 > e recebe a propriedade img= {img}

//  ==> EXPORTAÇÃO DO TITLE <==
//  - 14 > Depois exporta o React do Home
//  =============================>>> <<<=================================


//  ==> STYLE DO PAGES/HOME
  //- 15 >| .nftCard | | .nftCard__imageContainer | .nftCard__image  | 
//  - 16 > Estilizar no (syle.css) 
//  - 17 >   width | height | font-size | border-radius


//  =============================>>> <<<=================================

//  ==> STYLE DO PAGES/HOME
//  - 18 > | .home | 
//  - 19 > Estilizar no (syle.css) 
//  - 20 >   width | height | font-size | border-radius

//  =============================>>> <<<=================================