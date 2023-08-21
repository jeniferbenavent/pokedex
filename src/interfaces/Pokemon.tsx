export interface Pokemon {
  id: number;
  number: number;
  name: string;
  types: [];
  image: string
}

export interface Results{
  name: string;
  url: string;
}

export interface Types{
  type: { 
    name: string
  };
}