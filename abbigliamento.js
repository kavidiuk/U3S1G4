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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoIvaEsclusa, _prezzoIvaInclusa, _disponibile, _saldo) {
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
    Abbigliamento.prototype.calcolo = function () {
        var getSaldoCapo = (this.prezzoIvaInclusa - this.saldo) / 100;
        var getacquistocapo = this.prezzoIvaInclusa - getSaldoCapo;
        console.log("Dati dell'abbigliamento:", this);
        console.log("getAcquistoCapo:", getacquistocapo);
    };
    return Abbigliamento;
}());
function fetchAPI() {
    return __awaiter(this, void 0, void 0, function () {
        var Url, response, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Url = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f";
                    return [4 /*yield*/, fetch(Url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    resp = _a.sent();
                    return [2 /*return*/, resp];
            }
        });
    });
}
function elaboraDati() {
    return __awaiter(this, void 0, void 0, function () {
        var datiApi, listaAbbigliamento, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchAPI()];
                case 1:
                    datiApi = _a.sent();
                    listaAbbigliamento = datiApi.map(function (item) {
                        return new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
                    });
                    listaAbbigliamento.forEach(function (abbigliamento) { return abbigliamento.calcolo(); });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Errore durante l'elaborazione dei dati:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var risultato = elaboraDati();
