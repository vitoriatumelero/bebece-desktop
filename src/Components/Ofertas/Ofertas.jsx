import React from 'react';
import './Ofertas.css';
import ofertas_image1 from '../Assets/Assets/besimplebetrue.png';
import ofertas_image2 from '../Assets/Assets/image12.png';
import ofertas_image3 from '../Assets/Assets/Frame 83 1.png';

const Ofertas = () => {
  return (
    <div className="ofertas">
      <p className="ofertas-title">Conheça mais</p>
      <p className="ofertas-subtitle">Fique por dentro de tudo que acontece no Bebecê</p>
      <div className="ofertas-grid">
        <div className="ofertas-item">
          <img src={ofertas_image1} alt="Ofertas 1" />
          <p className="ofertas-item-title">É AMANHÃ</p>
          <p className="ofertas-item-subtitle">SIMPLE and TRUE lançamento da nova coleção Outono Inverno da Bebecê.❤️</p>
          <a href="#" className="saiba-mais">Saiba mais</a>
        </div>
        <div className="ofertas-item">
          <img src={ofertas_image2} alt="Ofertas 2" />
          <p className="ofertas-item-title">NOVO LOGO, MESMA ESSÊNCIA.</p>
          <p className="ofertas-item-subtitle2">Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!</p>
          <a href="#" className="saiba-mais">Saiba mais</a>
        </div>
        <div className="ofertas-item">
          <img src={ofertas_image3} alt="Ofertas 3" />
          <p className="ofertas-item-title3">DESCUBRA O GLAMOUR EM CADA PASSO.</p>
          <p className="ofertas-item-subtitle3">Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨</p>
          <a href="#" className="saiba-mais">Saiba mais</a>
        </div>
      </div>
    </div>
  );
};

export default Ofertas;