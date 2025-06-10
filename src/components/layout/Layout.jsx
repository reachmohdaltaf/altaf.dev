import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Navbar should be on top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      <div className="flex pt-20 flex-grow relative z-10">
        {/* Sidebar - only visible on large screens */}
        <div className="lg:flex hidden w-64 fixed top-20 left-0 z-30 h-full">
          <Sidebar />
        </div>
        
        {/* Main content area */}
        <main className="flex-1 lg:ml-64 max-w-screen-2xl py-2 mx-auto md:px-38 px-2 pb-16">
          <Outlet />
        </main>
      </div>
      
      {/* Footer */}
      <div className="relative z-20 w-full">
        <div className="lg:ml-64 mb-10">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout