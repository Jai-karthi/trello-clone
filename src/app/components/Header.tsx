'use client';

import { UserCircleIcon } from '@heroicons/react/20/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import Avatar from 'react-avatar'

function Header() {
  return (
    <header>
      <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>
      <div className="absolute top-0 left-0 h-96 w-full bg-gradient-to-br from-pink-400 via-slate-[#0055D1] to-[#005] rounded-b-md -z-50 opacity-50 blur-3xl" />
       <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
          <form className= "flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input type="text" placeholder="Search" className="flex-1  outline-none p-2" />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar
          name='jai prashanth
          '
          round size='50' color='#0055D1'/>
          </div>
        </div>
        <div className='flex items-center justify-center px-5 md:py-5 py-2'>
          <p className='flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]'>
            <UserCircleIcon
            className='inline-block h-10 w-10 text-[#0055d1] mr-1'/>
            GPT is running
          </p>
        </div>
    </header>

  )
}

export default Header