import { Glossary } from "@/@types/app/glossary.app.interface";
import Link from "next/link";

interface GlossaryListItemProps {
  glossary: Glossary;
}

export default function GlossaryListItem({ glossary }: GlossaryListItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <Link href={`glossario/${glossary.id}`} className="text-xl font-bold">
        {glossary.word}
      </Link>
      <p className="text-base opacity-80">{glossary.definition}</p>
    </div>
  );
}
