type Props = {
  title: string;
};

export default function SmallCatTitle({ title }: Props) {
  return <span className="text-sm font-bold text-gray-600 my-6">{title}</span>;
}
