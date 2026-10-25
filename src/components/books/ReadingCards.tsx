
interface ReadingCardsProps {
    bookCover: string;
    bookName: string;
    authorName?: string;
    time?: number;
    percentage: number;
}

export function ReadingCards({bookCover, bookName, authorName, time, percentage} : ReadingCardsProps){

    return (
        <>
            {/* READING CARD */}
            <div className="shadow-sm bg-aqua h-70 p-3 rounded-xl border-1 border-ink flex gap-4">
                {/* BOOK COVER */}
                <div className="w-[40%] h-full  flex items-center justify-center overflow-hidden">
                    <img className="object-cover min-w-40 rounded-md" src={bookCover} alt="book cover" />
                </div>
                {/* READING INFO */}
                <div className="w-[60%] h-full flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between">
                            <button>
                                *****
                            </button>
                            <button>
                                s2
                            </button>
                        </div>
                        <h3 className="font-serif text-4xl">{bookName}</h3>
                        <h4 className="font-mono">{authorName}</h4>
                    </div>
                    <div >
                        <p className="font-mono">TIME: {time}H</p>
                         {/* PROGRESS BAR */}
                        <div className="w-full h-9 bg-white rounded-4xl overflow-hidden border-1">
                            <div className="w-[80%] h-full bg-amber border-r-1"></div>
                        </div>
                        <p className="font-mono text-end">{percentage}%</p>
                    </div>
                </div>
            </div>
        </>
    )
}