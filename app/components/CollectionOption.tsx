import React, { useContext, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { AddCarContext } from "../screens/context/addCarContext"

const OptionSelector = ({ options, onChange }) => {
  const [expanded, setExpanded] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])
  const { setCollections } = useContext(AddCarContext)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const toggleOption = (option) => {
    const isSelected = selectedOptions.includes(option)
    let options = []
    if (isSelected) {
      options = selectedOptions.filter((selectedOption) => selectedOption !== option)
    } else {
      options = [...selectedOptions, option]
    }
    setSelectedOptions(options)
    setCollections(options)
    if (typeof onChange === "function") {
      onChange(options)
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <Text>{expanded ? "Hide options" : "Show options"}</Text>
      </TouchableOpacity>

      {expanded && (
        <View>
          {options.map((option, idx) => (
            <TouchableOpacity key={idx} onPress={() => toggleOption(option)}>
              <Text>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Text>
        Selected options:{" "}
        {selectedOptions.map((e, idx) => (
          <Text key={idx}>{e.name + " "}</Text>
        ))}
      </Text>
    </View>
  )
}

export default OptionSelector
