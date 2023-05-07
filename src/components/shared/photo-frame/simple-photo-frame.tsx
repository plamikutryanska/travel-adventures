import { FC } from "react";
import Image from "next/image";

export const SimplePhotoFrame: FC<{
  imageSrc: string | any;
  imagetitle: string;
}> = ({ imageSrc, imagetitle }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <div
        style={{
          border: "1px solid white",
          boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
          height: "320px",
          width: "280px",
          display: "flex",
          justifyContent: "center",
          margin: "8px",
        }}>
        <Image
          src={imageSrc}
          alt={`${imagetitle} image`}
          height={280}
          width={260}
          style={{ marginTop: "12px" }}
        />
      </div>
      <div
        style={{
          width: "140px",
          height: "40px",
          background: "#f5ebe0",
          fontSize: "12px",
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-24px",
        }}>
        {imagetitle}
      </div>
    </div>
  );
};
