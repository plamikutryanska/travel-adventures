import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import backButton from "../../../images/back-arrow.png";
import styles from "../gallery-by-country/gallery-by-country.module.scss";
import { useSelector } from "react-redux";
import dataSource from "../../../data/dataSource.json";
import classNames from "classnames";
import {
  getPhotosFromCountry,
  getPicturesFromCity,
  PhotoFilters,
} from "../gallery-by-country/gallery-by-country-utils";

const GalleryByCountry: FC = () => {
  const { selectedDestination } = useSelector(
    (state: any) => state.destination
  );

  const [selectedPhotoFilter, setSelectedPhotoFilter] =
    useState<PhotoFilters>("show all");

  const availablePhotoFilters: PhotoFilters[] = [
    "show all",
    "food",
    "nature",
    "city",
  ];

  const photosFromCountry = getPhotosFromCountry(
    dataSource,
    selectedDestination
  )?.photos;

  return (
    <div className={styles.galleryByCountry}>
      <Link href={"/gallery"} className={styles.backButton}>
        <Image
          src={backButton}
          alt={"back button - back to explore by country"}
          height={36}
          width={36}
        />
      </Link>
      <div className={styles.innerPageWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{selectedDestination}</div>
        </div>
        <div>
          <div className={styles.filterButtons}>
            {availablePhotoFilters.map((filter) => {
              return (
                <div
                  key={filter}
                  onClick={() => setSelectedPhotoFilter(filter)}
                  className={classNames(styles.filterButton, {
                    [styles.selectedFilter]: selectedPhotoFilter === filter,
                  })}>
                  {filter}
                </div>
              );
            })}
          </div>
          {photosFromCountry &&
            getPicturesFromCity(photosFromCountry, selectedPhotoFilter)}
        </div>
      </div>
    </div>
  );
};

export default GalleryByCountry;
