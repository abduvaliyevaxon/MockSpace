import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    {/*Header start*/}
    <header className="w-full bg-[#020617] ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center  justify-between h-23">

          {/*Logo*/}
          <div className="flex items-center gap-2">
            <img src="https://www.mockspace.uz/logo.png" className="w-16 h-16"/>
            <span className="text-white text-3xl font-bold">MockSpace</span>
          </div>


          {/*Navbar*/}
          <nav className="flex items-center gap-8">
            <a className="text-[#C9D0D7] hover:text-white text-xl" href="#">Imkoniyatlar</a>

            <a className="text-[#C9D0D7] hover:text-white text-xl" href="#">Fanlar</a>

            <a className="text-[#C9D0D7] hover:text-white text-xl" href="#">Tariflar</a>

            <a className="text-[#C9D0D7] hover:text-white text-xl" href="#">Jamoa</a>

            <a className="text-[#C9D0D7] hover:text-white text-xl" href="#">FAQ</a>
          </nav>


          {/*O`ng tomon start*/}
          <div className="flex items-center gap-6">
            <button className="text-[#C9D0D7] hover:text-white text-2xl">uz</button>

            <button className="text-[#C9D0D7] hover:text-white">🌙</button>

            <button className="px-5 py-2 rounded-full bg-[#1FB156] text-black  text-xl">Boshlash</button>
          </div>
          {/*O`ng tomon end*/}

        </div>
      </div>
    </header>
    {/*Header end*/}

    
    </>
  )
}

export default App
