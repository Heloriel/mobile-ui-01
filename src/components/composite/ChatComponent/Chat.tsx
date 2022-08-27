import ChatBubble from "../../basic/ChatBubble/ChatBubble";

export default function ChatComponent() {
  return (
    <div className="flex flex-1 justify-end w-full flex-col px-4 overflow-y-scroll">
      <ChatBubble incoming>Hello!</ChatBubble>
      <ChatBubble incoming>How are you today?</ChatBubble>
      <ChatBubble>I'm fine, thanks!</ChatBubble>
      <ChatBubble incoming>Happy to hear! 😊</ChatBubble>
      <ChatBubble>😊</ChatBubble>
      <ChatBubble>Loren</ChatBubble>
      <ChatBubble>Ipsun</ChatBubble>
      <ChatBubble incoming>Dolor</ChatBubble>
      <ChatBubble>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ChatBubble>
      <ChatBubble>Sit</ChatBubble>
      <ChatBubble incoming>Amet</ChatBubble>
      <ChatBubble>Consecteur</ChatBubble>
      <ChatBubble incoming>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ChatBubble>
      <ChatBubble>Adpsing</ChatBubble>
      <ChatBubble>Elit</ChatBubble>
    </div>
  );
}
