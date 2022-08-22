import ChatBubble from "../../atoms/ChatBubble/ChatBubble";

type Props = {
  message: string;
};

export default function ProfileLastMessages({ message }: Props) {
  return (
    <li className="flex w-full items-center justify-between">
      <div>
        <img src="https://github.com/Heloriel.png" className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex-1 px-8">
        <ChatBubble incoming>{message}</ChatBubble>
      </div>
      <div>21/08/22</div>
    </li>
  );
}
