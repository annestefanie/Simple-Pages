interface SubtitlesProps {
  text: string;
  sectionId: string;
}

export function Subtitles({ text, sectionId }: SubtitlesProps) {
  return (
    <section className='flex justify-between'>
      <a href={sectionId}>
        <h2 className=" text-3xl">{text}</h2>
      </a>
      <a href="">
        SEE ALL
      </a>
    </section>
  );
}
