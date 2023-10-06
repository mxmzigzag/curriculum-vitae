export interface IPortfolioFilterBarProps {
  filterKey: string;
  setFilterKey: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPortfolioGridProps {
  data: any[];
}
