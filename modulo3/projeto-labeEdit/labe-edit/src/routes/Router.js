import React from 'react'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import PostPage from '../pages/PostPage'
import RegistrationPage from '../pages/RegistrationPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'

 const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route path='/Postes/:id' element={<PostPage />} />
        <Route exact path='/Publicações' element={<FeedPage />}/>
        <Route path=':number' element={<FeedPage />}/>
        <Route path='/Registro' element={<RegistrationPage />} />
        <Route path='*' element={< ErrorPage />} />
    </Routes>
    </BrowserRouter> 
  )
}

export default Router
