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
import { useState } from 'react';
import { json } from 'react-router-dom';
import { useEffect } from 'react';

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
  resultadoProxDias,
}) => {
  const resp = {
    temp,
    humidity,
    feelsLike,
    weatherDescription,
    windDeg,
    windSpeed,
    sunrise,
    sunset,
    city,
  };

  const [cardContent, setCardContent] = useState({ ...resp });

  const simpleSunDateOptions = {
    showDate: '0',
    timeSeparator: ':',
  };

  const handleSelect = eventKey => {
    const proxDias = resultadoProxDias.list.filter(el =>
      el.dt_txt.includes('12:00:00'),
    );

    console.log('prox', proxDias);

    if (eventKey === '1') {
      setCardContent({ ...resp });
    }
    if (eventKey === '2') {
      proxDias.length === 3
        ? setCardContent({
            temp: proxDias[0].main.temp,
            humidity: proxDias[0].main.humidity,
            feelsLike: proxDias[0].main.feels_like,
            weatherDescription: proxDias[0].weather[0].description,
            windDeg: proxDias[0].wind.deg,
            windSpeed: proxDias[0].wind.speed,
            sunrise: proxDias[0].sys.sunrise,
            sunset: proxDias[0].sys.sunset,
          })
        : setCardContent({
            temp: proxDias[1].main.temp,
            humidity: proxDias[1].main.humidity,
            feelsLike: proxDias[1].main.feels_like,
            weatherDescription: proxDias[1].weather[0].description,
            windDeg: proxDias[1].wind.deg,
            windSpeed: proxDias[1].wind.speed,
            sunrise: proxDias[1].sys.sunrise,
            sunset: proxDias[1].sys.sunset,
          });
    }
    if (eventKey === '3') {
      proxDias.length === 3
        ? setCardContent({
            temp: proxDias[1].main.temp,
            humidity: proxDias[1].main.humidity,
            feelsLike: proxDias[1].main.feels_like,
            weatherDescription: proxDias[1].weather[0].description,
            windDeg: proxDias[1].wind.deg,
            windSpeed: proxDias[1].wind.speed,
            sunrise: proxDias[1].sys.sunrise,
            sunset: proxDias[1].sys.sunset,
          })
        : setCardContent({
            temp: proxDias[2].main.temp,
            humidity: proxDias[2].main.humidity,
            feelsLike: proxDias[2].main.feels_like,
            weatherDescription: proxDias[2].weather[0].description,
            windDeg: proxDias[2].wind.deg,
            windSpeed: proxDias[2].wind.speed,
            sunrise: proxDias[2].sys.sunrise,
            sunset: proxDias[2].sys.sunset,
          });
    }
  };

  useEffect(() => {
    console.log(cardContent);
  }, [cardContent]);

  // const proxDias = jsonProx.list.filter(el => el.dt_txt.includes('12:00:00'));

  // console.log(proxDias);

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
        id="uncontrolled-tab-example"
        className={`mb-3 ${styles.tab}`}
        onSelect={eventKey => handleSelect(eventKey)}
        defaultActiveKey={1}
      >
        <Tab eventKey={'1'} title="De Agora"></Tab>
        <Tab eventKey={'2'} title="Amanhã"></Tab>
        <Tab eventKey={'3'} title="Em 2 Dias"></Tab>
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
              <span>{Math.round(cardContent.temp)}° C</span>
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
              <span>{cardContent.humidity}% </span>
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
            <span>{Math.round(cardContent.feelsLike)}° C</span>
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
          <p>{cardContent.windSpeed} m/s</p>
        </section>
        {cardContent.sunrise ? (
          <section className={styles.sol}>
            <div>
              <img
                src={sunriseIcon}
                alt="Nascer do Sol"
                title="Nascer do Sol"
                className={styles.sunIcons}
              />
              <p>
                <SimpleDateTime {...simpleSunDateOptions}>
                  {cardContent.sunrise}
                </SimpleDateTime>
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
                <SimpleDateTime {...simpleSunDateOptions}>
                  {cardContent.sunset}
                </SimpleDateTime>
              </p>
            </div>
          </section>
        ) : (
          ''
        )}
      </section>
    </section>
  );
};

export default Card;
