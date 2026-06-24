import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    {/*Header start*/}
    <header className="w-full bg-[#020617] ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center  justify-between h-20">

          {/*Logo*/}
          <div className="flex items-center gap-2">
            <img src="https://www.mockspace.uz/logo.png" className="w-10 h-10"/>
            <span className="text-white text-2xl font-bold">MockSpace</span>
          </div>


          {/*Navbar*/}
          <nav className="flex items-center gap-8">
            <a className="text-gray-500 hover:text-white text-xl" href="#">Imkoniyatlar</a>

            <a className="text-gray-500 hover:text-white text-xl" href="#">Fanlar</a>

            <a className="text-gray-500 hover:text-white text-xl" href="#">Tariflar</a>

            <a className="text-gray-500 hover:text-white text-xl" href="#">Jamoa</a>

            <a className="text-gray-500 hover:text-white text-xl" href="#">FAQ</a>
          </nav>


          {/*O`ng tomon start*/}
          <div className="flex items-center gap-6">
            <button className="text-gray-500 hover:text-white text-xl">uz</button>

            <button className="text-gray-500 hover:text-white">🌙</button>

            <button className="px-5 py-2 rounded-full bg-[#1FB156] text-black  text-xl">Boshlash</button>
          </div>
          {/*O`ng tomon end*/}

        </div>
      </div>
    </header>
    {/*Header end*/}



    {/*Hero section-1  start*/}
    <div className='bg-[#030711] h-210'>
      <div className='max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center text-center mt-[-35px]'>
        
        <div className='inline-flex items-center gap-3 px-12 py-3 rounded-full bg-[#0D1526]'>
          <div className='w-3 h-3 rounded-full bg-[#22C55E]'></div>
          <span className='text-white font-semibold '>AI bilan ishlaydigan test platformasi</span>
        </div><br />

        <div>
          <h1 className="text-white font-bold text-7xl">Haqiqiy imtihonga<br />
            <span className="text-[#22C55E]">tayyorlan</span>
          </h1><br /><br />

          <p className='text-[#7F8EA3] text-2xl leading-11'>IELTS, CEFR va DTM fanlaridan <span className='text-[#22C55E]'>AI texnologiyasi</span> yordamida mock <br /> testlar yeching. Natijalaringiz <span className='text-[#994BE7]'>bir zumda</span> tayyor!</p> 

          <button className='mt-10 px-8 py-2 bg-[#22C55E] rounded-full text-black text-xl '>Bepul boshlash →</button>
        </div>
      
      </div>
    </div>
    {/*Hero section-1  end*/}


    {/*Hero section-2 start*/}
    <div className='bg-[#051014] p-24'>
      <div className='max-w-7xl mx-auto px-6'>
        {/*Nima uchun MockSpace? ---qismi*/}
        <div className="text-center"><span className="inline-block px-4 py-2 text-[#22C55E] border border-[#0A2C20] rounded-full mt-16">
            Imkoniyatlar
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Nima uchun <span className="text-[#22C55E]">MockSpace</span>?
          </h2>

          <p className="mt-6 text-xl text-[#7F8EA3]">
            Haqiqiy imtihon muhitida mashq qiling va AI yordamida o'z
            darajangizni bilib oling
          </p>
        </div>

        {/*Cards start*/}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>

          {/*Card-1*/}
          <div className='bg-[#0B1220] border border-[#1E293B] rounded-3xl p-8'>
            <div className="w-20 h-20 bg-[#22C55E] rounded-3xl flex items-center justify-center text-3xl mb-6">
              💡
            </div>

            <h3  className="text-white text-3xl font-bold mb-4">AI texnologiyasi</h3>

            <p className="text-[#94A3B8] text-lg leading-8">
              Sun'iy intellekt yordamida speaking, writing va boshqa
              bo'limlar avtomatik tekshiriladi. Aniq va tezkor natijalar!
            </p> 
          </div>

          {/*Card-2*/}
          <div className='bg-[#0B1220] border border-[#1E293B] rounded-3xl p-8'>
            <div className="w-20 h-20 bg-[#994BE7] rounded-3xl flex items-center justify-center text-3xl mb-6">
              ⏰
            </div>

            <h3 className="text-white text-3xl font-bold mb-4">Bir Zumda Natija</h3>

            <p className="text-[#94A3B8] text-lg leading-8">
              Testni tugatganingiz zahoti natijalaringiz tayyor.
              Kutish yo'q, vaqtingizni tejang!
            </p> 
          </div>

          {/*Card-3*/}
          <div className='bg-[#0B1220] border border-[#1E293B] rounded-3xl p-8'>
            <div className="w-20 h-20 bg-[#22C55E] rounded-3xl flex items-center justify-center text-3xl mb-6">
              🛡️
            </div>

            <h3 className="text-white text-3xl font-bold mb-4">Haqiqiy Imtihon Muhiti</h3>

            <p className="text-[#94A3B8] text-lg leading-8">
              IELTS, CEFR va DTM imtihonlariga o'xshash muhit.
              Haqiqiy imtihonga to'liq tayyorgarlik!
            </p> 
          </div>

          {/*Card-4*/}
          <div className='bg-[#0B1220] border border-[#1E293B] rounded-3xl p-8'>
            <div className="w-20 h-20 bg-[#994BE7] rounded-3xl flex items-center justify-center text-3xl mb-6">
              🎤
            </div>

            <h3 className="text-white text-3xl font-bold mb-4">Speaking Test</h3>

            <p className="text-[#94A3B8] text-lg leading-8">
              IELTS speaking bo'limini AI bilan mashq qiling.
              Pronunciation, fluency va grammar baholanadi.
            </p> 
          </div>

          {/*Card-5*/}
          <div className='bg-[#0B1220] border border-[#1E293B] rounded-3xl p-8'>
            <div className="w-20 h-20 bg-[#22C55E] rounded-3xl flex items-center justify-center text-3xl mb-6">
              ✏️
            </div>

            <h3 className="text-white text-3xl font-bold mb-4">Writing Test</h3>

            <p className="text-[#94A3B8] text-lg leading-8">
              Essay va task yozishni mashq qiling.
              AI grammar, vocabulary va coherence ni tekshiradi.
            </p> 
          </div>

          {/*Card-6*/}
          <div className='bg-[#0B1220] border border-[#1E293B] rounded-3xl p-8'>
            <div className="w-20 h-20 bg-[#994BE7] rounded-3xl flex items-center justify-center text-3xl mb-6">
              📊
            </div>

            <h3 className="text-white text-3xl font-bold mb-4">Batafsil Tahlil</h3>

            <p className="text-[#94A3B8] text-lg leading-8">
              Har bir javobingiz tahlil qilinadi.
              Kuchli va zaif tomonlaringizni bilib oling.
            </p> 
          </div>
        </div>
        {/*Cards end*/}
        
      </div>
    </div>
    {/*Hero section-2 end*/}


    {/*Hero section-3 start*/}
    <div className='bg-[#030711] p-24'>
      <div className='max-w-7xl mx-auto px-6'>

        <div className='text-center'>
          <span className='inline-block px-4 py-0 rounded-full border border-[#2f1548] text-[#994BE7] font-semibold '>Fanlar</span>
          <h2 className="mt-6 text-5xl font-bold text-white">Qaysi fanlardan <span className='text-[#994BE7]'>test</span>?</h2>
          <p className='mt-5 text-xl text-[#758397]'>Ingliz tili imtihonlaridan DTM fanlarigacha - barchasi bir joyda</p>
        </div>

        {/*English exams*/}
        <div className='mt-20'>
          
          <div className='flex items-center gap-4 mb-8'>
            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white text-xl">🌐</div>

            <h3 className='text-3xl font-bold text-white'>Ingliz Tili Imtihonlari</h3>
          </div>

          <div className='grid md:grid-cols-2  gap-8'>
            {/*IELTS start*/}
            <div className='bg-[#071A18] border border-[#065924] rounded-3xl p-7 hover:border-[#22C55E]'>
              <div className='flex gap-5'>

                <div className='w-20 h-15 rounded-2xl bg-[#22C55E] flex items-center justify-center text-white text-2xl font-bold'>IE</div>

                <div>
                  <h4 className='text-3xl font-bold text-white mb-3'>IELTS Mock Test</h4>

                  <p className='text-14 text-[#69788B]'>
                    To'liq IELTS imtihoni: Reading, Writing,
                    Listening, Speaking - barchasi AI bilan tekshiriladi
                  </p>

                  <div className="flex flex-wrap gap-3 mt-5">
                    <span className="px-3 py-1 rounded-full bg-[#0B3424] hover:bg-[#0C1526] text-[#22C55E]">Reading</span>

                    <span className="px-3 py-1 rounded-full bg-[#0B3424] hover:bg-[#0C1526] text-[#22C55E]">Writing</span>

                    <span className="px-3 py-1 rounded-full bg-[#0B3424] hover:bg-[#0C1526] text-[#22C55E]">Listening</span>

                    <span className="px-3 py-1 rounded-full bg-[#0B3424] hover:bg-[#0C1526] text-[#22C55E]">Speaking</span>
                  </div>
                </div>

              </div>
            </div>
            {/*IELTS end*/}


            {/*Cefr start*/}

            {/*Cefr end*/}

          </div>


        </div>

      </div>
    </div>
    {/*Hero section-3 end*/}

    </>
  )
}

export default App
