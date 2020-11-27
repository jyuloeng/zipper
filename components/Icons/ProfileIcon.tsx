import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
      <Path
        d="M23.334 24.5v-2.333a4.667 4.667 0 00-4.667-4.667H9.334a4.667 4.667 0 00-4.667 4.667V24.5M14 12.833A4.667 4.667 0 1014 3.5a4.667 4.667 0 000 9.333z"
        stroke={props.stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
