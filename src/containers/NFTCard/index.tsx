// #  -CONTAINERS
// o containers renderiza os componentes
// é como se fosse as mãos pq ele junta todos os dedos(componentes)


import React from "react";
import Title from "../../components/Title";
import "./style.css";

// DECLARAR AS STRINGS NO CONTAINERS
interface NFTCardProps {
  name: string;
  img: string;
}

// A *CONSTANTE* NTFCard esta sendo *TIPADA* que é um Componente Funcional (FC)
// O *COMPONENTE* <NFTCardsProps> vai receber como *PROPRIEDADE* o ({name, img})
const NFTCard: React.FC<NFTCardProps> = ({ name, img }) => {
  return (
    <div className="nftCard">
      <div className="nftCard__imageContainer"> 
        <img className ="nftCard__image" src={img} alt= "nft-card image" />
      </div>
    <Title text= {name} />
  </div>
  );
};

// EXPORTANDO o UM componente React do NFTCard que vai ser o <NFTCardsProps>
export default NFTCard;


///  =============================>>> <<<=================================
// Explicando o CÓDIGO ==> CONTAINERS <==
// aqui basicamente: 
//  ==> IMPORTAÇÃO <==
//  - 1  > importa o React. (" ")
//  - 2  > importa Title de Componentes (../../)
//  - 3  > importa o slyle dentro desta pasta Containers. (./)

// //  ==> CRIAR ARRAY INTERFACE NFTCardProps <==
//  - 4 > cria uma array(interface TitleProps) onde vai ser atribuida as propriedades(name, img ...).

// //  ==> CRIAR UMA CONST  NFTCardProps <==
//  - 5  > cira uma CONST chamada NFTCard .
//  - 6  > instancia dentro da const NFTCard  o <NFTCardProps>.
//  - 7  > a const Title recebe depois da instancia <NFTCardProps> O react com (FC) Function componente.
//  - 8  > e o React.FC vi recebe como propriedade o ({name, img ...}).

//  ==> RETURN DO NFTCard <==
//  - 9    > retorna a DIV CARD 1 DO NFT nftCard (nftCard)
//  - 10   > dentro da div nftCard recebe uma IMAGEM (nftCard__imageContainer)
// - 11    > src recebe a propriedade (img) e alt (nft-card image)
// - 12    > chama o Título principal Title text= {name} 

//  ==> EXPORTAÇÃO DO NFTCard <==
//  - Décimo Terceiro > Depois exporta um componente React do NFTCard que vai ser o <TitleProps>.
//  =============================>>> <<<=================================

//  ==> STYLE DO CONTAINERS/NFTCard
  // | .nftCard | | .nftCard__imageContainer | .nftCard__image  | 
//  - XXX > Estilizar no (syle.css) 
//  - XXX >   width | height | font-size | border-radius


//  =============================>>> <<<=================================