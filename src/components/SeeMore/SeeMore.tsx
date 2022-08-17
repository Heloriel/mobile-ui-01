import { CaretRight } from "phosphor-react";

export default function SeeMore() {
  return (
    <span className="flex w-full text-red-500 text-xs leading-none items-center uppercase my-4">
      See More <CaretRight size={12} />
    </span>
  );
}
