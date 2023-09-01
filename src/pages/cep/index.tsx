import { useState } from 'react';


export default function BuscaCep() {
  const [rua, setRua] = useState<string>('');
  const [resultados, setResultados] = useState<any[]>([]); // Considerando que a resposta da API é um array

  const buscarCEP = async () => {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/SP/Sao%20Paulo/${rua}/json/`
      );
      const data = await response.json();

      if (data.erro) {
        alert('Rua não encontrada');
        return;
      }

      setResultados(data);
    } catch (error) {
      alert('Erro ao buscar o CEP');
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Digite o nome da rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          className="px-4 py-2 border border-blue-400 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button onClick={buscarCEP} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Buscar
        </button>
        <div className="w-full max-w-md space-y-4">
          {resultados.map((resultado, index) => (
            <div key={index} className="border border-blue-300 rounded p-4 bg-blue-100">
              <p className="mb-2 text-black">
                <strong>{index + 1}.</strong>
              </p>
              <p>CEP: {resultado.cep}</p>
              <p>Rua: {resultado.logradouro}</p>
              <p>Bairro: {resultado.bairro}</p>
              <p>Cidade: {resultado.localidade}</p>
              <p>Estado: {resultado.uf}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
