class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._form = $(".form");

    this._listaNegociacoes = new ListaNegociacoes();
    this._viewNegociacoes = new ViewNegociacoes($('#negociacoesView'));
    this._viewNegociacoes.update(this._listaNegociacoes);
  }

  adiciona(event) {

    event.preventDefault();

    let novaNegociacao = this.criaNegociacao();
    this._listaNegociacoes.adiciona(novaNegociacao);

    this._viewNegociacoes.update(this._listaNegociacoes);
    this.limpaFormulario();

    console.log(this._listaNegociacoes);
  }

  criaNegociacao() {

    let negociacao = new Negociacao(
      DateHelper.textoParaDate(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    return negociacao;
  }

  limpaFormulario() {
    this._form.reset();

    this._inputData.focus();
  }
}
