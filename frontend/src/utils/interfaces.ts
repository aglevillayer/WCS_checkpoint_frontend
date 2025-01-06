export interface ICountry {
  id: string;
  name: string;
  code: string;
  emoji: string;
  continent: IContinent;
}

export interface IContinent {
  id: string;
  name: string;
}
