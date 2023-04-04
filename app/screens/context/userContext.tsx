import React, { createContext, useEffect, useState } from "react"

// Tworzenie kontekstu
export const AppContext = createContext({})

// Komponent dostawcy kontekstu
export const AppProvider = ({ children }) => {
  // Stan aplikacji

  // instancja usera uzyta by nie wywolywalo bledu. po zakonczeniu pracy nad wyborem kolekcji zostanie to usuniete
  const backupUser = {
    id: "1680615194110",
    name: "121212",
    email: "Wwww@wp.pl",
    premium: false,
    blocked: false,
    password: "123",
    status: "active",
    dateOfJoining: "2023-04-04",
  }

  const [users, setUsers] = useState({})
  useEffect(() => {
    setUsers(backupUser)
  }, [])
  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
