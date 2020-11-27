import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg width={24} height={26} viewBox="0 0 24 26" fill="none">
      <Path
        d="M1.5 9.5L12 1.333 22.5 9.5v12.833a2.333 2.333 0 01-2.333 2.334H3.833A2.334 2.334 0 011.5 22.333V9.5z"
        stroke={props.stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
