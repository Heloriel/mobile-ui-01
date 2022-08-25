import { ArrowSquareOut } from "phosphor-react";

type Color = `#${string}`;

type Props = {
  url: string;
  color?: Color;
};

export default function SearchButton({ url, color = "#fff" }: Props) {
  return (
    <a href={url}>
      <ArrowSquareOut size={22} color={color} />
    </a>
  );
}
