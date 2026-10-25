import createIcon from "../../assets/create.png"
import { FakeNav } from "../common/FakeNav";
import uploadIcon from "../../assets/upload.png"
import bookCover from "../../assets/coverExample.jpg"
import nextIcon from "../../assets/next.png"
import { Divider } from "../common/Divider";
import { useState } from "react";
import { InputField } from "../common/InputField";
import { SaveAlert } from "../common/SaveConfirmation";

interface ReadingFormProps{
    isReadingFormOpen: boolean;
    onClose: () => void;
}


export function ReadingForm({isReadingFormOpen, onClose} : ReadingFormProps){

    const [currentStep, setCurrentStep] = useState(1);
    const [showSaveAlert, setShowSaveAlert] = useState(false);

    function next(){
        setCurrentStep((step) => Math.min(step + 1, 4))
    }

    function back(){
        setCurrentStep((step) => Math.max(step - 1, 1))
    }

    function openSaveAlert(){
        setShowSaveAlert(true);
    }
    
    return (
        <>
        {isReadingFormOpen && (
            <section className="fixed inset-0 w-full h-full bg-black/30 flex flex-col items-center justify-center backdrop-blur-xs backdrop-brightness-120 overflow-y-scroll">
                <div className="relative w-full h-full flex flex-col items-center justify-center top-30">
                    <FakeNav                
                        icon={createIcon}
                        text="ADD YOUR OWN BOOK"
                        isOpen={isReadingFormOpen}
                        onClose={onClose}
                        color="bg-rose"
                        width="w-110"

                    />
                        <div className=" flex flex-col items-center justify-center gap-3 p-2 pb-10 bg-white w-110 border-1 border-t-0 rounded-xl rounded-t-none">
                            <div className="flex w-full justify-between p-2">
                                {currentStep !== 1 && (
                                    <button onClick={back} className="flex items-center gap-3">
                                        <img className="scale-[-1] w-4 h-4" src={nextIcon} alt="next" />
                                        <span className="font-mono" >GO BACK</span>
                                    </button>
                                )}
                                <button id="fakeButton"></button>
                                {currentStep === 4 ? (
                                        <button onClick={openSaveAlert} className="flex items-center gap-3">
                                            <span className="font-mono" >SAVE</span>
                                            <img className="w-4 h-4" src={nextIcon} alt="next" />
                                        </button>
                                    ) 
                                    : (
                                        <button onClick={next} className="flex items-center gap-3">
                                            <span className="font-mono" >NEXT</span>
                                            <img className="w-4 h-4" src={nextIcon} alt="next" />
                                        </button>
                                    )
                                }
                                
                                
                            </div>
                            {/* Upload Image */}
                            {currentStep === 1 &&  (
                                <section className="w-full flex gap-3 flex-col items-center justify-center">
                                    <p className="font-mono font-black">UPLOAD THE BOOK COVER</p>
                                    <label className="flex bg-aqua p-3 border-1 rounded-xl items-center gap-2 cursor-pointer">
                                        <input
                                            className="hidden"
                                            accept="image/*"
                                            type="file"
                                            name="upload"
                                            onChange={(event) => {
                                            const image = event.target.files?.[0];
                                            console.log(image);
                                            }}
                                        />

                                        <img className="w-10 h-10" src={uploadIcon} alt="" />
                                        <p className="text-4xl font-mono font-medium">UPLOAD</p>
                                    </label>
                                    
                                    <Divider />
                                    <p hidden className="font-serif text-xl">CHOSEN IMAGE:</p>
                                    <img hidden className="w-[55%] rounded-xl" src={bookCover} alt="book cover" />
                                </section>
                            )}

                            {/* Enter book info */}
                            {currentStep === 2 &&  (
                                <section className="w-full flex flex-col items-center justify-center">
                                    <p className="font-mono font-black">BOOK INFO</p>
                                    <InputField type="text" placeholder="Book Name" />
                                    <InputField type="text" placeholder="Author Name" />
                                    <InputField type="number" placeholder="Year" />
                                </section>
                            )}

                            {/* Enter reading progress */}
                            {currentStep === 3 &&  (
                                <section className="w-full flex flex-col items-center justify-center">
                                    <div className="w-70">
                                        <p className="font-mono font-black">CURRENT PAGE</p>
                                        <InputField type="number" placeholder="Current Page" />
                                    <p className="font-mono font-black">TOTAL PAGES</p>
                                        <InputField type="number" placeholder="Total Pages" />
                                        <p className="font-mono font-black">START DATE</p>
                                        <InputField type="date" placeholder="start date" />
                                        <p className="font-mono font-black">END DATE</p>
                                        <InputField type="date" placeholder="end date"/>
                                    </div>
                                </section>
                            )}

                            {/* Enter reading details */}
                            {currentStep === 4 && (
                                <section className="w-70 flex flex-col justify-center">
                                    <h4 className="font-mono font-black text-md text-center pb-3">READING DETAILS (OPTIONAL)</h4>
                                    <p className="font-mono">TIME ALREADY SPENT READING</p>
                                    <InputField type="number" placeholder="MINUTES" />
                                    <p className="font-mono">READING SPEED</p>
                                    <InputField type="number" placeholder="PAGES/HOUR" />
                                    <p className="font-mono uppercase text-sm"><small>Used to estimate how long it may take to finish the book.</small></p>

                                </section>
                            )}

                        </div>

                </div>
            </section>
        )}
        </>
    )
}