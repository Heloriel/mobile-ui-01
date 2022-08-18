type Props = {
  children: string;
};

export default function ChatBubble({ children }: Props) {
  return (
    <div className="relative">
      <div className="border-4 border-t-transparent border-l-transparent border-b-blue-200 border-r-blue-200 absolute -left-2 bottom-2"></div>
      <span className="flex p-2 bg-blue-200 rounded-t-lg rounded-r-lg my-2 break-all">{children}</span>
    </div>
  );
}
