import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Components/Card/Card';

const Home = () => {
  const [inputCidade, setInputCidade] = useState('');
  const [resultadoCidade, setResultadoCidade] = useState(null);

  const handleClick = () => {
    const fetchCidade = async () => {
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputCidade},br&APPID=f9d31ae794e0381cd7779d34934d61f8&units=metric`,
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
    <main>
      <label>
        Cidade:
        <input
          type="text"
          value={inputCidade}
          onChange={({ target }) => setInputCidade(target.value)}
        />
      </label>
      <button onClick={handleClick}>Pesquisar</button>
      {resultadoCidade === null ? (
        ''
      ) : (
        <Card
          temp={resultadoCidade.main.temp}
          humidity={resultadoCidade.main.humidity}
          feelsLike={resultadoCidade.main.feels_like}
        />
      )}
    </main>
  );
};

export default Home;
