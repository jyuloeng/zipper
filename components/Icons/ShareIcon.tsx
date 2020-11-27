import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg width={24} height={22} viewBox="0 0 24 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.123 1.129L12.437 19.382a.75.75 0 01-1.371-.184L8.316 8.942l-.023-.032a.756.756 0 01-.052-.109l-7.52-7.52A.75.75 0 011.251 0h21.224c.58 0 .94.629.648 1.129zm-2.7 1.643L9.85 8.876l2.199 8.2 8.372-14.304zM3.062 1.5h16.564L9.125 7.562 3.062 1.5z"
        fill="#383838"
      />
    </Svg>
  );
}

export default SvgComponent;
