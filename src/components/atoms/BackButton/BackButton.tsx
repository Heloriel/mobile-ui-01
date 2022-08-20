import { CaretLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";

type Color = `#${string}`;

type Props = {
  color?: Color;
};

export default function BackButton({ color = "#fff" }: Props) {
  const navigate = useNavigate();

  return (
    <a role={"button"} onClick={() => navigate(-1)} className="p-2">
      <CaretLeft size={24} color={color} />
    </a>
  );
}
