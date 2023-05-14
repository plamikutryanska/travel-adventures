import { FC } from "react";
import styles from "./explore-by-destination.module.scss";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { destinationsToPinOnMap } from "./explore-by-destination-utils";
import { useDispatch } from "react-redux";
import destinationSlice from "../../data/destinationSlice";
import selectedTabSlice from "../../data/selectedTabSlice";
import Link from "next/link";

const ExploreByDestination: FC = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  const { goToDestination } = destinationSlice.actions;
  const { goToSelectedTab } = selectedTabSlice.actions;
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>{"explore by destination"}</div>
      </div>
      <ComposableMap>
        <Geographies
          geography={geoUrl}
          fill='#ccd5ae'
          stroke='#a1af72'
          strokeWidth={"0.5px"}>
          {({ geographies }) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  hover: {
                    fill: "#bbc795",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {destinationsToPinOnMap.map(({ name, coordinates, markerOffset }) => (
          <Link
            href={`/gallery/${name}`}
            onClick={() => {
              dispatch(goToSelectedTab("gallery"));
              dispatch(goToDestination(name));
            }}>
            <Marker
              coordinates={coordinates as [number, number]}
              key={name}
              onClick={() => dispatch(goToDestination(name))}>
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
          </Link>
        ))}
      </ComposableMap>
    </>
  );
};

export default ExploreByDestination;
