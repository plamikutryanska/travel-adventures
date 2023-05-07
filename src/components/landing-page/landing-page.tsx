import { FC, useState, useEffect } from "react";
import styles from "./landing-page.module.scss";
import stylesv2 from "../../styles/shared-styles.module.scss";
import Postcard from "../post-card/post-card";

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
        <div className={styles.landingPageShape} />
        <Postcard />
      </div>
    </div>
  );
};
