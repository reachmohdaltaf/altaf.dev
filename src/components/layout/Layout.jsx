import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Navbar should be on top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="flex pt-20 relative z-10">
        {/* Sidebar - only visible on large screens */}
        <div className="lg:flex hidden w-64 fixed top-20 left-0 z-30 h-full">
          <Sidebar />
        </div>

        {/* Main content area */}
        <main className="flex-1 lg:ml-64  p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
