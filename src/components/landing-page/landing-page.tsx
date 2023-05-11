import { FC, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./landing-page.module.scss";
import stylesv2 from "../../styles/shared-styles.module.scss";
import Postcard from "../post-card/post-card";
import ExploreByDestination from "../explore-by-destination/explore-by-destination";
import footstepsLogo from "../../images/logo.png";
import chicago from "../../images/countries/usa/chicago1.jpeg";

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
      </div>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{"get to know me"}</div>
      </div>
      <div className={styles.aboutMeSection}>
        <div className={styles.border}>
          <div className={styles.left}>
            <div className={styles.leftInnerContainer}>{"left"}</div>
          </div>
          <div className={styles.right}>{"right"}</div>
        </div>
      </div>
      <Postcard />
      <ExploreByDestination />
    </div>
  );
};
