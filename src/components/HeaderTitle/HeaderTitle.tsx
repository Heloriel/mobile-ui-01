import { Camera, MagnifyingGlass } from "phosphor-react";

type Props = {
  title: string;
};

export default function HeaderTitle({ title }: Props) {
  return (
    <div className="flex items-center w-full h-8 mb-6">
      <div>
        <Camera size={28} />
      </div>
      <div className="flex-1 text-center font-bold text-xl">{title}</div>
      <div>
        <MagnifyingGlass size={26} />
      </div>
    </div>
  );
}
