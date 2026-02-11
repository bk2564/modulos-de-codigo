export function Cabecalho() {
  return (
    <header 
      className="bg-[#0a2a43] text-white px-16 py-10 border-b-[6px] border-[#c9a227] shadow-2xl"
      role="banner"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
      <img 
        src="src\assets\brasao.png" 
        alt="Brasão da Prefeitura Municipal de Bom Jardim" 
        className="w-24"
        />
         <div className="text-center">
          <h1 className="text-5xl font-[Cinzel] tracking-[0.35em] uppercase">
            Diário Oficial
          </h1>
      </div>
        <div className="w-24" />
        </div>
    </header>
  );
}