import { FC, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./post-card.module.scss";
import travelStamp from "../../images/TRAVELSTAMP.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import plovdiv from "../../images/plovdivRomanTheater.jpg";
import velikoTarnovo from "../../images/velikoTarnovo.jpeg";
import bezbogHut from "../../images/bezBogHut.jpg";

const handleDragStart = (e: any) => e.preventDefault();

export const getCarouselImages = (imageList: Record<string, any>[]) => {
  return imageList.map((image, index) => {
    return (
      <Image
        src={image.src}
        alt={`carousel image - ${index}`}
        onDragStart={handleDragStart}
        role='presentation'
        className={styles.imageInCarousel}
        key={index}
      />
    );
  });
};

type ImageLocations = "Plovdiv" | "Veliko Tarnovo" | "Bezbog Hut";

const Postcard: FC = () => {
  const slideNumberToLocation: Record<number, ImageLocations> = {
    0: "Plovdiv",
    1: "Veliko Tarnovo",
    2: "Bezbog Hut",
  };

  const [imageIndex, setImageIndex] = useState<number>(0);
  const [placeLocation, setPlaceLocation] = useState<ImageLocations>(
    slideNumberToLocation[imageIndex]
  );

  useEffect(() => {
    setPlaceLocation(slideNumberToLocation[imageIndex]);
  }, [imageIndex]);

  return (
    <div className={styles.postCardContainer}>
      <div className={styles.leftSide}>
        <Image
          src={travelStamp}
          alt={"Travel Stamp Image"}
          className={styles.stamp}
        />
        <div style={{ marginTop: "-12px" }}>
          <div className={styles.greeting}>{"Hello"}</div>
          <div className={styles.otherText}>{"from beautiful"}</div>
          <div className={styles.location}>{placeLocation}</div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.innerContainer}>
          <AliceCarousel
            autoPlay
            autoPlayInterval={5000}
            infinite
            disableDotsControls
            disableButtonsControls
            activeIndex={imageIndex}
            onSlideChanged={(e) => {
              setImageIndex(e.slide);
            }}
            items={getCarouselImages([
              { src: plovdiv },
              { src: velikoTarnovo },
              { src: bezbogHut },
            ])}
          />
        </div>
      </div>
    </div>
  );
};

export default Postcard;
