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
    const value = e.target.type === "file" ? e.target.files![0] : e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>

      <div className="flex flex-col items-center p-5 mx-auto w-full max-w-xl shadow-md rounded-lg">
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
          <input className="mb-3" type="file" name="arquivo" onChange={handleChange} />
          <button className="px-5 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
