class ViewNegociacoes {

  constructor(elemento) {
    this._negociacoes = elemento
  }

  _template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
          ${model.negociacoes.map(negociacao =>
            `<tr>
              <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
              <td>${negociacao.volume}</td>
            </tr>`
          ).join()}
        </tbody>

        <tfoot>
          <tr>
            <td colspan='3'></td>
            <td>${model.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0)}</td>
          </tr>
        </tfoot>
      </table>`
  }

  update(model) {
    this._negociacoes.innerHTML = this._template(model);
  }
}
