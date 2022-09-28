//3rd party libs
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SimpleDateTime from 'react-simple-timestamp-to-date';

//styles
import styles from './Card.module.css';

//icons
import sunriseIcon from '../../assets/sunrise.png';
import sunsetIcon from '../../assets/sunset.png';
import windIcon from '../../assets/wind.png';
import humidityIcon from '../../assets/humidity.png';
import celsiusIcon from '../../assets/celsius.png';
import feelsLikeIcon from '../../assets/feels-like.png';

//helpers
import renderWeatherImg from '../../Helpers/renderWeatherImg';
import weatherCap from '../../Helpers/weatherCap';
import contentGenerator from '../../Helpers/contentGenerator';

//hooks
import { useState } from 'react';

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
  const [title, setTitle] = useState('Agora em:');

  const simpleSunDateOptions = {
    showDate: '0',
    timeSeparator: ':',
  };

  const handleSelect = eventKey => {
    const proxDias = resultadoProxDias.list.filter(el =>
      el.dt_txt.includes('12:00:00'),
    );

    if (eventKey === '1') {
      setCardContent({ ...resp });
    }
    if (eventKey === '2') {
      proxDias.length === 3
        ? setCardContent(contentGenerator(proxDias, 0))
        : setCardContent(contentGenerator(proxDias, 1));
    }
    if (eventKey === '3') {
      proxDias.length === 3
        ? setCardContent(contentGenerator(proxDias, 1))
        : setCardContent(contentGenerator(proxDias, 2));
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
        <h1>{city}:</h1>
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
          <div className={styles.feelsLike}>
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
            <span>{cardContent.weatherDescription}</span>
          </p>
          <img
            src={renderWeatherImg(cardContent.weatherDescription)}
            alt={cardContent.weatherDescription}
            title={cardContent.weatherDescription}
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
