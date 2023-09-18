export default interface SimulationData {
  potencia: number;
  valorParcela: number;
  valorConta: number;
  condicaoEspecial: string;
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
