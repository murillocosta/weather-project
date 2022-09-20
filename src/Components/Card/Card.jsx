import styles from './Card.module.css';

import { BsSunset, BsSunrise } from 'react-icons/bs';
import {
  WiStrongWind,
  WiDirectionUpRight,
  WiDirectionUp,
  WiDirectionRight,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionLeft,
  WiDirectionUpLeft,
  WiHumidity,
} from 'react-icons/wi';
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
  weatherIconId,
}) => {
  const simpleDateOptions = {
    showDate: '0',
    timeSeparator: ':',
  };

  const weatherCap = weatherDescription => {
    return (
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)
    );
  };

  const windDirection = deg => {
    if (deg < 5 && deg >= 355)
      return (
        <WiDirectionUp
          title="Direção do vento: Norte"
          className={styles.direction}
        />
      );
    if (deg >= 5 && deg < 85)
      return (
        <WiDirectionUpRight
          title="Direção do vento: Nordeste"
          className={styles.direction}
        />
      );
    if (deg >= 85 && deg < 95)
      return (
        <WiDirectionRight
          title="Direção do vento: Leste"
          className={styles.direction}
        />
      );
    if (deg >= 95 && deg < 175)
      return (
        <WiDirectionDownRight
          title="Direção do vento: Sudeste"
          className={styles.direction}
        />
      );
    if (deg >= 175 && deg < 185)
      return (
        <WiDirectionDown
          title="Direção do vento: Sul"
          className={styles.direction}
        />
      );
    if (deg >= 185 && deg < 265)
      return (
        <WiDirectionUpRight
          title="Direção do vento: Sudoeste"
          className={styles.direction}
        />
      );
    if (deg >= 265 && deg < 275)
      return (
        <WiDirectionLeft
          title="Direção do vento: Oeste"
          className={styles.direction}
        />
      );
    if (deg >= 270 && deg < 355)
      return (
        <WiDirectionUpLeft
          title="Direção do vento: Noroeste"
          className={styles.direction}
        />
      );
  };

  return (
    <section className={styles.Card}>
      <h1>Previsão do dia:</h1>
      <div className={styles.temp}>
        <ul>
          <li>
            Temperatura: <span>{Math.round(temp)}° C</span>
          </li>
          <li>
            Humidade:{' '}
            <span>
              {humidity}%{' '}
              <WiHumidity className={styles.icon} title="Humidade relativa" />
            </span>
          </li>
          <li>
            Sensação Térmica: <span>{Math.round(feelsLike)}° C</span>
          </li>
        </ul>
      </div>
      <div className={styles.desc}>
        <ul>
          <li>
            Descrição: <span>{weatherCap(weatherDescription)}</span>{' '}
            <span>
              <img
                src={`http://openweathermap.org/img/wn/${weatherIconId}@2x.png `}
                alt={weatherDescription}
                title={weatherCap(weatherDescription)}
              />
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.vento}>
        <ul>
          <li>
            Vento:{' '}
            <WiStrongWind title="Velocidade do Vento" className={styles.icon} />{' '}
            <span>{windSpeed} m/s</span> <span>{windDirection(windDeg)}</span>
          </li>
        </ul>
      </div>
      <div className={styles.sol}>
        <ul>
          <li>
            <BsSunrise title="Nascer do Sol" className={styles.icon} />{' '}
            <span>
              <SimpleDateTime {...simpleDateOptions}>{sunrise}</SimpleDateTime>
            </span>
          </li>
          <li>
            <BsSunset title="Pôr do Sol" className={styles.icon} />{' '}
            <span>
              <SimpleDateTime {...simpleDateOptions}>{sunset}</SimpleDateTime>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Card;
