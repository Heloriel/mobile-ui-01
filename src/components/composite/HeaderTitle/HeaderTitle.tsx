import classNames from "classnames";
import { useContext } from "react";
import { Context, ISearchContext } from "../../../contexts/SearchContext";
import SearchBar from "../../basic/SearchBar/SearchBar";

type Props = {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function HeaderTitle({ title, leftIcon, rightIcon }: Props) {
  const noRightIcon = !rightIcon;
  const context = useContext<ISearchContext>(Context);

  return (
    <div className="flex items-center w-full h-10 mb-6">
      <div className="flex flex-1">{leftIcon}</div>
      <div className={classNames({ "-ml-[32px]": noRightIcon }, "flex-2 text-center font-bold text-xl")}>{context.isSearchOpen ? <SearchBar /> : title}</div>
      <div className="flex flex-1 justify-end">{rightIcon}</div>
    </div>
  );
}
