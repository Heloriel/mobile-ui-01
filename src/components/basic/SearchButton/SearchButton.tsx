import { MagnifyingGlass, X } from "phosphor-react";
import { useContext } from "react";
import { Context, ISearchContext } from "../../../contexts/SearchContext";

type Color = `#${string}`;

type Props = {
  color?: Color;
};

export default function SearchButton({ color = "#fff" }: Props) {
  const context = useContext<ISearchContext>(Context);

  function handleClick() {
    context.setIsSearchOpen(!context.isSearchOpen);
  }
  return (
    <a role={"button"} onClick={handleClick}>
      {context.isSearchOpen ? <X size={26} color={color} /> : <MagnifyingGlass size={26} color={color} /> }
    </a>
  )
}
