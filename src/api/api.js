const fetchResultados = async (
  cidade,
  citySetter,
  citySetterNext,
  errorSetter,
) => {
  try {
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cidade},br&APPID=${
        import.meta.env.VITE_API_KEY
      }&units=metric&lang=pt_br`,
    );

    const dataProx = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cidade},br&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric&lang=pt_br&cnt=24`,
    );

    const json = await data.json();
    const jsonProx = await dataProx.json();

    if (json.cod === '404') {
      throw new Error('Digite uma cidade válida!');
    }
    citySetterNext(jsonProx);
    citySetter(json);
  } catch (err) {
    errorSetter(true);
  }
};

export default fetchResultados;
