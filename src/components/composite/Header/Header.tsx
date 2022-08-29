import { SearchContext } from "../../../contexts/SearchContext";
import HeaderTitle from "../../composite/HeaderTitle/HeaderTitle";
import NavTabs from "../../composite/NavTabs/NavTabs";

type Props = {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disableNavTabs?: boolean;
};

export default function Header({ title, disableNavTabs, leftIcon, rightIcon }: Props) {
  return (
    <SearchContext>
      <div className="flex flex-col w-full text-white px-4 py-6">
        <HeaderTitle title={title} leftIcon={leftIcon} rightIcon={rightIcon} />
        {!disableNavTabs && <div className="flex w-full px-6"><NavTabs /></div>}
      </div>
    </SearchContext>
  );
}
