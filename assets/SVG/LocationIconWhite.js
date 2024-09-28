import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LocationIconWhite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M7.685 9.762C8.971 7.963 10 6.524 10 4.9 10 2.194 7.761 0 5 0S0 2.194 0 4.9c0 1.624 1.029 3.063 2.315 4.862C3.172 10.962 4.143 12.32 5 14c.857-1.68 1.828-3.039 2.685-4.238ZM5 7a2 2 0 1 1 0-4 2 2 0 1 1 0 4Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default LocationIconWhite
