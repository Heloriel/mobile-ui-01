import { CaretRight } from "phosphor-react";

type Props = {
  url: string;
};

export default function SeeMore({ url = "#" }: Props) {
  return (
    <a href={url} className="flex w-full text-red-500 text-xs leading-none items-center uppercase my-4">
      See More <CaretRight size={12} />
    </a>
  );
}
