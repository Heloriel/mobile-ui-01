type Props = {
  title: string;
};

export default function ScreenTitle({ title }: Props) {
  return <div className="text-xl font-bold">{title}</div>;
}
