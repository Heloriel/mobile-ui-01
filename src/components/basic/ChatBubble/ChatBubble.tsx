type Props = {
  children: string;
  incoming?: boolean;
};

export default function ChatBubble({ children, incoming }: Props) {
  if (incoming) {
    return (
      <div className="relative flex">
        <div className="border-4 border-t-transparent border-l-transparent border-b-blue-100 border-r-blue-100 absolute -left-2 bottom-2"></div>
        <span className="flex p-3 bg-blue-100 rounded-t-lg rounded-r-lg my-2 break-all">{children}</span>
      </div>
    );
  } else {
    return (
      <div className="relative flex justify-end">
        <div className="border-4 border-t-transparent border-r-transparent border-b-green-100 border-l-green-100 absolute -right-2 bottom-2"></div>
        <span className="flex p-3 bg-green-100 rounded-t-lg rounded-l-lg my-2 break-all">{children}</span>
      </div>
    );
  }
}
