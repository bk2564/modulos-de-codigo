export class PDF {
  constructor(titulo, descricao, url, textoExtraido, edicao, data, mes, ano) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.descricao = descricao;
    this.url = url;
    this.textoExtraido = textoExtraido;
    this.mes = mes
    this.ano = ano
    this.edicao = edicao; // ex: "Edição 1234"
    this.data = data;     // ISO string
    this.createdAt = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }) + ' UTC').toISOString();
  }
}
