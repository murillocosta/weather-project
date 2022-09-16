import styles from './Card.module.css';

const Card = ({ temp, humidity, feelsLike }) => {
  return (
    <section>
      <h1>Previsão do dia:</h1>
      <aside>
        <ul>
          <li>Temperatura: {temp}</li>
          <li>Humidade: {humidity}</li>
          <li>Sensação Térmica: {feelsLike}</li>
        </ul>
      </aside>
    </section>
  );
};

export default Card;
