import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const IkindiaIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={35}
    fill="none"
    {...props}
  >
    <G stroke="#fff" strokeMiterlimit={10} clipPath="url(#a)">
      <Path
        strokeWidth={1.2}
        d="M38.515 16.666c-1.562 0-2.995.477-4.223 1.247-1.305-5.255-5.912-9.129-11.388-9.129-6.04 0-11.004 4.697-11.67 10.774a6.784 6.784 0 0 0-3.326-.875c-3.865 0-7.012 3.264-7.012 7.27 0 4.008 2.891 7.007 6.551 7.246h31.068c4.401 0 7.984-3.716 7.984-8.28 0-4.565-3.583-8.28-7.984-8.28v.027Z"
      />
      <Path
        strokeLinecap="round"
        strokeWidth={0.7}
        d="m37.414.663-.23 1.593M43.837 4.007l-1.1 1.141M47.139 10.615l-1.536.265M46.064 17.993l-1.382-.717M25.284 7.192l1.382.716M30.325 1.884l.717 1.407"
      />
      <Path
        strokeWidth={0.7}
        d="M41.432 17.25c-.921-.398-1.894-.584-2.943-.584a7.692 7.692 0 0 0-4.223 1.247c-.844-3.344-3.02-6.13-5.911-7.723"
      />
      <Path
        strokeWidth={1.2}
        d="M41.432 17.25a7.776 7.776 0 0 0 1.51-4.645c0-4.272-3.327-7.749-7.447-7.749-3.327 0-6.142 2.256-7.089 5.361"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h47.779v34.127H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default IkindiaIcon