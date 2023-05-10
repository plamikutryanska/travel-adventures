import styles from "../../components/gallery/gallery.module.scss";
import GalleryByCountry from "../../components/gallery/gallery-by-country/gallery-by-country";

const CountryGallery = () => {
  return (
    <div className={styles.galleryPageWrapper}>
      <GalleryByCountry />
    </div>
  );
};

export default CountryGallery;
