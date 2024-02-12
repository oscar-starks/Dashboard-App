import {React, Fragment} from 'react'
import {HiOutlineSearch, HiOutlineChatAlt, HiOutlineBell} from 'react-icons/hi'
import { Popover, Transition, Menu } from '@headlessui/react'
import classNames from 'classnames'

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
            <Popover.Button className={classNames(open && 'bg-gray-100',"inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 rounded p-1.5")}>
              <span><HiOutlineChatAlt fontSize={24}/></span>
             
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="px-4 py-3 bg-white rounded-sm shadow-md ring-black ring-opacity-5">
                    <strong className='flex text-grey-700 font-medium'>Messages</strong>
                    <div className='mt-2 py-1 t'>
                      This is a message
                    </div>
                  </div>
              </Popover.Panel>

            </Transition>

          </>)}

        </Popover>

        <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className={classNames(open && 'bg-gray-100',"inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 rounded p-1.5")}>
              <span><HiOutlineBell fontSize={24}/></span>
             
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="px-4 py-3 bg-white rounded-sm shadow-md ring-black ring-opacity-5">
                    <strong className='flex text-grey-700 font-medium'>Notifications</strong>
                    <div className='mt-2 py-1 t'>
                      This is the notifications panel
                    </div>
                  </div>
              </Popover.Panel>

            </Transition>

          </>)}

        </Popover>

        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <div className='h-10 w-10 rounded-full bg-sky-100 bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url("https://source.unsplash.com/80x80?face")'}}>
              <span className='sr-only'>Test Name</span>
            </div>
            
          </Menu.Button>
        </div>
      
      </Menu>
        

      </div>

    </div>
  )
}
