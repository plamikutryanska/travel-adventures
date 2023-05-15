import { DataResponse, Photo } from "../../../data/data-source-types";
import Image from "next/image";
import styles from "../gallery-by-country/gallery-by-country.module.scss";
import classNames from "classnames";

export type PhotoFilters = "show all" | "food" | "nature" | "city";

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

  const sortedPhotosByDirection = cityPhotosToDisplay.sort((a, b) =>
    b.imagePosition.localeCompare(a.imagePosition)
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
      {sortedPhotosByDirection.map((photo) => {
        return (
          <div
            key={photo.id}
            className={classNames(styles.photoContainer, {
              [styles.vertical]: photo.imagePosition === "vertical",
              [styles.horizontal]: photo.imagePosition === "horizontal",
            })}>
            <Image
              src={photo.image}
              alt={`image of ${photo.category}`}
              key={photo.id}
              className={styles.photo}
              height={photo.imagePosition === "horizontal" ? 300 : 400}
              width={photo.imagePosition === "horizontal" ? 400 : 300}
            />
            <div className={styles.overlay}>{photo.description}</div>
          </div>
        );
      })}
    </div>
  );
};
