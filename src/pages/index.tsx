import React, { useEffect, useState } from "react";

type ClimaAtual = {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
};

type PrevisaoDia = {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
    };
  };
};

function Tempo() {
  const [climaAtual, setClimaAtual] = useState<ClimaAtual | null>(null);
  const [previsao, setPrevisao] = useState<PrevisaoDia[] | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const API_KEY = "2fb47be60c684606a4f141118232708";

  useEffect(() => {
    const obterLocalizacao = () => {
      navigator.geolocation.getCurrentPosition(obterDadosClima, (erroGeo) => {
        setErro(`Erro de Geolocalização: ${erroGeo.message}`);
      });
    };

    const obterDadosClima = async (position: GeolocationPosition) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const responseAtual = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`
        );
        const dataAtual: ClimaAtual = await responseAtual.json();

        const responsePrevisao = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=4`
        );
        const dataPrevisao = await responsePrevisao.json();

        setClimaAtual(dataAtual);
        setPrevisao(dataPrevisao.forecast.forecastday);
      } catch (error) {
        console.error("Erro ao buscar informações climáticas:", error);
        setErro("Erro ao buscar informações climáticas.");
      }
    };

    obterLocalizacao();
  }, []);

  if (erro) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">{erro}</p>
      </div>
    );
  }

  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <div className="bg-white shadow-md rounded-lg w-full md:w-3/4 lg:w-1/2 p-5">
        <aside className="w-1/4 float-left mr-5">
          {/* Conteúdo da barra lateral */}
        </aside>
        <main className="w-3/4 float-right">
          <header className="mb-5">
            {climaAtual && (
              <h1 className="text-3xl font-bold text-blue-700">
                {climaAtual.location.name}
              </h1>
            )}
          </header>
          {climaAtual ? (
            <>
          
              <p className="text-lg mb-2">
                Temperatura Atual:{" "}
                <span className="font-semibold text-blue-500">
                  {climaAtual.current.temp_c}°C
                </span>
              </p>
              <p className="text-lg mb-5">
                Condição Atual:{" "}
                <span className="font-semibold text-blue-500">
                  {climaAtual.current.condition.text}
                </span>
              </p>
              <h2 className="text-2xl text-blue-600 mb-3">
                Previsão para os próximos dias:
              </h2>
              {previsao &&
                previsao.map((dia, index) => (
                  <article
                    key={index}
                    className="mb-3 p-3 border rounded bg-blue-50"
                  >
                    <p className="text-lg">
                      {dia.date}:{" "}
                      <span className="font-semibold text-blue-400">
                        {dia.day.avgtemp_c}°C, {dia.day.condition.text}
                      </span>
                    </p>
                  </article>
                ))}
            </>
          ) : (
            <p className="text-lg">Carregando informações climáticas...</p>
          )}
        </main>
      </div>
    </div>
  );
}

export default Tempo;
