import React from 'react'
import Image from 'next/image'
//Your Image should be in the public folder
export default function MyProfilePic() {
  return (
    <section>
      <Image className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8' src='/images/Avatar.png' alt='Manasseh' width={200} height={200} priority={true}/>
    </section>
  )
}
