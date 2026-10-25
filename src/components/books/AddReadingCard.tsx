interface AddReadingCardProps{
    openReadingOptions: () => void;
}

export function AddReadingCard({openReadingOptions} : AddReadingCardProps){

    return(
        <button onClick={openReadingOptions} className="bg-amber w-[33.3%] h-70 p-3 rounded-xl border-1 border-ink flex gap-4 items-center justify-center">
            <div className="text-8xl font-thin font-serif text-ink" >
                +
            </div>
        </button>
    )
 }