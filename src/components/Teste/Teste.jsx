export function Teste() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <section className="mb-16 bg-[#fffdfa] border border-gray-400 p-10 shadow-inner">
          <h2 className="text-2xl font-[Cinzel] uppercase tracking-[0.25em] mb-8 text-[#0a2a43] border-b pb-4">
            Teste
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => getVeiculos()
                .then(veiculos => console.log(veiculos))
              }
              className="bg-[#c9a227] text-black px-10 py-4 uppercase tracking-[0.2em] text-sm font-bold border border-black"
            >
              Teste
            </button>
            <button
  onClick={() => window.open(
    "https://documenter.getpostman.com/view/52232861/2sBXcBnNFC",
    "_blank"
  )}
  className="bg-[#c9a227] text-black px-6 py-3 uppercase font-bold border border-black"
>
  Abrir Documentação
</button>

          </div>
        </section>
      </div>
    </div>
  );

  
async function getVeiculos() {
  const response = await fetch('http://localhost:3000/veiculos');
  const data = await response.json();
  return data;
}
}