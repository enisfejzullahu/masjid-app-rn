import * as React from "react"
import Svg, { Path, Mask } from "react-native-svg"
const ShareIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#fff" strokeWidth={2} d="M1 13v10h16V13M8.889 13V3" />
    <Mask id="a" fill="#fff">
      <Path d="M2 7.598 8.754 0l6.817 7.67-6.754 7.597L2 7.598Z" />
    </Mask>
    <Path
      fill="#fff"
      d="m8.754 0 1.329-1.495-1.33-1.495-1.328 1.495L8.754 0ZM3.329 9.093l6.753-7.598-2.657-2.99L.671 6.103l2.658 2.99Zm4.096-7.598 6.817 7.669 2.657-2.99-6.817-7.669-2.657 2.99Z"
      mask="url(#a)"
    />
  </Svg>
)
export default ShareIcon
