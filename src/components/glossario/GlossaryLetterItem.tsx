import GlossaryListItem from "@/components/glossario/GlossaryListItem";
import { filterByInitialLetter } from "@/utils/glossaries";

interface IGlossaryWordItem {
  letter: string;
}

export default function GlossaryLetterItem({ letter }: IGlossaryWordItem) {
  return (
    <div className="w-full p-8 gap-8 flex border border-grayscale-100 rounded-2xl">
      <span className="text-primary-green text-8xl">{letter}</span>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
        {filterByInitialLetter(letter).map((d, i) => (
          <GlossaryListItem glossary={d} key={i} />
        ))}
      </div>
    </div>
  );
}
