type Props = {
  children: React.ReactNode;
};

export default function ScreenContent({ children }: Props) {
  return <div className="flex flex-col flex-1 bg-white rounded-t-3xl p-4">{children}</div>;
}
