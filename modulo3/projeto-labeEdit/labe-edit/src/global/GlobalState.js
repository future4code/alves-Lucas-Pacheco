import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalContext from './GlobalContext'

export const GlobalState = (props) => {
    const Provider = GlobalContext.Provider
    const [stateLike, setStateLike] = useState(false)
    const values = {
     setStateLike,
     stateLike
    }
  return (
    <Provider value={{values}}>
        {props.children}
    </Provider>
  )
  
}
