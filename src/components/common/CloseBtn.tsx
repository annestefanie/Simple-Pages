import closeBlack from "../../assets/reject.png"
import closeWhite from "../../assets/reject-white.png"

interface CloseBtnProps{
    onClick: () => void;
    blackIcon: boolean
}

export function CloseBtn({onClick, blackIcon = true} : CloseBtnProps){
    const source = blackIcon ? closeBlack : closeWhite;

    return (
        <button onClick={onClick}>
            <img className="w-5 h-5" src={source} alt="close" />
        </button>
    )
}