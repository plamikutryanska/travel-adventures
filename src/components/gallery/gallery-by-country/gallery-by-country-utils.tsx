import { DataResponse, Photo } from "../../../data/data-source-types";
import Image from "next/image";

export type PhotoFilters = "show all" | "food" | "nature";

export const getPhotosFromCountry = (
  dataResponse: DataResponse,
  selectedCountry: string
) => {
  return dataResponse.data.countries.find(
    (country) => country.name === selectedCountry
  );
};

export const getPicturesFromCity = (
  countryPhotos: Photo[],
  selectedFilter: PhotoFilters
) => {
  const filteredPhotos = countryPhotos.filter(
    (photo) => photo.category === selectedFilter
  );

  const cityPhotosToDisplay =
    selectedFilter === "show all" ? countryPhotos : filteredPhotos;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
      {cityPhotosToDisplay.map((photo) => {
        return (
          <div style={{ margin: "8px" }} key={photo.id}>
            <Image
              src={photo.image}
              alt={`image of ${photo.category}`}
              key={photo.id}
              height={320}
              width={240}
            />
          </div>
        );
      })}
    </div>
  );
};
