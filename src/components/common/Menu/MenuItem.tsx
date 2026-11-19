import type { ReactNode } from 'react';

interface MenuItemProps{
    page: string;
    description: string;
    icon: ReactNode;
}

function MenuItem({page, description, icon} : MenuItemProps){
    return (
        <a className='grid grid-cols-1n md:grid-cols-[0.1fr_1fr] p-5 rounded-xl flex gap-3 h-23 justify-center items-center w-full'>
            <div className='p-1 items-center justify-center flex rounded-lg w-10'>
                {icon}
            </div>
            <div>
                <h5 className='font-bold text-sm w-full'>{page}</h5>
                <p className='text-xs tracking-tighter'>{description}</p>
            </div>
        </a>
    )
}
export default MenuItem;