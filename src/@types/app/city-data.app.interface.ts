export default interface CityDataInterface {
  cityData?: {
    cidade: string;
    uf: string;
    regiao: string;
    contagem: string | number;
    mwp: string | number;
    distribuidora: string;
    NomAgente: string;
    media: string;
    classificacao: string;
  }
}