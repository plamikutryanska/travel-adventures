export type Photo = {
  id: number;
  category: string;
  description: string
  image: string;
};

export type City = {
  id: string;
  name: string;
  photos: Photo[];
};

type Country = {
  id: string;
  name: string;
  photos: Photo[]
  // cities: City[];
};

export type DataResponse = {
  data: {
    countries: Country[];
  };
};