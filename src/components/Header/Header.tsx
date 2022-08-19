import HeaderTitle from "../HeaderTitle/HeaderTitle";
import NavTabs from "../NavTabs/NavTabs";

type Props = {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disableNavTabs?: boolean;
};

export default function Header({ title, disableNavTabs, leftIcon, rightIcon }: Props) {
  return (
    <div className="flex flex-col w-full text-white px-4 py-6">
      <HeaderTitle title={title} leftIcon={leftIcon} rightIcon={rightIcon} />
      {disableNavTabs ? (
        <></>
      ) : (
        <div className="flex w-full px-6">
          <NavTabs />
        </div>
      )}
    </div>
  );
}
