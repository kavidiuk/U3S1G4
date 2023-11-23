// class Abbigliamento {
//   id: number;
//   codprod: number;
//   collezione: string;
//   capo: string;
//   modello: number;
//   quantita: number;
//   colore: string;
//   prezzoIvaEsclusa: number;
//   prezzoIvaInclusa: number;
//   disponibile: string;
//   saldo: number;
//   constructor(
//     _id: number,
//     _codprod: number,
//     _collezione: string,
//     _capo: string,
//     _modello: number,
//     _quantita: number,
//     _colore: string,
//     _prezzoIvaEsclusa: number,
//     _prezzoIvaInclusa: number,
//     _disponibile: string,
//     _saldo: number
//   ) {
//     this.id = _id;
//     this.codprod = _codprod;
//     this.collezione = _collezione;
//     this.capo = _capo;
//     this.modello = _modello;
//     this.quantita = _quantita;
//     this.colore = _colore;
//     this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
//     this.prezzoIvaInclusa = _prezzoIvaInclusa;
//     this.disponibile = _disponibile;
//     this.saldo = _saldo;
//   }

//   calcolo() {
//     let getSaldoCapo = (this.prezzoIvaInclusa - this.saldo) / 100;
//     let getacquistocapo = this.prezzoIvaInclusa - getSaldoCapo;
//     return;
//     console.log(getSaldoCapo, getacquistocapo);
//   }
// }
// //let risultato = Abbigliamento.calcolo();

// //https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f
// async function fetchAPI() {
//   const Url = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f";
//   const response = await fetch(Url);
//   const resp = await response.json();
//   return resp;

//   public get prova(id) : Number {
//     return

//   }

// }
// fetchAPI().then(console.log);

class Abbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoIvaEsclusa: number;
  prezzoIvaInclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    _id: number,
    _codprod: number,
    _collezione: string,
    _capo: string,
    _modello: number,
    _quantita: number,
    _colore: string,
    _prezzoIvaEsclusa: number,
    _prezzoIvaInclusa: number,
    _disponibile: string,
    _saldo: number
  ) {
    this.id = _id;
    this.codprod = _codprod;
    this.collezione = _collezione;
    this.capo = _capo;
    this.modello = _modello;
    this.quantita = _quantita;
    this.colore = _colore;
    this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
    this.prezzoIvaInclusa = _prezzoIvaInclusa;
    this.disponibile = _disponibile;
    this.saldo = _saldo;
  }

  calcolo() {
    let getSaldoCapo = (this.prezzoIvaInclusa - this.saldo) / 100;
    let getacquistocapo = this.prezzoIvaInclusa - getSaldoCapo;
    console.log("Dati dell'abbigliamento:", this);
    console.log("getAcquistoCapo:", getacquistocapo);
  }
}

async function fetchAPI() {
  const Url = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f";
  const response = await fetch(Url);
  const resp = await response.json();
  return resp;
}

async function elaboraDati() {
  try {
    const datiApi = await fetchAPI();

    const listaAbbigliamento = datiApi.map(
      (item: any) =>
        new Abbigliamento(
          item.id,
          item.codprod,
          item.collezione,
          item.capo,
          item.modello,
          item.quantita,
          item.colore,
          item.prezzoivaesclusa,
          item.prezzoivainclusa,
          item.disponibile,
          item.saldo
        )
    );

    listaAbbigliamento.forEach((abbigliamento) => abbigliamento.calcolo());
  } catch (error) {
    console.error("Errore durante l'elaborazione dei dati:", error);
  }
}

let risultato = elaboraDati();
