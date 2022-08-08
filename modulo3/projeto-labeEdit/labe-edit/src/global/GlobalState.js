import React, { useState, useEffect } from 'react'
import GlobalContext from './GlobalContext'
import { useGetData } from '../hooks/useGetData'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../routes/cordinator'
import { BASE_URL, HEADER } from '../constants/credentiais'
export const GlobalState = (props) => {
    const Provider = GlobalContext.Provider
   
    
    const values = {
    
   }

  return (
    <Provider value={values}>
        {props.children}
    </Provider>
  )
  
}
