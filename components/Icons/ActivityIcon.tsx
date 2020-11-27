import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
      <Path
        d="M4.666 4.667h18.667A2.34 2.34 0 0125.666 7v14a2.34 2.34 0 01-2.333 2.333H4.666A2.34 2.34 0 012.333 21V7a2.34 2.34 0 012.333-2.333z"
        stroke={props.stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.666 7L14 15.167 2.333 7"
        stroke={props.stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
