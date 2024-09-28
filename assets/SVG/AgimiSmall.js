import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const AgimiSmall = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={17}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#06A85D"
        d="M20.912 11.392H4.085c0-4.417 3.764-8.008 8.406-8.008 4.641 0 8.405 3.59 8.405 8.008h.016Z"
      />
      <Path
        stroke="#06A85D"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={0.7}
        d="M5.744 13.076H19.19M7.418 14.76h10.097M8.998 16.444h6.73M1.66 11.392H.656M3.766 5.259l-.83-.556M9.236 1.462 8.934.556M16.016 1.462l.318-.906M21.502 5.259l.814-.556M23.608 11.392h1.005"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.097 0h25.074v17H.097z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default AgimiSmall
