import styles from './Home.module.css';

import { useState } from 'react';
import Card from '../Components/Card/Card';

import { FcSearch } from 'react-icons/fc';

const Home = () => {
  const [inputCidade, setInputCidade] = useState('');
  const [resultadoCidade, setResultadoCidade] = useState(null);

  const handleClick = () => {
    const fetchCidade = async () => {
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputCidade},br&APPID=f9d31ae794e0381cd7779d34934d61f8&units=metric&lang=pt_br`,
      );

      const json = await data.json();

      console.log(json);

      setResultadoCidade(json);
    };
    fetchCidade();
  };

  // feels_like: 25.44;
  // grnd_level: 1015;
  // humidity: 73;
  // pressure: 1017;
  // sea_level: 1017;
  // temp: 24.98;
  // temp_max: 24.98;
  // temp_min: 24.98;

  return (
    <main className={styles.main}>
      <div className={styles.input}>
        <label>
          Cidade: <FcSearch />
          <input
            type="text"
            value={inputCidade}
            onChange={({ target }) => setInputCidade(target.value)}
          />
        </label>
        <button onClick={handleClick}>Pesquisar</button>
      </div>

      {resultadoCidade === null ? (
        ''
      ) : (
        <Card
          temp={resultadoCidade.main.temp}
          humidity={resultadoCidade.main.humidity}
          feelsLike={resultadoCidade.main.feels_like}
          weatherDescription={resultadoCidade.weather[0].description}
          windDeg={resultadoCidade.wind.deg}
          windSpeed={resultadoCidade.wind.speed}
          sunrise={resultadoCidade.sys.sunrise}
          sunset={resultadoCidade.sys.sunset}
          weatherIconId={resultadoCidade.weather[0].icon}
        />
      )}
    </main>
  );
};

export default Home;
