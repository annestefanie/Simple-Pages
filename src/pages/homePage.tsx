import { SearchBar } from '../components/books/SearchBar';
import { Divider } from '../components/common/Divider';
import { Header } from '../components/layout/Header';
import { Subtitles } from '../components/common/Subtitles';
import { ReadingCards } from '../components/books/ReadingCards'
import { AddReadingCard } from '../components/books/AddReadingCard';
import coverSrc from '../assets/coverExample.jpg'
import { FlexLayout } from '../components/layout/FlexLayout';
import { SeeAllBtn } from '../components/common/SeeAllBtn';
import { BookCard } from '../components/books/BookCard';
import { useState } from 'react';
import { Clock } from '../components/clock/Clock';
import { ReadingOptions } from '../components/books/ReadingOptions';
import { ReadingForm } from '../components/books/ReadingForm';

export function HomePage(){
    const [isClockOpen, setIsClockOpen] = useState(false)

    function openClock() {
        setIsClockOpen(true);
    }

    function closeClock() {
        setIsClockOpen(false);
    }

    const [isReadingOptionsOpen, setIsReadingOptionsOpen] = useState(false);
    
    function openReadingOptions() {
        setIsReadingOptionsOpen(true);
    }

    function closeReadingOptions(){
        setIsReadingOptionsOpen(false);
    }

    const [isReadingFormOpen, setIsReadingFormOpen] = useState(false);

    function openReadingForm() {
        setIsReadingFormOpen(true);
        closeReadingOptions();
    }

    function closeReadingForm(){
        setIsReadingFormOpen(false);
    }

    return(
        <>
            <header className='flex justify-center'>
                <Header onOpenClock={openClock} />
            </header>

            <main className='bg-background pt-20 flex flex-col items-center'>
                <SearchBar />
                <Divider />

                {/* MY READINGS SECTION */}
                <section id="myReadings" className='w-[80%] flex flex-col gap-4'>
                    <Subtitles text="My Readings" sectionId='#myReadings'/>
                    <FlexLayout gap='gap-2'>
                        <ReadingCards bookCover={coverSrc} 
                            bookName="Dom Casmurro" 
                            authorName='MACHADO DE ASSIS'
                            time={4}
                            percentage={50}
                            />
                        <AddReadingCard openReadingOptions={openReadingOptions} />
                        <AddReadingCard openReadingOptions={openReadingOptions} />
                    </FlexLayout>
                        <SeeAllBtn />
                </section>

                <Divider />

                {/* FAV BOOKS SECTION */}
                <section id='favBooks' className='w-[80%] flex flex-col gap-4'>
                    <Subtitles text='Favorite Books' sectionId='#favBooks'/>
                    <FlexLayout gap='gap-4'>
                        <BookCard bookName='Dom Casmurro' authorName='MACHADO DE ASSIS' bookCover={coverSrc} />
                        <BookCard bookName='Dom Casmurro' authorName='MACHADO DE ASSIS' bookCover={coverSrc}  />
                        <BookCard bookName='Dom Casmurro' authorName='MACHADO DE ASSIS' bookCover={coverSrc}  />
                        <BookCard bookName='Dom Casmurro' authorName='MACHADO DE ASSIS' bookCover={coverSrc}  />
                        <BookCard bookName='Dom Casmurro' authorName='MACHADO DE ASSIS' bookCover={coverSrc}  />
                    </FlexLayout>
                    <SeeAllBtn />
                </section>
            </main>

            <Clock 
                isClockOpen={isClockOpen}
                onClose={closeClock}
            />
            
            <ReadingOptions 
                isReadingOptionsOpen={isReadingOptionsOpen}
                onClose={closeReadingOptions}
                openReadingForm={openReadingForm}
            />

            <ReadingForm 
                isReadingFormOpen={isReadingFormOpen}
                onClose={closeReadingForm}
            />
        </>
    )
}