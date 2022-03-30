import Image from "next/image"
import will1 from "../public/images/will1.gif"
import will2 from "../public/images/will2.gif"
import will3 from "../public/images/will3.gif"
import will4 from "../public/images/will4.gif"
import will5 from "../public/images/will5.gif"




export default function Home() {
  return (

    
    <div className="flex flex-row flex-wrap items-center justify-center w-full h-screen space-x-5 space-y-4 align-middle lg-flex-row">
      
      <div className='relative w-20 h-20 gap-3 overflow-hidden rounded-full ring-2 ring-green-800 ring-offset-4'>
        <Image
         
          src={will1}
          
        />
      </div>

      <div className='relative w-20 h-20 gap-3 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={will2}
          alt='Picture of Will 1'
          layout='fill'
          priority
        />
      </div>

      <div className='relative w-20 h-20 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={will3}
          alt='Picture of Will 1'
          layout='fill'
          priority
        />
      </div>
      <div className='relative w-20 h-20 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={will4}
          alt='Picture of Will 1'
          layout='fill'
          priority
        />
      </div>
      <div className='relative w-20 h-20 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
        <Image
          objectFit='cover'
          src={will5}
          alt='Picture of Will 1'
          layout='fill'
          priority
        />
      </div>
    </div>
    
  )
}
