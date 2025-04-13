import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import TechBlogs from './pages/TechBlogs'
import ProjectArticle from './pages/ProjectArticle'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/tech/:slug" element={<TechBlogs />} />
          <Route path="/projects/:id" element={<ProjectArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
