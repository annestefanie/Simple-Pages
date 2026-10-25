
export function SaveAlert () {

    return (
        <>
            <section className="fixed inset-0 w-full h-full bg-black/30 flex flex-col items-center justify-center backdrop-blur-xs backdrop-brightness-120">
                <div className="bg-white border-1 rounded-xl w-50 ">
                    <p className="font-mono font-black ">
                        SUCCESFULLY SAVED
                    </p>
                    <button className="p-2 w-[50%] font-mono font-black">OK</button>
                </div>
            </section>
        </>
    )
}