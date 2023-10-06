export interface IHistoryLogData {
  id: string;
  time: string;
  title: string;
  subtitle: string;
  body?: string;
}

export interface IHistoryLogProps {
  data: IHistoryLogData[];
}
