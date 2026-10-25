import userProfile from "../../assets/user.png"

interface HeaderProps {
    onOpenClock: () => void;
}

export function Header({ onOpenClock }: HeaderProps){

    
    return(
        <header className="flex flex-row justify-between items-center px-5 py-2 bg-ink fixed w-[80%] border-b-1 rounded-b-2xl">
            <h1 className="font-serif text-2xl text-white" >Simple Pages.</h1>
            <nav className="flex gap-10">
                <a className="font-mono text-white" >PROGRESS</a>
                <a className="font-mono text-white" onClick={onOpenClock} >CLOCK</a>
                <a className="font-mono w-5 flex items-center" >
                    <img src={userProfile} alt="Profile Picture" />
                </a>
                </nav>
        </header>
    )
}