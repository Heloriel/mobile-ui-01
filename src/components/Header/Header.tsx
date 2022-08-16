import HeaderTitle from "../HeaderTitle/HeaderTitle";
import NavTabs from "../NavTabs/NavTabs";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <div className="flex flex-col w-full text-white px-4 py-6">
      <HeaderTitle title={title} />
      <div className="flex w-full px-6">
        <NavTabs />
      </div>
    </div>
  );
}
