import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg width={24} height={22} viewBox="0 0 22 23" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 11c0-6.075-4.925-11-11-11S0 4.925 0 11s4.925 11 11 11c1.326 0 3.148-.484 5.465-1.451l3.746 1.461.111.037a1 1 0 001.224-1.204l-1.044-4.297.17-.41C21.559 13.982 22 12.27 22 11zm-2.729 4.6l-.345.817.936 3.847-3.417-1.333-.933.387C13.544 20.112 12.024 20.5 11 20.5a9.5 9.5 0 119.5-9.5c0 1.046-.403 2.595-1.229 4.6z"
        fill="#383838"
      />
    </Svg>
  );
}

export default SvgComponent;
