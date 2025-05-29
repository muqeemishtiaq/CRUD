import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-400 p-4 text-3xl flex justify-center items-center font-bold">
        <h1>Cake Brand</h1>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default Layout

