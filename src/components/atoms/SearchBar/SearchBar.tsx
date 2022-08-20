import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

export default function SearchBar() {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="flex w-full items-center relative px-4">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setSearchString(e.target.value);
          console.log(searchString);
        }}
        value={searchString}
        placeholder="Buscar..."
        className="flex flex-1 items-center leading-none rounded-full w-full min-h-[32px] text-project-primary font-normal pl-4 pr-8"
      />
      <a href="#" className="absolute right-0 -translate-x-6">
        <MagnifyingGlass size={22} color="gray" weight="bold" />
      </a>
    </div>
  );
}
