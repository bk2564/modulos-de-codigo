import { getPdf } from '../../utils/storage';

export function DadosAbertos() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <section className="mb-16 bg-[#fffdfa] border border-gray-400 p-10 shadow-inner">
          <h2 className="text-2xl font-[Cinzel] uppercase tracking-[0.25em] mb-8 text-[#0a2a43] border-b pb-4">
            Dados Abertos
          </h2>
          <div className="flex gap-4">
            {['json', 'csv', 'txt'].map(t => (
              <button
                key={t}
                onClick={() => exportPDFs(t)}
                className="bg-[#c9a227] text-black px-10 py-4 uppercase tracking-[0.2em] text-sm font-bold border border-black"
              >
                Exportar {t.toUpperCase()}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function exportPDFs(type) {
  getPdf().then(pdfs => {
    let dataStr;
    let mimeType;
    const pdfsExported = pdfs.map(({ id, titulo, descricao, edicao, data, createdAt, mes, ano }) =>
      ({ id, titulo, descricao, edicao, data, createdAt, data, mes, ano }));
    if (type === 'json') {
      dataStr = JSON.stringify(pdfsExported, null, 2);
      mimeType = 'application/json';
    } else if (type === 'csv') {
      const headers = ['id', 'titulo', 'descricao', 'edicao', 'data', 'createdAt', 'mes', 'ano'];
      const rows = pdfsExported.map(pdf =>
        headers.map(header => `"${(pdf[header] || '').toString().replace(/"/g, '""')}"`).join(',')
      );
      dataStr = [headers.join(','), ...rows].join('\n');
      mimeType = 'text/csv';
    } else if (type === 'txt') {
      dataStr = JSON.stringify(pdfsExported);
      mimeType = 'text/plain';
    } else {
      return;
    }

    const blob = new Blob([dataStr], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `diario_oficial_export.${type}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}
