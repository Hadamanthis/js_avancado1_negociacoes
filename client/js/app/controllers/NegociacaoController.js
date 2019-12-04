class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

  }

  adiciona(event) {
    event.preventDefault();

    let novaNegociacao = this.criaNegociacao();
  }

  criaNegociacao() {
    // Criando um objeto Date
    let data = new Date(this._inputData.value.split("-"));

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    return negociacao;
  }
}
