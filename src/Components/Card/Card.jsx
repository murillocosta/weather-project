import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import styles from './Card.module.css';
import sunriseIcon from '../../assets/sunrise.png';
import sunsetIcon from '../../assets/sunset.png';
import windIcon from '../../assets/wind.png';
import humidityIcon from '../../assets/humidity.png';
import celsiusIcon from '../../assets/celsius.png';
import feelsLikeIcon from '../../assets/feels-like.png';

//flaticon
import nubladoImg from '../../assets/nublado.png';
import nuvensDispersasImg from '../../assets/nuvens-dispersas.png';
import ceuLimpoImg from '../../assets/ceu-limpo.png';
import poucasNuvensImg from '../../assets/poucas-nuvens.png';
import mistImg from '../../assets/mist.png';
import neveImg from '../../assets/neve.png';
import rainImg from '../../assets/rain.png';
import tempestadeImg from '../../assets/tempestade.png';
import chuvaModeradaImg from '../../assets/chuva-moderada.png';

import SimpleDateTime from 'react-simple-timestamp-to-date';

const Card = ({
  temp,
  humidity,
  feelsLike,
  weatherDescription,
  windDeg,
  windSpeed,
  sunrise,
  sunset,
  city,
}) => {
  const simpleSunDateOptions = {
    showDate: '0',
    timeSeparator: ':',
  };

  // const dateOptions = {
  //   show
  // }

  const weatherCap = weatherDescription => {
    return (
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)
    );
  };

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

  return (
    <section className={`animeLeft ${styles.cardContainer}`}>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className={`mb-3 ${styles.tab}`}
      >
        <Tab eventKey="De Agora" title="De Agora"></Tab>
        <Tab eventKey="Amanhã" title="Amanhã"></Tab>
        <Tab eventKey="Em 3 Dias" title="Em 3 Dias"></Tab>
      </Tabs>
      <section className={styles.Card}>
        <h1>Agora em {city}:</h1>
        <div className={styles.temp}>
          <div>
            <p>
              Temperatura:{' '}
              <img
                src={celsiusIcon}
                alt="Temperatura"
                title="Temperatura"
                className={styles.icon}
              />{' '}
              <span>{Math.round(temp)}° C</span>
            </p>
          </div>
          <div>
            <p>
              Umidade:{' '}
              <img
                src={humidityIcon}
                alt="Umidade Relativa"
                title="Umidade Relativa"
                className={styles.icon}
              />
              <span>{humidity}% </span>
            </p>
          </div>
          <div>
            Sensação Térmica:{' '}
            <img
              src={feelsLikeIcon}
              alt="Sensação Térmica"
              title="Sensação Térmica"
              className={styles.icon}
            />{' '}
            <span>{Math.round(feelsLike)}° C</span>
          </div>
        </div>
        <div className={styles.desc}>
          <p>
            <span>{weatherCap(weatherDescription)}</span>
          </p>
          <img
            src={renderWeatherImg(weatherDescription)}
            alt={weatherDescription}
            title={weatherCap(weatherDescription)}
          />
        </div>
        <section className={styles.vento}>
          <img src={windIcon} alt="Vento" title="Vento" />
          <p>{windSpeed} m/s</p>
        </section>
        <section className={styles.sol}>
          <div>
            <img
              src={sunriseIcon}
              alt="Nascer do Sol"
              title="Nascer do Sol"
              className={styles.sunIcons}
            />
            <p>
              <SimpleDateTime {...simpleSunDateOptions}>{sunrise}</SimpleDateTime>
            </p>
          </div>
          <div>
            <img
              src={sunsetIcon}
              alt="Pôr do Sol"
              title="Pôr do Sol"
              className={styles.sunIcons}
            />
            <p>
              <SimpleDateTime {...simpleSunDateOptions}>{sunset}</SimpleDateTime>
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Card;
