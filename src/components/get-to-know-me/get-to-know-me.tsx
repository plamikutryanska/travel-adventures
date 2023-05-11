import { FC } from "react";
import styles from "./get-to-know-me.module.scss";
import getToKnowMePhoto from "../../images/about-me-photo.jpeg";
import Image from "next/image";

const GetToKnowMe: FC = () => {
  return (
    <>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{"get to know me"}</div>
      </div>
      <div className={styles.aboutMeSection}>
        <div className={styles.border}>
          <div className={styles.left}>
            <div>
              {
                "leftc chsdhclnu chdfcrdf frysfashfjsdrcfj lsdrjfcljdascfljadl cfrjfljdfcljadfc fcldjfladjfjf fdslfjdljfldjf fcldsjfoldsj"
              }
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.pictureLabel}>{"Hi, it's me!"}</div>
            <Image
              src={getToKnowMePhoto}
              alt={"a photo of me"}
              height={344}
              width={276}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetToKnowMe;
