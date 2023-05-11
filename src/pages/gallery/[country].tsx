import styles from "../../components/gallery/gallery-by-country/gallery-by-country.module.scss";
import GalleryByCountry from "../../components/gallery/gallery-by-country/gallery-by-country";

const CountryGallery = () => {
  return (
    <div className={styles.galleryByCountry}>
      <GalleryByCountry />
    </div>
  );
};

export default CountryGallery;
