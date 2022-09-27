import styles from './Home.module.css';

import { useState } from 'react';

import Card from '../Components/Card/Card';
import { FcSearch } from 'react-icons/fc';

import fetchResultados from '../api/api';

const Home = () => {
  const [inputCidade, setInputCidade] = useState('');
  const [resultadoCidade, setResultadoCidade] = useState(null);
  const [resultadoProxDias, setResultadoProxDias] = useState(null);
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!inputCidade) {
      setError(true);
    } else {
      setError(false);
      fetchResultados(
        inputCidade,
        setResultadoCidade,
        setResultadoProxDias,
        setError,
      );
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.input}>
        <div>
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
        {error ? <p className={styles.error}>Digite uma cidade válida!</p> : ''}
      </div>

      {resultadoCidade === null || error ? (
        ''
      ) : (
        <Card
          temp={resultadoCidade.main.temp}
          humidity={resultadoCidade.main.humidity}
          city={resultadoCidade.name}
          feelsLike={resultadoCidade.main.feels_like}
          weatherDescription={resultadoCidade.weather[0].description}
          windDeg={resultadoCidade.wind.deg}
          windSpeed={resultadoCidade.wind.speed}
          sunrise={resultadoCidade.sys.sunrise}
          sunset={resultadoCidade.sys.sunset}
          weatherIconId={resultadoCidade.weather[0].icon}
          resultadoProxDias={resultadoProxDias}
        />
      )}
    </main>
  );
};

export default Home;
