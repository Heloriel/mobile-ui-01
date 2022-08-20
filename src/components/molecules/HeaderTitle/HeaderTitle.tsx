import classNames from "classnames";
import { Camera, MagnifyingGlass } from "phosphor-react";

type Props = {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function HeaderTitle({ title, leftIcon, rightIcon }: Props) {
  const noRightIcon = !rightIcon;
  return (
    <div className="flex items-center w-full h-8 mb-6">
      <div>{leftIcon}</div>
      <div className={classNames({ "-ml-[22px]": noRightIcon }, "flex-1 text-center font-bold text-xl")}>{title}</div>
      <div>{rightIcon}</div>
    </div>
  );
}
