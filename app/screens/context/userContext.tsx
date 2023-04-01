import React, { createContext, useState } from "react"

// Tworzenie kontekstu
export const AppContext = createContext({})

// Komponent dostawcy kontekstu
export const AppProvider = ({ children }) => {
  // Stan aplikacji

  // Przechowuje tylko usera oraz dane niezbedne do autoryzacji tzn token JWT
  const [users, setUsers] = useState([])
  const [elements, setElements] = useState([])
  const [collections, setCollections] = useState([])
  const [articles, setArticles] = useState([])

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        elements,
        setElements,
        collections,
        setCollections,
        articles,
        setArticles,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
