export function Cabecalho() {
  return (
    <header 
      className="bg-blue-600 p-5 text-white flex justify-between items-center"
      role="banner"
    >
      <img 
        src="src\assets\brasao.png" 
        alt="Brasão da Prefeitura Municipal de Bom Jardim" 
        className="w-30 h-30"
      />
      <h1 className="text-5xl font-bold uppercase text-center">
        Diário Oficial
      </h1>
      <div className="w-12" aria-hidden="true"></div>
    </header>
  );
}