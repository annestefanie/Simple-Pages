import { FakeNav } from "../common/FakeNav";
import { useState } from "react";
import clockIcon from "../../assets/clock.png"
import returnIcon from "../../assets/return.png"
import startIcon from "../../assets/play.png"
import pauseIcon from "../../assets/pause.png"
import resetIcon from "../../assets/reset.png"
import { InputField } from "../common/InputField";
type ClockType = "stopwatch" | "timer";

interface ClockProps {
    isClockOpen: boolean;
    onClose: () => void;
}

export function Clock({isClockOpen, onClose} : ClockProps){

    const [isChoosingOpen, setIsChoosingOpen] = useState(true);
    const [isClockTypeOpen, setIsClockTypeOpen] = useState(false);
    const [clockType, setClockType] = useState<ClockType>("stopwatch")
    
    function openChoosing(){
        setIsChoosingOpen(true);
        setIsClockTypeOpen(false);
    }
    
    function openStopwatch(){
        setIsChoosingOpen(false);
        setIsClockTypeOpen(true);
        setClockType("stopwatch");
        
    }


    return (
        <>
        {isClockOpen && (
            <section className="fixed inset-50 h-120 w-100 bg-white border-1 rounded-xl flex flex-col justify-center ">
                <FakeNav 
                    icon={clockIcon} 
                    text="CLOCK" 
                    textColor="text-white"
                    color="bg-ink" 
                    width=""
                    isOpen={isClockOpen}
                    onClose={onClose}
                    blackIcon={false}
                />

                
                <div className="flex flex-col items-center justify-center h-[100%] gap-2">
                    {/* CHOOSING THE READING */}
                    { isChoosingOpen && (
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <h3 className="font-mono text-xl font-black">CHOOSE THE READING</h3>
                            <select 
                                className="w-80 border-1 rounded-2xl p-2 outline-amber text-black bg-background"
                                name="choose the reading"
                            >
                                <option value="">Dom Casmurro</option>
                            </select>
                            <button 
                                className="w-15 bg-rose rounded-md p-1 border-1 font-semibold"
                                onClick={openStopwatch}>
                                    OK
                            </button>
                        </div>
                    )}

                    {/* RENDER THE SELECTOR */}

                    { isClockTypeOpen && (
                        <>
                            <div className="flex gap-2 items-start absolute z-100 top-18">
                                <button onClick={openChoosing}>
                                    <img className="w-6" src={returnIcon} alt="return" />
                                </button>
                                <h5 className="font-serif text-xl">DOM CASMURRO</h5>
                            </div>
                            <select 
                                name="typeOfClock"
                                value={clockType}
                                onChange={(event) => {
                                    setClockType(event.target.value as ClockType);
                                }} 
                                className="font-mono font-black text-xl text-center outline-none">
                                <option value="stopwatch">STOPWATCH</option>
                                <option value="timer" >TIMER</option>
                            </select>
                        </>
                    )}

                    {/* STOPWATCH */}
                    { isClockTypeOpen && clockType === "stopwatch" && (
                        <>
                            <div className="font-serif text-7xl">00:00:00</div>
                            <div className="flex gap-8">
                                <button className="w-7"><img src={startIcon} alt="start" /></button>
                                <button className="w-8"><img src={pauseIcon} alt="pause" /></button>
                                <button className="w-9"><img src={resetIcon} alt="reset" /></button>
                            </div>
                            <button className="bg-rose border-1 rounded-md px-3 py-1 font-semibold">SAVE</button>
                        </>

                    )}

                    {/* TIMER */}
                    { isClockTypeOpen && clockType === "timer" && (
                        <div className="flex flex-col items-center justify-center gap-3">
                            <div className="font-serif text-7xl">00:00:00</div>

                            <div className="flex w-80 gap-4">
                                <InputField type="number" placeholder="HRS" />
                                <InputField type="number" placeholder="MIN" />
                                <InputField type="number" placeholder="SECS" />
                            </div>

                            <div className="flex gap-8">
                                <button className="w-7"><img src={startIcon} alt="start" /></button>
                                <button className="w-8"><img src={pauseIcon} alt="pause" /></button>
                                <button className="w-9"><img src={resetIcon} alt="reset" /></button>
                            </div>
                            <button className="bg-rose border-1 rounded-md px-3 py-1 font-semibold">SAVE</button>
                        </div>

                    )}

                </div>
            </section> 
        )}
        </>
    )
}
