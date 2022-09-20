import styles from './Card.module.css';

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
    if (deg === 0) return 'Norte';
    if (deg > 0) return 'Nordeste';
    if (deg === 90) return 'Leste';
    if (deg > 90) return 'Sudeste';
    if (deg === 180) return 'Sul';
    if (deg > 180) return 'Sudoeste';
    if (deg === 270) return 'Oeste';
    if (deg > 270) return 'Noroeste';
  };

  return (
    <section className={styles.Card}>
      <h1>Previsão do dia:</h1>
      <aside>
        <ul>
          <li>
            Temperatura: <span>{Math.round(temp)}° C</span>
          </li>
          <li>
            Humidade: <span>{humidity}%</span>
          </li>
          <li>
            Sensação Térmica: <span>{Math.round(feelsLike)}° C</span>
          </li>
          <ul>
            <li>
              Descrição: <span>{weatherCap(weatherDescription)}</span>
            </li>
          </ul>
          <ul>
            <li>
              Direção do vento: <span>{windDirection(windDeg)}</span>
            </li>
            <li>
              Velocidade do Vento: <span>{windSpeed} m/s</span>
            </li>
          </ul>
          <ul>
            <li>
              Nascer do Sol:{' '}
              <span>
                <SimpleDateTime {...simpleDateOptions}>
                  {sunrise}
                </SimpleDateTime>
              </span>
            </li>
            <li>
              Pôr do Sol:{' '}
              <span>
                <SimpleDateTime {...simpleDateOptions}>{sunset}</SimpleDateTime>
              </span>
            </li>
          </ul>
        </ul>
      </aside>
    </section>
  );
};

export default Card;
