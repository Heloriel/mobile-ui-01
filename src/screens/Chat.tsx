import { useEffect } from "react";
import ChatComponent from "../components/composite/ChatComponent/Chat";
import ChatHeading from "../components/composite/ChatHeading/ChatHeading";
import MessageInput from "../components/composite/MessageInput/MessageInput";

export default function Chat() {
  const scrollToBottom = () => {
    msgEnd ? msgEnd.scrollIntoView({ behavior: "auto" }) : <></>;
  };

  useEffect(() => {
    return () => {
      scrollToBottom();
    };
  }, [ChatComponent]);

  let msgEnd: HTMLDivElement | null;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white items-start">
      <ChatHeading />
      <ChatComponent />
      <div
        style={{ float: "left", clear: "both" }}
        ref={(el) => {
          msgEnd = el;
        }}
      ></div>
      <MessageInput />
    </div>
  );
}
