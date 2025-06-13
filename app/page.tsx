'use client'
import Image from 'next/image'
import React,{useState} from 'react'
import ImageUploader from './components/ImageUploader';

export default function Home() {

  const [selectedfile, SetSelectedFile] = useState([]);
  const [Files, SetFiles] = useState([]);


  return (
    <div>
      <div className=' min-h-screen bg-white h-full text-black'>
        <div className='p-5 '>
          <nav>
            <h1 className='text-black flex ml-[320px] mt-4 text-xl'>AI medical image tool</h1>
          </nav>
        </div>
        <div className='bg-[#D9D9D9] text-white h-[600px] mx-[300px]'>
          <div className=' '>
            <ImageUploader/>
          </div>
        </div>
      </div>
    </div>
  )
}
