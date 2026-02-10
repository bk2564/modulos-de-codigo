import { useState } from 'react';
import { Search } from 'lucide-react';

export function Pesquisa({ onSearch }) {
  const [query, setQuery] = useState('');
  const [monthQuery, setMonthQuery] = useState('');
  const [yearQuery, setYearQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <section 
      className="mb-8 bg-gray-100 rounded-xl p-6 shadow-lg"
      aria-label="Formulário de pesquisa"
    >
      <h2 className="text-xl font-bold mb-4">
        <Search className="inline mr-2" size={20} aria-hidden="true" />
        Pesquisa
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="pesquisa-texto" className="sr-only">
            Pesquisar no conteúdo dos PDFs
          </label>
          <input
            id="pesquisa-texto"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Pesquisar no conteúdo dos PDFs…"
            className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Campo de pesquisa por texto"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="pesquisa-mes" className="sr-only">
            Filtrar por mês
          </label>
          <input
            id="pesquisa-mes"
            type='month'
            value={monthQuery}
            onChange={e => setMonthQuery(e.target.value)}
            className='w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600'
            aria-label="Filtrar por mês e ano"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="pesquisa-ano" className="sr-only">
            Filtrar por ano
          </label>
          <input
            id="pesquisa-ano"
            type='number'
            value={yearQuery}
            onChange={e => setYearQuery(e.target.value)}
            placeholder='Pesquisa por ano...'
            min="2000"
            max="2100"
            className='w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600'
            aria-label="Filtrar por ano"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          aria-label="Executar pesquisa"
        >
          Pesquisar
        </button>
      </form>
    </section>
  );
}