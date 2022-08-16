type Props = {
  children: React.ReactNode;
};

export default function ScreenContent({ children }: Props) {
  return <div className="flex-1 bg-white rounded-t-3xl">{children}</div>;
}
