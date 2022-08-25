import ChatBubble from "../../basic/ChatBubble/ChatBubble";

type Props = {
  message: string;
  time: string;
  date: string;
};

export default function ProfileLastMessages({ message, time, date }: Props) {
  return (
    <li className="flex w-full items-center justify-between">
      <div>
        <img src="https://github.com/Heloriel.png" className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex-1 px-8 overflow-ellipsis whitespace-nowrap">
        <ChatBubble incoming>{message}</ChatBubble>
        <span className="text-xs">{time}</span> - <span className="text-xs">{date}</span>
      </div>
    </li>
  );
}
