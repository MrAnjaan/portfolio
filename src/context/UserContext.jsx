import React, { createContext } from 'react'

//Context create krna pdta h
export const DataContext = createContext(); 

const UserContext = ({children}) => {
    const username = "MrAnjaan"
  return (
    <DataContext.Provider value={username}>
        {children}
    </DataContext.Provider>
  )
}

export default UserContext