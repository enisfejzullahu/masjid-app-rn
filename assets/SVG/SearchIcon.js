import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SearchIcon = (props) => (
  <Svg
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="m22.673 22.68 8.911 9.149"
    />
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M14.707 25.753c6.236 0 11.291-5.055 11.291-11.291 0-6.236-5.055-11.291-11.291-11.291-6.236 0-11.291 5.055-11.291 11.291 0 6.236 5.055 11.291 11.291 11.291Z"
    />
  </Svg>
)
export default SearchIcon
