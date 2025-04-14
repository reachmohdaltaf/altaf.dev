import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import TechBlogs from './pages/TechBlogs'
import ProjectArticle from './pages/ProjectArticle'
import Aboutme from './pages/Aboutme'
import NewsLetter from './pages/NewsLetter'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Aboutme />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/tech/:slug" element={<TechBlogs />} />
          <Route path="/projects/:id" element={<ProjectArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
