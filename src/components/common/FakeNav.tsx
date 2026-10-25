import { CloseBtn } from "./CloseBtn";

interface FakeNavProps {
    icon: string;
    text: string;
    textColor?: string;
    color?: string;
    width?: string;

    isOpen: boolean;
    onClose: () => void;
    blackIcon?: boolean
}

export function FakeNav({icon, text, textColor="text-ink", color="bg-ink", width="w-full", isOpen, onClose, blackIcon = true} : FakeNavProps){

    if (!isOpen){
        return null;
    }

    return (
        <>
            <div 
                className={`flex justify-between p-3 rounded-t-xl items-center border-1 border-ink shadow-sm ${color} ${width} ${textColor} `}>
                    <img className="w-4 h-4" src={icon} alt="Search" />
                    <p className="font-serif text-xl">{text}</p>  
                    <CloseBtn onClick={onClose} blackIcon={blackIcon} />
            </div>
        </>
    )
}