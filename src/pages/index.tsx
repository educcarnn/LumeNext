import React, { useEffect, useState } from "react";
import { formatarData } from "../utils/dateUtils";

type ClimaAtual = {
  name: string;
  main: {
    temp: number;
  };
  weather: [{
    description: string;
    icon: string;
  }];
};

type PrevisaoDia = {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: [{
    description: string;
    icon: string;
  }];
};

function Tempo() {
  const [climaAtual, setClimaAtual] = useState<ClimaAtual | null>(null);
  const [previsao, setPrevisao] = useState<PrevisaoDia[] | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const API_KEY = "e6a7dd08516eec9ac9679cc061635ac4";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const responseAtual = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`
        );
        const dataAtual: ClimaAtual = await responseAtual.json();
    
        const responsePrevisao = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`
        );
        const dataPrevisao = await responsePrevisao.json();
    
        setClimaAtual(dataAtual);
        setPrevisao(dataPrevisao.list.filter((_: any, index: number) => index % 8 === 7));
    } catch (error) {
        console.error("Erro ao buscar informações climáticas:", error);
        setErro("Erro ao buscar informações climáticas.");
    }

    });
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl flex flex-col items-center p-5 rounded-lg">
        <main className="col-span-3">
          <header className="mb-5 text-center lg:text-left">
            {climaAtual && (
              <>
                <h1 className="text-3xl font-bold text-blue-700">
                  {climaAtual.name}
                </h1>
                <img 
                  src={`http://openweathermap.org/img/w/${climaAtual.weather[0].icon}.png`} 
                  alt={climaAtual.weather[0].description}
                />
              </>
            )}
          </header>

          {climaAtual ? (
            <>
              <p className="text-lg mb-2">
                Temperatura Atual:{" "}
                <span className="font-semibold text-blue-500">
                  {climaAtual.main.temp}°C
                </span>
              </p>
              <p className="text-lg mb-5">
                Condição Atual:{" "}
                <span className="font-semibold text-blue-500">
                  {climaAtual.weather[0].description}
                </span>
              </p>
              <h2 className="text-2xl text-blue-600 mb-3">
                Previsão para os próximos dias:
              </h2>
              {previsao && previsao.map((dia, index) => (
                <article key={index} className="mb-3 p-3 border rounded bg-blue-50">
                  <p className="text-lg text-black">
                    {formatarData(dia.dt_txt)}:{" "}
                    <span className="font-semibold text-blue-400">
                      {dia.main.temp}°C, {dia.weather[0].description}
                    </span>
                  </p>
                  <img 
                    src={`http://openweathermap.org/img/w/${dia.weather[0].icon}.png`} 
                    alt={dia.weather[0].description}
                  />
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
