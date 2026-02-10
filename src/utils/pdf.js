export class PDF {
  constructor(titulo, descricao, url, textoExtraido, edicao, data) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.descricao = descricao;
    this.url = url;
    this.textoExtraido = textoExtraido;

    this.edicao = edicao; // ex: "Edição 1234"
    this.data = data;     // ISO string
    this.createdAt = new Date().toISOString();
  }
}
