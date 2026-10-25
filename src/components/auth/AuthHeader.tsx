import swapIcon from "../../assets/swap.png"
import closeIcon from "../../assets/reject.png"
import catIcon from "../../assets/animal.png"

interface AuthHeaderProps {
  isLoginMode: boolean;
  onSwitch: () => void;
}

export function AuthHeader({isLoginMode, onSwitch,}: AuthHeaderProps){
  return (
    <header className="flex bg-rose justify-between items-center p-2 border-b-1 rounded-t-xl">
      <img className="w-6" src={catIcon} alt="Cat Face" />
      <div className="flex justify-center gap-4">
        <h2 className="font-serif text-2xl font-semibold">{isLoginMode ? "LOG IN" : "SIGN UP"}</h2>

        <button className='w-5 cursor-pointer flex items-center' type="button" onClick={onSwitch}>
          <img src={swapIcon} />
        </button>
      </div>

      <button className='w-7 cursor-pointer'>
        <img src={closeIcon} alt="" />
      </button>
    </header>
  );
}
