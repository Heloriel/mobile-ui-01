import { CaretLeft, PaperPlaneRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/atoms/BackButton/BackButton";
import ChatBubble from "../components/atoms/ChatBubble/ChatBubble";

export default function Chat() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full min-h-screen bg-white items-start">
      <div className="flex w-full py-6 px-4 justify-between items-center">
        <BackButton color="#000" />
        <a href="/profile">Matheus Andrade</a>
        <a href="/profile">
          <img src="https://github.com/Heloriel.png" className="rounded-full w-10 h-10 object-cover" />
        </a>
      </div>
      <div className="flex flex-1 justify-end w-full flex-col px-4 overflow-y-scroll">
        <ChatBubble incoming>Hello!</ChatBubble>
        <ChatBubble incoming>How are you today?</ChatBubble>
        <ChatBubble>I'm fine, thanks!</ChatBubble>
        <ChatBubble incoming>Happy to hear! 😊</ChatBubble>
        <ChatBubble>😊</ChatBubble>
      </div>
      <div className="flex w-full p-4 space-x-2">
        <input type="text" name="" id="" className="min-w-[100px] flex flex-1 border border-project-primary rounded-full px-4" placeholder="Message..." />
        <a href="#" role={"button"} className="flex items-center justify-center leading-none p-2 rounded-full bg-project-primary">
          <PaperPlaneRight size={28} color="#fff" weight="fill" />
        </a>
      </div>
    </div>
  );
}
