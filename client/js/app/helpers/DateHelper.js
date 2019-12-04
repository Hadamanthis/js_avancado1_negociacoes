class DateHelper {

  constructor() {

    throw new Error("Esta classe não deve ser instanciada.");
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error("Formato da data deve estar no formato aaaa-dd-mm.");

    return new Date(texto.split("-"));
  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
  }

}
