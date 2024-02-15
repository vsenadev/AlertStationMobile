export interface ITrainsSituations {
  trains: IInfo[];
}

export interface IInfo {
  _id: string;
  codigo: number;
  id: number;
  situacao: string;
}
