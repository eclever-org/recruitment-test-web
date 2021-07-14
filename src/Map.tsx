import "mapbox-gl/dist/mapbox-gl.css";

import { Map as _ReactMapboxGl } from "react-mapbox-gl";

const GERMANY_BOUNDS: [[number, number], [number, number]] = [
  [3, 40],
  [16, 56]
];

const ReactMapboxGl = _ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibS10dWFuLXAiLCJhIjoiY2tyMjFxMm84MjdwODJwbzFoajZlN3M3eiJ9.HSqO6xCixXdgmiBMa8wNEg"
});

const Map = ({
  children
}: {
  children?: JSX.Element | JSX.Element[] | Array<JSX.Element | undefined>;
}) => (
  <ReactMapboxGl
    style="mapbox://styles/mapbox/streets-v11"
    fitBounds={GERMANY_BOUNDS}
    containerStyle={{ width: "100%", height: "100%" }}
  >
    {children}
  </ReactMapboxGl>
);

export default Map;
