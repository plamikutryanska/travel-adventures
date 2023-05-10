import { FC } from "react";
import styles from "./explore-by-destination.module.scss";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { destinationsToPinOnMap } from "./explore-by-destination-utils";

const ExploreByDestination: FC = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{"explore by destination"}</div>
      </div>
      <ComposableMap>
        <Geographies
          geography={geoUrl}
          fill='#f5ebe0'
          stroke='#ce96a6'
          strokeWidth={"0.5px"}>
          {({ geographies }) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  hover: {
                    fill: "#ce96a6",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {destinationsToPinOnMap.map(({ name, coordinates, markerOffset }) => (
          <Marker
            coordinates={coordinates as [number, number]}
            key={name}
            onClick={() => console.log("in marker ====>")}>
            <g
              fill='none'
              stroke='black'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='translate(-12, -24)'
              className={styles.locationPin}>
              <circle
                cx='12'
                cy='10'
                r='3'
                fill='black'
                className={styles.locationPin}
              />
              <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
            </g>
            <text
              y={markerOffset}
              textAnchor='middle'
              className={styles.tooltip}>
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </>
  );
};

export default ExploreByDestination;
