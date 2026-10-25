import { FakeNav } from "../common/FakeNav";
import bookIcon from "../../assets/book.png"

interface ReadingOptionsProps{
    isReadingOptionsOpen: boolean;
    onClose: () => void;
}

export function ReadingOptions({isReadingOptionsOpen, onClose}: ReadingOptionsProps){

    return (
        <>
        { isReadingOptionsOpen && (
            <section className="fixed inset-0 w-full h-full bg-black/30 flex flex-col items-center justify-center backdrop-blur-xs backdrop-brightness-120">
                <FakeNav
                    icon={bookIcon}
                    text="CHOOSE ONE"
                    isOpen={isReadingOptionsOpen}
                    onClose={onClose}
                    color="bg-aqua"
                    width="w-[50%]"
                />
                <div className="w-[50%] h-50 bg-white border-1 border-t-0 rounded-xl rounded-t-none flex items-center justify-center gap-6">
                    <button className="w-70 p-3 w-[45%] h-30 bg-amber rounded-xl border-1 flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-serif text-ink">Add Manually</h3>
                        <p className="w-60 font-mono text-sm/4 text-ink">ENTER THE BOOK DETAILS AND UPLOAD YOUR COVER.</p>
                    </button>
                    <button className="p-2 w-[45%] h-30 bg-ink rounded-xl border-1 flex flex-col items-center justify-center">
                        <h3 className="text-3xl font-serif text-amber ">Search for a Book</h3>
                        <p className=" w-60 font-mono text-amber text-sm/4">FIND YOUR BOOK AND IMPORT ITS DETAILS AUTOMATICALLY.</p>
                    </button>
                </div>
            </section>
        )}
        
        </>
    )
}