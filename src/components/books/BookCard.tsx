interface BookCardProps {
    bookName: string;
    authorName: string;
    bookCover: string;
}


export function BookCard({bookName, authorName, bookCover} : BookCardProps){

    return(
        <div className="overflow-hidden border-1 rounded-xl bg-rose">
            <img className="w-70" src={bookCover} alt="" />
            <div className="p-3">
                <h3 className=" text-3xl text-center">{bookName}</h3>
                <h4 className="text-sm text-center">{authorName}</h4>
            </div>
        </div>
        
    )
 }