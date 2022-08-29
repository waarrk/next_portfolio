export default function Wide({ title, children}: {title: any, children: any}) {
    return (
        <>
            <div className='max-w-xl  lg:max-w-none lg:w-5/12 mx-auto mt-10 py-8 px-10 rounded-lg shadow-neumorphismdark'>
                <p className="text-xl leading-tight"> # ■ {title}</p>
                <p className='text-base leading-normal text-gray-300 mt-2'>
                    {children}
                </p>
            </div>
        </>
    )
}