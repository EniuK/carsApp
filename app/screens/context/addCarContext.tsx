import React, { createContext, useState } from "react"

// Tworzenie kontekstu
export const AddCarContext = createContext({})

// Komponent dostawcy kontekstu
export const AddCarProvider = ({ children }) => {
  // Stan aplikacji

  const [collections, setCollections] = useState([])

  return (
    <AddCarContext.Provider
      value={{
        collections,
        setCollections,
      }}
    >
      {children}
    </AddCarContext.Provider>
  )
}
