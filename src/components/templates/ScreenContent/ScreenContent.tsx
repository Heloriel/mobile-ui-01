type Props = {
  children: React.ReactNode;
};

export default function ScreenContent({ children }: Props) {
  return <div className="flex flex-col flex-1 bg-white rounded-t-3xl px-4 py-8">{children}</div>;
}
