export default function Year({ title, children}: {title: any, children: any}) {
    return (
        <>
            <div className='flex'>
                <a className='pr-2 font-bold'>{title}</a>
                <p className="text-base leading-normal text-gray-300">{children}</p>
            </div>
        </>
    )
}