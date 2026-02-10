import { useState } from 'react';

export function Pesquisa({onSearch}) {
  const [query, setQuery] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  return (
    <section className="mb-8 bg-gray-100 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">🔍 Pesquisa</h2>

      <div className="flex gap-4">
        <input
          type="number"
          onChange={e => setAno(e.target.value)}
          placeholder="Ano"
          className="flex-1 px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <select
          onChange={e => setMes(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
          <option value="0">Todos</option>
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Pesquisar no conteúdo dos PDFs…"
          className="flex-1 px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          onClick={() => onSearch(query, mes, ano)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
          Pesquisar         
        </button>
      </div>
    </section>
  );

  function handleSearch(q, mes = '', ano = '') {
    const query = (q || '').toLowerCase().trim();
    
    if (!query && !mes && !ano) return setFilteredPdfs(pdfs);
    setFilteredPdfs(
      pdfs.filter(p =>
        ((p.titulo || '').toLowerCase().includes(query) ||
        (p.descricao || '').toLowerCase().includes(query) ||
        (p.textoExtraido || '').toLowerCase().includes(query)) &&
        (mes === '' || p.mes.toString() == mes) &&
        (ano === '' || p.ano.toString() == ano)
      )
    );
  }
}
