export default interface CityDataInterface {
  cityData?: {
    cidade: string;
    uf?: string;
    regiao?: string;
    contagem?: string | number;
    mwp?: string | number;
  };
}