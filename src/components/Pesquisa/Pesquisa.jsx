import { useState } from 'react';

export function Pesquisa({onSearch}) {
  const [query, setQuery] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  return (
<section className="mb-16 bg-[#fffdfa] border border-gray-400 p-10 shadow-inner">
      <h2 className="text-2xl font-[Cinzel] uppercase tracking-[0.25em] mb-8 text-[#0a2a43] border-b pb-4">
        Pesquisa Oficial
      </h2>

      <div className="flex gap-4">
        <input
          type="number"
          placeholder="Ano"
          onChange={(e) => setAno(e.target.value)}
          className="flex-1 px-5 py-4 border border-gray-500 bg-[#fdfcf9] font-serif"
        />

        <select
          onChange={(e) => setMes(e.target.value)}
          className="flex-1 px-5 py-4 border border-gray-500 bg-[#fdfcf9] font-serif"
        >
          <option value="">Todos</option>
          {[
            'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
            'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
          ].map((m, i) => (
            <option key={i} value={i + 1}>{m}</option>
          ))}
        </select>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar no conteúdo dos atos"
          className="flex-1 px-5 py-4 border border-gray-500 bg-[#fdfcf9] font-serif"
        />

        <button
          onClick={() => onSearch(query, mes, ano)}
          className="bg-[#0a2a43] text-white px-10 py-4 uppercase tracking-[0.2em] text-sm border border-[#c9a227]"
        >
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
