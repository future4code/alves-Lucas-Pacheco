import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalContext from './GlobalContext'

export const GlobalState = (props) => {
    const Provider = GlobalContext.Provider

    const value = {

    }
  return (
    <Provider value={value}>
        {props.children}
    </Provider>
  )
  
}
