import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className='bg-slate-500 p-4 sticky top-0 drop-shadow-xl z-10'>
        <div className="flex justify-between prose prose-xl mx-auto flex-col sm:flex-row">
           <Link href='/' className='text-white/90 no-underline hover:text-white'>
            Manaboy
           </Link>
        </div>
      
    </nav>
  )
}
