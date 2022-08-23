type Props = {
  title: string;
  className?: string;
};

export default function SmallCatTitle({ title, className }: Props) {
  return <span className={`flex w-full text-sm font-bold text-gray-600 uppercase ${className}`}>{title}</span>;
}
