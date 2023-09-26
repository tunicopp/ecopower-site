export default interface SimulationData {
  potencia: number;
  valorParcela: number;
  valorConta: number;
  condicoesEspeciais: {
    carencia: number;
    condicaoEspecial: string;
    descricao: string;
    parcelas: number;
    valorEntrada: number;
    valorParcela: number;
  }[];
  promocao: string;
  moduloQtd: number;
  moduloModelo: string;
  potenciaUnidade: string;
  geracaoMedia: number;
  geracaoMediaUnidade: string;
  inversores: {
    inversor: number;
    inversorModelo: string;
  }[];
  valorProjeto: number;
}
