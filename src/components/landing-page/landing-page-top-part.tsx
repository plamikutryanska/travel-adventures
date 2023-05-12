import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import selectedTabSlice from "../../data/selectedTabSlice";
import styles from "./landing-page.module.scss";
import chicago from "../../images/countries/usa/chicago1.jpeg";

const LandingPageTopPart: FC = () => {
  const { goToSelectedTab } = selectedTabSlice.actions;
  const dispatch = useDispatch();
  return (
    <div className={styles.landingPageWrapper}>
      <Image
        src={chicago}
        alt={"image of Chicago"}
        className={styles.landingPageShape}
      />
      <div className={styles.textBlock}>
        {"the footsteps of a curious mind"}
      </div>
      <div className={styles.smallerText}>
        {"a digital collection of travel memories"}
      </div>
      <Link
        href={"/gallery"}
        className={styles.viewGalleryButton}
        onClick={() => dispatch(goToSelectedTab("/gallery"))}>
        {"view gallery"}
      </Link>
    </div>
  );
};

export default LandingPageTopPart;
