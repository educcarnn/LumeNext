import { useState, useEffect } from 'react';

export default function BuscaCep() {
  const [rua, setRua] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [estado, setEstado] = useState<string>('');
  const [cidades, setCidades] = useState<string[]>([]);
  const [resultados, setResultados] = useState<any[]>([]);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const ITENS_POR_PAGINA = 10;

  useEffect(() => {
    const buscarCidades = async (uf: string) => {
      try {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
        const data = await response.json();
        const nomesCidades = data.map((cidade: any) => cidade.nome);
        setCidades(nomesCidades);
      } catch (error) {
        console.error("Erro ao buscar cidades:", error);
      }
    };

    if (estado) {
      buscarCidades(estado);
    }
  }, [estado]);

  const buscarCEP = async () => {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`
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
          placeholder="Digite o estado (ex: SP)"
          value={estado}
          onChange={(e) => setEstado(e.target.value.toUpperCase())}
          maxLength={2}
          className="px-4 py-2 border border-blue-400 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {cidades.length > 0 && (
          <select
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="my-2 px-4 py-2 border border-blue-400 rounded w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {cidades.map((cidadeNome) => (
              <option key={cidadeNome} value={cidadeNome}>
                {cidadeNome}
              </option>
            ))}
          </select>
        )}

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
          {resultados.slice((paginaAtual - 1) * ITENS_POR_PAGINA, paginaAtual * ITENS_POR_PAGINA).map((resultado, index) => (
            <div key={index} className="border border-blue-300 rounded p-4 bg-blue-100 dark:bg-gray-700">
              <p className="mb-2 text-black dark:text-white">
                <strong>{index + 1}.</strong>
              </p>
              <p className="text-black dark:text-white">CEP: {resultado.cep}</p>
              <p className="text-black dark:text-white">Rua: {resultado.logradouro}</p>
              <p className="text-black dark:text-white">Bairro: {resultado.bairro}</p>
              <p className="text-black dark:text-white">Cidade: {resultado.localidade}</p>
              <p className="text-black dark:text-white">Estado: {resultado.uf}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
