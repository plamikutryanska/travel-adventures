import { FC } from "react";
import Link from "next/link";
import style from "./simple-photo-frame.module.scss";
import Image from "next/image";

export const SimplePhotoFrame: FC<{
  imageSrc: string | any;
  imagetitle: string;
}> = ({ imageSrc, imagetitle }) => {
  return (
    <Link href={`gallery/${imagetitle}`}>
      <div className={style.photoFrame}>
        <div className={style.innerPhotoSection}>
          <Image
            src={imageSrc}
            alt={`${imagetitle} image`}
            height={280}
            width={260}
            style={{ marginTop: "12px" }}
          />
        </div>
        <div className={style.photoLable}>{imagetitle}</div>
      </div>
    </Link>
  );
};
