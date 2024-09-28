import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={25}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#06A85D"
        d="M23.515 20.04c-7.113 0-12.886-5.667-12.886-12.651 0-2.758.902-5.314 2.448-7.389C7.304 1.265 3 6.3 3 12.348 3 19.332 8.773 25 15.887 25c4.304 0 8.118-2.075 10.438-5.263-.902.202-1.856.304-2.81.304Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
