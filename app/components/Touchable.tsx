import React from "react"
import { TouchableOpacity } from "react-native"

const Touchable = ({ children, onPress, ...rest }) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

export default Touchable
