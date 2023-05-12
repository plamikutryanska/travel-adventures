import { FC } from "react";
import styles from "./get-to-know-me.module.scss";
import getToKnowMePhoto from "../../images/about-me-photo.jpeg";
import Image from "next/image";

const GetToKnowMe: FC = () => {
  const getToKnowMeText =
    "Hi, it's P! A Bulgaria native, who ventured to the land of opportunity, the USA, some time ago. I'm a wanderlust enthusiast " +
    "and avid photographer who believes in capturing every breathtaking moment " +
    "with their iPhone camera. When not exploring new places and cultures, you can find me working on my " +
    "front-end web development skills, using my creativity and technical expertise to design beautiful websites." +
    "With a passion for travel and technology, I'm always seeking new adventures and opportunities to combine " +
    "these two passions into one digital memory of my footsteps around the world.";

  return (
    <>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{"get to know me"}</div>
      </div>
      <div className={`${styles.aboutMeSection} ${styles.border}`}>
        <div className={styles.left}>{getToKnowMeText}</div>
        <div className={styles.right}>
          <div className={styles.pictureLabel}>{"Hi, it's me!"}</div>
          <Image
            src={getToKnowMePhoto}
            alt={"a photo of me"}
            className={styles.picture}
          />
        </div>
      </div>
    </>
  );
};

export default GetToKnowMe;
