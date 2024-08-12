export interface Country {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
}

export interface Params {
  params: {
    name: string;
  };
}

export interface SearchableListProps {
  countries: Country[];
}

export interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface InfoItem {
  title: string;
  description: string;
}

export interface CardProps {
  img: string;
  name: string;
  info?: InfoItem[];
  onClick: () => void;
}
