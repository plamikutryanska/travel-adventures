import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import backButton from "../../../images/back-arrow.png";
import styles from "../gallery-by-country/gallery-by-country.module.scss";

const GalleryByCountry: FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Link href={"/gallery"} className={styles.backButton}>
        <Image
          src={backButton}
          alt={"back button - back to explore by country"}
          height={36}
          width={36}
        />
      </Link>
    </div>
  );
};

export default GalleryByCountry;
