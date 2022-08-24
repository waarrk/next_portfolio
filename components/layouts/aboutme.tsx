import Image from 'next/image'

export default function Aboutme() {
  return (
    <>
        <div className='max-w-sm mx-auto flex py-8 px-10 rounded-lg shadow-neumorphismdark'>
            <Image src="/images/kamo.jpg" width={90} height={90} objectFit="contain" className='rounded-full' />
            <div className="ml-6 pt-1">
                <p className="text-2xl leading-tight">Yusaku Washio</p>
                <p className='text-base leading-normal'>waarrk</p>
            </div>
        </div>
    </>
  )
}