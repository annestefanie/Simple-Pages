import googleIcon from '../../assets/google.png';
import type { ReactNode } from "react";

interface SocialAuthProps {
    children: ReactNode;
}

export function SocialAuth({children} : SocialAuthProps){

    return(
        <div className='flex justify-center items-center gap-4 bg- p-2 rounded-4xl border-1 border-foreground cursor-pointer bg-aqua font-mono uppercase'>
            <img className='w-5 h-5' src={googleIcon} alt="Google Icon" />
            {children}
        </div>
    )
}