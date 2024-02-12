import React from 'react'
import {HiOutlineSearch, HiOutlineChatAlt, HiOutlineBell} from 'react-icons/hi'
import { Popover } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <div className=' h-16 flex justify-between items-center border-b border-grey-200'>

      <div className='relative'>
        <HiOutlineSearch fontSize={20} className='text-grey-400 absolute top-1/2 -translate-y-1/2 left-3'/>
        <input className='h-10 w-[24rem] text-sm focus:outline-none active:outline-none border-2 border-grey-300 rounded pr-4 pl-8' type="text" placeholder=' search'/>
      </div>

      <div className='flex items-center gap-2 mr-2'>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 rounded p-1.5">
              <span><HiOutlineChatAlt fontSize={24}/></span>
             
            </Popover.Button>
          </>)}

        </Popover>
          
        
        <HiOutlineBell fontSize={24}/>

      </div>

    </div>
  )
}
