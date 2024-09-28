import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SearchFilled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="m23.114 23.121 8.911 9.149"
    />
    <Path
      fill="#fff"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M15.148 26.187c6.236 0 11.291-5.055 11.291-11.291 0-6.236-5.055-11.291-11.291-11.291-6.236 0-11.291 5.055-11.291 11.291 0 6.236 5.055 11.291 11.291 11.291Z"
    />
    <Path fill="#fff" d="M15.715 5.432s7.63.756 8.75 8.792l-8.75-8.792Z" />
    <Path
      stroke="#06A85D"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M15.715 5.432s7.63.756 8.75 8.792"
    />
  </Svg>
)
export default SearchFilled
