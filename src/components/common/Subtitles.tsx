
interface SubtitlesProps {
    text: string;
    sectionId: string;
}

export function Subtitles({text, sectionId} : SubtitlesProps){

    return(
        <a href={sectionId}>
            <h2 className="font-serif text-3xl">{text}</h2>
        </a>
    )
}