// #  -CONTAINERS // o containers renderiza os componentes // é como se fosse as mãos pq ele junta todos os dedos(componentes)
// É onde coloca todas as DIVS


import React from "react";
import Title from "../../components/Title";
import "./style.css";
import iconView from "../../assets/icon/icon-view.svg";
import iconEthereum from "../../assets/icon/icon-ethereum.svg";
import iconClock from "../../assets/icon/icon-clock.svg";

// DECLARAR AS STRINGS NO CONTAINERS
export interface NFTCardProps {
  name: string;
  img: string;
  description: string;
  price: number;
  days: number;
  user: string;
  link: string;
}

// A *CONSTANTE* NTFCard esta sendo *TIPADA* que é um Componente Funcional (FC)
// O *COMPONENTE* <NFTCardsProps> vai receber como *PROPRIEDADE* o ({name, img})
const NFTCard: React.FC<NFTCardProps> = ({ 
  name, 
  img,
  description,
  price,
  days,
  user,
  link
}) => {
  return (
    <div className="nftCripto">
      <div className="nftCripto__imageCard"> 
        <img 
        className ="nftCripto__imageCard__img" 
        src={img} 
        alt="nftCripto Ethereum" 
        />
        <img
        className ="nftCripto__imageCard__icon"
        src={iconView}
        alt="nftCripto View"
        />
      </div>
      <Title text= {name} />
      <p className = "nftCripto__description">{description}</p>
      <div className="nftCripto__infoCard">
        <div className="nftCripto__infoCard__price">
          <img src={iconEthereum} alt="iconEthereum" />
          <p className="nftCripto__inforCard__price__value">
            {price} ETH
          </p>
        </div>
        <div className="nftCripto__infoCard__days">
          <img src={iconClock} alt="iconClock" />
          <p className="nftCripto__infoCard__days__number">
            {days} days left
          </p>
        </div>
      </div>
      <div className="nftCripto__divider"></div>
      <div className="nftCripto__user">
        <div className="nftCripto__user__img">
          <img className="nftCripto__user__userfig"
            src={user} alt="user" />
        </div>
        <p className="nftCripto__user__creator">
           Creating of {" "}
           <span className="nftCripto__user__link">
          {link}
        </span>
        </p>
      </div>
    </div>
  );
};

// {/* // EXPORTANDO o UM componente React do NFTCard que vai ser o <NFTCardsProps> */}
export default NFTCard;













{/* 
///  =============================>>> <<<=================================
// Explicando o CÓDIGO ==> CONTAINERS <==
// aqui basicamente: 
//  ==> IMPORTAÇÃO <==
//  - 1  > importa o React. (" ")
//  - 2  > importa Title de Componentes (../../)
//  - 3  > importa o slyle dentro desta pasta Containers. (./)

// //  ==> CRIAR ARRAY (((EXPORT))) INTERFACE NFTCardProps <==
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


//  =============================>>> <<<================================= */}