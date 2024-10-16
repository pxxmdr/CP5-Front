export interface WeatherProps {
  data: string;
  condicao: string;
  condicao_desc: string;
  min: number;
  max: number;
  indice_uv: number;
}

export interface City {
  cidade: string;
  estado: string;
  atualizado_em: string;
  clima: WeatherProps[];
}

export interface CityListProps {
  id: number;
  nome: string;
  estado: string;
}
