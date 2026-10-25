import type { ReactNode } from "react";

interface FlexLayoutProps {
    children: ReactNode;
    gap: string;
    bg?:string;
    padding?: string;
}

export function FlexLayout({children, gap="gap-2", bg="bg-transparent", padding="p-1"} : FlexLayoutProps){
    return (
        <div className={` flex justify-around align-center ${padding} ${gap} ${bg}`}>
            {children}
        </div>
        
    )
}