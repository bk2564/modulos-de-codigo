import {getPdf} from '../../utils/storage';


export function DadosAbertos() {
  return (
  <section className="mb-8 bg-gray-100 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Dados Abertos</h2>
        <div className="flex justify-between mx-10 gap-4">
        <button
          onClick={() => exportPDFs('json')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Exportar JSON
        </button>
        <button
          onClick={() => exportPDFs('csv')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Exportar CSV
        </button>
        <button
          onClick={() => exportPDFs('txt')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Exportar TXT
        </button>
      </div>
    </section>
  );
}

function exportPDFs(type) {
  getPdf().then(pdfs => {
    let dataStr;
    let mimeType;
    const pdfsExported = pdfs.map(({id, titulo, descricao, edicao, data, createdAt, mes, ano}) => 
    ({id, titulo, descricao, edicao, data, createdAt, data, mes, ano}));
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