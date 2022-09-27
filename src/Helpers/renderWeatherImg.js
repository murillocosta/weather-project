//flaticon
import nubladoImg from '../assets/nublado.png';
import nuvensDispersasImg from '../assets/nuvens-dispersas.png';
import ceuLimpoImg from '../assets/ceu-limpo.png';
import poucasNuvensImg from '../assets/poucas-nuvens.png';
import mistImg from '../assets/mist.png';
import neveImg from '../assets/neve.png';
import rainImg from '../assets/rain.png';
import tempestadeImg from '../assets/tempestade.png';
import chuvaModeradaImg from '../assets/chuva-moderada.png';

const renderWeatherImg = weatherDescription => {
  switch (weatherDescription) {
    case 'nublado':
      return nubladoImg;
    case 'nuvens dispersas':
      return nuvensDispersasImg;
    case 'algumas nuvens':
      return poucasNuvensImg;
    case 'céu limpo':
      return ceuLimpoImg;
    case 'nevoa' || 'névoa':
      return mistImg;
    case 'neve':
      return neveImg;
    case 'chuva':
      return rainImg;
    case 'chuva leve':
      return rainImg;
    case 'tempestade':
      return tempestadeImg;
    case 'chuva moderada':
      return chuvaModeradaImg;
    default:
      break;
  }
};

export default renderWeatherImg;
