import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgComponent(props: any) {
  const { fill } = props;
  return (
    <Svg width={26} height={26} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.447 3.394c.359-.12.747-.12 1.106 0l5.29 1.763c.451.15.818.483 1.01.917a10.623 10.623 0 01-4.956 13.816l-1.319.66a1.294 1.294 0 01-1.156 0l-1.32-.66A10.623 10.623 0 015.147 6.074a1.69 1.69 0 011.01-.917l5.29-1.763zm.474 1.423A.25.25 0 0112 4.804V12H5.873a9.085 9.085 0 01.644-5.316.19.19 0 01.114-.104l5.29-1.763zM12 19.162l1.226-.614a9.113 9.113 0 004.9-6.548H12v7.162z"
        fill={fill || "#327feb"}
      />
    </Svg>
  );
}

export default SvgComponent;
