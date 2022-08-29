import { ArrowSquareOut } from "phosphor-react";

type Color = `#${string}`;

type Props = {
  url: string;
  color?: Color;
};

export default function SearchButton({ url, color = "#fff" }: Props) {
  return (
    <a href={url} className="p-2">
      <ArrowSquareOut size={24} color={color} />
    </a>
  );
}
