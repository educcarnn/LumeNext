import { useState, ChangeEvent, FormEvent } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
    arquivo: null as File | null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;

    if (name === "arquivo") {
        const input = e.target as HTMLInputElement;

        if (input.files && input.files.length > 0) {
            const file = input.files[0];
            setFormData(prev => ({ ...prev, arquivo: file }));
        } else {
            setFormData(prev => ({ ...prev, arquivo: null }));
        }
    } else {
        const value = e.target.value;
        setFormData(prev => ({ ...prev, [name]: value }));
    }
};

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center px-2 sm:px-5 mx-auto w-full max-w-xl rounded-lg">
      <h1 className="text-2xl font-semibold mb-5 text-blue-500">Formulário de Contato</h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          className="p-2 w-full mb-3 rounded-md border border-gray-300"
          type="text"
          placeholder="Nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          className="p-2 w-full mb-3 rounded-md border border-gray-300"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="p-2 w-full mb-3 h-24 rounded-md border border-gray-300"
          placeholder="Mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
        />
        <label className="mb-3 w-full relative block">
          <span className="p-2 w-full rounded-md border border-gray-300 block cursor-pointer text-center">
            {formData.arquivo ? formData.arquivo.name : "Selecione um arquivo"}
          </span>
          <input 
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            type="file" 
            name="arquivo" 
            onChange={handleChange} 
          />
        </label>
        <button className="w-full sm:w-auto px-5 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
