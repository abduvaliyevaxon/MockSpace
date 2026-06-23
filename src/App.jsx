import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    {/*Header start*/}
    <header className="w-full bg-[#020617] ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center  justify-between h-20 ">

          {/*Logo*/}
          <div className="flex items-center gap-2">
            <img src="https://www.mockspace.uz/logo.png" className="w-10 h-10"/>
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



    {/*Hero section-1  start*/}
    <div className='bg-[#030711] min-h-screen'>
      <div className='max-w-5xl mx-auto min-h-screen flex flex-col justify-center items-center text-center'>
        
        <div className='inline-flex items-center gap-3 px-12 py-3 rounded-full bg-[#0D1526]'>
          <div className='w-3 h-3 rounded-full bg-[#22C55E]'></div>
          <span className='text-white font-semibold '>AI bilan ishlaydigan test platformasi</span>
        </div><br />

        <div>
          <h1 className="text-white font-bold text-8xl">Haqiqiy imtihonga<br />
            <span className="text-[#22C55E]">tayyorlan</span>
          </h1><br /><br />

          <p className='text-[#7F8EA3] text-3xl leading-11'>IELTS, CEFR va DTM fanlaridan <span className='text-[#22C55E]'>AI texnologiyasi</span> yordamida mock <br /> testlar yeching. Natijalaringiz <span className='text-[#994BE7]'>bir zumda</span> tayyor!</p> 

          <button className='mt-10 px-10 py-4 bg-[#22C55E] rounded-full text-black text-2xl font-semibold'>Bepul boshlash →</button>
        </div>
      
      </div>
    </div>
    {/*Hero section-1  end*/}
    </>
  )
}

export default App
