export type CardProps = {
  name: string;
  abv: string;
  price: string;
  tvl: string;
  lossgain: number;
  image: string;
  currency?: string;
  popularPairs?: Array<Partial<CardProps>>,
}

export type IconProps = {
  size: number;
  color?: string;
}