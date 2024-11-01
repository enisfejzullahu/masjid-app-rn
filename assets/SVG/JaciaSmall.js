import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const JaciaSmall = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#06A85D" clipPath="url(#a)">
      <Path d="M19.85 19.239c-6.849 0-12.407-5.441-12.407-12.146C7.443 4.445 8.31 1.992 9.8 0 4.241 1.215.097 6.049.097 11.854.097 18.56 5.656 24 12.505 24c4.144 0 7.817-1.992 10.05-5.053-.868.195-1.787.292-2.705.292Z" />
      <Path d="M22.158 8.6c-2.308.63-2.829 1.14-3.474 3.4-.645-2.26-1.166-2.77-3.474-3.4 2.308-.632 2.829-1.142 3.474-3.402.645 2.26 1.166 2.77 3.474 3.401ZM24.168 2.138c-1.315.364-1.613.656-1.985 1.943-.372-1.287-.67-1.579-1.985-1.943 1.315-.365 1.613-.656 1.985-1.944.372 1.288.67 1.58 1.985 1.944Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.097 0h24.071v24H.098z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default JaciaSmall
