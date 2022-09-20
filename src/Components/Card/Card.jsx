import styles from './Card.module.css';
import sunriseIcon from '../../assets/sunrise.png';
import sunsetIcon from '../../assets/sunset.png';
import windIcon from '../../assets/wind.png';
import humidityIcon from '../../assets/humidity.png';
import celsiusIcon from '../../assets/celsius.png';
import feelsLikeIcon from '../../assets/feels-like.png';

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
  weatherIconId,
  city,
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
      case 'nevoa':
        return mistImg;
      case 'neve':
        return neveImg;
      case 'chuva':
        return rainImg;
      case 'tempestade':
        return tempestadeImg;
      case 'chuva moderada':
        return chuvaModeradaImg;
      default:
        break;
    }
  };

  //TODO
  //
  // const windDirection = deg => {
  //   if (deg < 5 && deg >= 355)
  //     return (
  //       <WiDirectionUp
  //         title="Direção do vento: Norte"
  //         className={styles.direction}
  //       />
  //     );
  //   if (deg >= 5 && deg < 85)
  //     return (
  //       <WiDirectionUpRight
  //         title="Direção do vento: Nordeste"
  //         className={styles.direction}
  //       />
  //     );
  //   if (deg >= 85 && deg < 95)
  //     return (
  //       <WiDirectionRight
  //         title="Direção do vento: Leste"
  //         className={styles.direction}
  //       />
  //     );
  //   if (deg >= 95 && deg < 175)
  //     return (
  //       <WiDirectionDownRight
  //         title="Direção do vento: Sudeste"
  //         className={styles.direction}
  //       />
  //     );
  //   if (deg >= 175 && deg < 185)
  //     return (
  //       <WiDirectionDown
  //         title="Direção do vento: Sul"
  //         className={styles.direction}
  //       />
  //     );
  //   if (deg >= 185 && deg < 265)
  //     return (
  //       <WiDirectionUpRight
  //         title="Direção do vento: Sudoeste"
  //         className={styles.direction}
  //       />
  //     );
  //   if (deg >= 265 && deg < 275)
  //     return (
  //       <WiDirectionLeft
  //         title="Direção do vento: Oeste"
  //         className={styles.direction}
  //       />
  //     );
  //   if (deg >= 270 && deg < 355)
  //     return (
  //       <WiDirectionUpLeft
  //         title="Direção do vento: Noroeste"
  //         className={styles.direction}
  //       />
  //     );
  // };

  return (
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
            <SimpleDateTime {...simpleDateOptions}>{sunrise}</SimpleDateTime>
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
            <SimpleDateTime {...simpleDateOptions}>{sunset}</SimpleDateTime>
          </p>
        </div>
      </section>
    </section>
  );
};

export default Card;
