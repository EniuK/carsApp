import React from "react"
import { TouchableHighlight } from "react-native"

const Touchable = ({ children, onPress }) => {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
}

export default Touchable
