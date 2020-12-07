import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={78} height={78} viewBox="0 0 78 78" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 5.442C20.466 5.442 5.442 20.466 5.442 39S20.466 72.558 39 72.558 72.558 57.534 72.558 39 57.534 5.442 39 5.442zM0 39C0 17.46 17.46 0 39 0s39 17.46 39 39-17.46 39-39 39S0 60.54 0 39z"
        fill="#FE2D3F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.808 26.192a2.72 2.72 0 010 3.848L30.04 51.808a2.72 2.72 0 11-3.848-3.848L47.96 26.192a2.721 2.721 0 013.848 0z"
        fill="#FE2D3F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.192 26.192a2.721 2.721 0 013.848 0L51.808 47.96a2.72 2.72 0 11-3.848 3.848L26.192 30.04a2.721 2.721 0 010-3.848z"
        fill="#FE2D3F"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
