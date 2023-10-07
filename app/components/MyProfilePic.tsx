import React from 'react'
import Image from 'next/image'
//Your Image should be in the public folder
export default function MyProfilePic() {
  return (
    <section>
      <Image src='' alt='Manasseh' width={200} height={200} priority={true}/>
    </section>
  )
}
