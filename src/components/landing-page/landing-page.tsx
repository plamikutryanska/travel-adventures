import { FC, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./landing-page.module.scss";
import stylesv2 from "../../styles/shared-styles.module.scss";
import Postcard from "../post-card/post-card";
import ExploreByDestination from "../explore-by-destination/explore-by-destination";
import chicago from "../../images/countries/usa/chicago1.jpeg";
import GetToKnowMe from "../get-to-know-me/get-to-know-me";

export const LandingPage: FC = () => {
  const [widthAndHeight, setWidthAndHeight] = useState<number>(250);

  useEffect(() => {
    if (window) {
      const widthToUse = window.innerWidth < 950 ? 160 : 200;
      return setWidthAndHeight(widthToUse);
    } else setWidthAndHeight(250);
  }, []);

  return (
    <div className={stylesv2.commonContainer}>
      <div className={styles.landingPageWrapper}>
        <Image
          src={chicago}
          alt={"image of Chicago"}
          className={styles.landingPageShapeV2}
        />
        <div className={styles.textBlock}>
          {"the footsteps of a curious mind"}
        </div>
        <div className={styles.smallerText}>
          {"a digital collection of travel memories"}
        </div>
        <button className={styles.viewGalleryButton}>{"view gallery"}</button>
      </div>

      <GetToKnowMe />
      <Postcard />
      <ExploreByDestination />
    </div>
  );
};
