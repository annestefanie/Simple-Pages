import coverSrc from "../assets/coverExample.jpg";
import catHomePage from "../assets/animal.png";
import { useDisclosure } from "../hooks/useDisclosure.tsx";

{/* COMPONENTES */}

import { AddReadingCard } from "../components/books/AddReadingCard";
import { BookCard } from "../components/books/BookCard";
import { ReadingCards } from "../components/books/ReadingCards";
import { ReadingForm } from "../components/books/ReadingForm";
import { ReadingOptions } from "../components/books/ReadingOptions";
import { SearchBar } from "../components/books/SearchBar";

import Menu from "../components/common/Menu/Menu";
import { Divider } from "../components/common/Divider";
import { Subtitles } from "../components/common/Subtitles";

import { FlexLayout } from "../components/layout/FlexLayout";
import { Header } from "../components/layout/Header";

import { Clock } from "../components/clock/Clock";

export function HomePage() {
  
  const clock = useDisclosure();
  const readingOptions = useDisclosure();
  const readingForm = useDisclosure();
  const menu = useDisclosure();

  

  return (
    <>
      {/* HEADER */}
      <header className="flex justify-center">
        <Header />
      </header>

      <main className="bg-background pt-20 flex flex-col w-full items-center">

        {/* HERO SECTION */}
        <section className=" grid grid-cols-1n md:grid-cols-[1.1fr_0.9fr] items-center gap-8 max-w-6xl mx-auto px-6 py-16">

          <div className="flex justify-start flex-col text-start gap-3 w-full items-start">
            <h1 className=" font-[700] text-6xl font-dm">
              Every page & every minute.
            </h1>
            <p className="text-l font-code tracking-tighter w-90">
              Track your progress, add your favorite books, and read on pomodoro
              style.
            </p>
            <button className="font-dm bg-brown rounded-lg px-4 py-1 ">
              Tutorial ↗
            </button>
          </div>

          <div className="flex items-center justify-center">
            <img src={catHomePage} className="w-80"/>
          </div>

        </section>

        <SearchBar />

        {/* MY READINGS SECTION */}
        <section id="myReadings" className="w-[80%] flex flex-col gap-4">
          <Subtitles text="Currently Reading" sectionId="#myReadings" />
          <FlexLayout gap="gap-2">
            <ReadingCards
              bookCover={coverSrc}
              bookName="Dom Casmurro"
              authorName="MACHADO DE ASSIS"
              time={4}
              percentage={50}
            />
            <AddReadingCard openReadingOptions={ReadingOptions.open} />
            <AddReadingCard openReadingOptions={ReadingOptions.open} />
          </FlexLayout>
        </section>

        <Divider />

        {/* FAV BOOKS SECTION */}
        <section id="favBooks" className="w-[80%] flex flex-col gap-4">
          <Subtitles text="Favorite Books" sectionId="#favBooks" />
          <FlexLayout gap="gap-4">
            <BookCard
              bookName="Dom Casmurro"
              authorName="MACHADO DE ASSIS"
              bookCover={coverSrc}
            />
            <BookCard
              bookName="Dom Casmurro"
              authorName="MACHADO DE ASSIS"
              bookCover={coverSrc}
            />
            <BookCard
              bookName="Dom Casmurro"
              authorName="MACHADO DE ASSIS"
              bookCover={coverSrc}
            />
            <BookCard
              bookName="Dom Casmurro"
              authorName="MACHADO DE ASSIS"
              bookCover={coverSrc}
            />
            <BookCard
              bookName="Dom Casmurro"
              authorName="MACHADO DE ASSIS"
              bookCover={coverSrc}
            />
          </FlexLayout>
        </section>
      </main>

      <Clock isClockOpen={Clock.isOpen} onClose={clock.close} />

      <ReadingOptions
        isReadingOptionsOpen={readingOptions.isOpen}
        onClose={readingOptions.close}
        openReadingForm={openReadingForm}
      />

      <ReadingForm
        isReadingFormOpen={readingForm.isOpen}
        onClose={readingForm.close}
      />

      <Menu 
        isMenuOpen={menu.isOpen} 
        onClose={menu.close}
      />

    </>
  );
}
