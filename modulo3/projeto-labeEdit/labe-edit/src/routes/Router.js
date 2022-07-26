import React from 'react'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import PostPage from '../pages/PostPage'
import RegistrationPage from '../pages/RegistrationPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Header from '../components/Header'

 const Router = () => {
  return (
    <BrowserRouter>
    < Header />
    <Routes>
        <Route index exact path="/" element={<FeedPage />} />
        <Route path='/Postes/:id' element={<PostPage />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path=':number' element={<FeedPage />}/>
        <Route path='/Registro' element={<RegistrationPage />} />
        <Route path='*' element={< ErrorPage />} />
    </Routes>
    </BrowserRouter> 
  )
}

export default Router
