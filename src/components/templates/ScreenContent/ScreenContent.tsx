type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ScreenContent({ children, className }: Props) {
  return <div className={`flex flex-col flex-1 bg-white rounded-t-3xl px-4 py-8 ${className}`}>{children}</div>;
}
