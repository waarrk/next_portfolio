import Image from 'next/image'
import Link from 'next/link'

export default function Aboutme() {
  return (
    <>
      <div className='max-w-xl min-w-xl mx-auto py-8 px-10 lg:px-10 mt-10 lg:mt-0 rounded-lg shadow-neumorphismdark'>
          <div className='flex justify-center'>
            <div className='flex items-center'>
                <Image src="/images/kamo.jpg" width={90} height={90} objectFit="contain" className='rounded-full' />
                <div className="ml-6 pt-1">
                    <p className="text-2xl leading-tight">Yusaku Washio</p>
                    <p className='text-base leading-normal text-gray-300'>waarrk</p>
                    <p className='text-base leading-normal text-gray-300'>Software / Circuit Design</p>
                </div>
            </div>
          </div>
          <div className='mt-10 mx-auto w-8/12 lg:w-10/12 flex justify-around items-center'>
              <Link href="https://github.com/waarrk">
                <Image src="/images/github.svg" width={25} height={25} objectFit="contain" className='rounded-full hover:opacity-50' />
              </Link>
              <Link href="https://twitter.com/waarrk">
                <Image src="/images/twitter.svg" width={25} height={25} objectFit="contain" className='hover:opacity-50'/>
              </Link>
              <Link href="https://www.instagram.com/waarrk/">
                <Image src="/images/Instagram.svg" width={25} height={25} objectFit="contain" className='invert hover:opacity-50'/>
              </Link>
              <Link href="">
                <Image src="/images/rss.svg" width={25} height={25} objectFit="contain" className='hover:opacity-50'/>
              </Link>
          </div>
        </div>
    </>
  )
}