export interface IToyCard {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean
}

export interface IRender {
  render: () => string;
}

export type Callback<T> = (data?: T) => void;

