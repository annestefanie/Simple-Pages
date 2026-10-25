import searchIcon from "../../assets/search.png"
import { FakeNav } from "../common/FakeNav"
import { useState } from "react";

export function SearchBar(){

    const [isSearchOpen, setIsSearchOpen] = useState(true);
        
        function closeModal(){
            setIsSearchOpen(false);
        }

    return(
        <section className="flex flex-col w-full items-center">
        {isSearchOpen &&(
            <>
            <FakeNav 
                icon={searchIcon} 
                text="SEARCH YOUR FAVORITE BOOKS" 
                color="bg-rose" 
                width="w-[80%]"
                isOpen={isSearchOpen}
                onClose={closeModal}
            />

            <div className=" bg-white rounded-b-xl w-[80%] shadow-sm border-1 border-t-0 border-ink">
                
                <input className="w-full outline-none p-2 font-mono" type="text" placeholder="EX: ROMEU AND JULIET" />
            </div>
            </>
        )}
        </section>
    )
}