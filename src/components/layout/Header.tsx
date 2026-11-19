import { User } from "lucide-react";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="flex flex-row justify-center items-center py-2 fixed bg-paper w-full z-100">
      <div className="flex w-[80%] justify-between items-center">
        <h1 className=" text-xl font-dm font-medium">Simple Pages.</h1>
        <nav className="flex gap-10">
            <div className="flex gap-5">
                <a className='flex items-center justify-center gap-2' href="">
                    <User size={20} />
                    <p className="font-code">LOGIN</p>
                </a>
                <a className="rounded-xl pl-2 pr-2 font-code bg-aqua" href="">
                    ADD + 
                </a>
            </div>
          <a className='flex items-center gap-1' href="">
            <p className="font-code">MENU</p>
            <ChevronDown size={17}/>
          </a>
        </nav>
      </div>
    </header>
  );
}
