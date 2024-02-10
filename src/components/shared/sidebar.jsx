import React from 'react'
import {FcBullish} from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation'
import { Link } from 'react-router-dom'

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>

        <div className='flex items-center gap-2 px-1 py-3'>
            <FcBullish fontSize={24}/>
            <span className='text-neutral-100 text-lg'> OpenShop</span>
        </div>

        <div className='flex-1'>
            {DASHBOARD_SIDEBAR_LINKS.map((item) =>(
                    <SidebarComponent item={item} key={item.key}/>
            ))}
        </div>



        <div>Bottom Part</div>
    </div>
  )
}


function SidebarComponent({item}){
    return (
        <Link to = {item.path} className={linkClasses}>
            <span className="text-xl">{item.icon}</span>
            {item.label}
        </Link>
    )
}