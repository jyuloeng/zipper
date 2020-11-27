import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgComponent(props: any) {
  const { fill } = props;

  return (
    <Svg width={26} height={26} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 5.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM8.762 12.81a4.75 4.75 0 00-2.42 3.263c-.092.46-.092.994-.092 1.832v1.43c0 .708.431 1.345 1.09 1.609a12.549 12.549 0 009.32 0c.659-.264 1.09-.901 1.09-1.61v-1.43c0-.837 0-1.37-.091-1.83a4.75 4.75 0 00-2.421-3.264A4.98 4.98 0 0112 14a4.98 4.98 0 01-3.238-1.19z"
        fill={fill || "#327feb"}
      />
    </Svg>
  );
}

export default SvgComponent;
