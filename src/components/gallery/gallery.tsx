import { FC } from "react";
import styles from "../gallery/gallery.module.scss";
import { SimplePhotoFrame } from "../shared/photo-frame/simple-photo-frame";
import plovdiv from "../../images/plovdivRomanTheater.jpg";
import thasos from "../../images/countries/greece/thasos2.jpeg";
import chicago from "../../images/countries/usa/chicago1.jpeg";
import galata from "../../images/countries/turkey/galata1.jpg";

type ListOfCountriesAndPics = {
  albumCover: string | any;
  albumTitle: string;
};

const getAlbumCover = (listOfCountries: ListOfCountriesAndPics[]) => {
  return listOfCountries.map((country) => {
    return (
      <div
        style={{ display: "flex", flexDirection: "row" }}
        key={country.albumTitle}>
        <SimplePhotoFrame
          imageSrc={country.albumCover}
          imagetitle={country.albumTitle}
        />
      </div>
    );
  });
};

const availableCountries = [
  { albumCover: plovdiv, albumTitle: "Bulgaria" },
  { albumCover: thasos, albumTitle: "Greece" },
  { albumCover: galata, albumTitle: "Turkey" },
  { albumCover: chicago, albumTitle: "USA" },
];

const Gallery: FC = () => {
  return (
    <div className={styles.galleryPageWrapper}>
      <div className={styles.funShape} />
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{"explore by country"}</div>
      </div>
      <div className={styles.countryAlbumsWrapper}>
        {getAlbumCover(availableCountries)}
      </div>
      <div className={styles.halfCircleSide} />
    </div>
  );
};

export default Gallery;
