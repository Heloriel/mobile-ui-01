import ChatBubble from "../../basic/ChatBubble/ChatBubble";

export default function ChatComponent() {
  return (
    <div className="flex flex-1 justify-end w-full flex-col px-4 overflow-y-scroll pb-16">
      <ChatBubble time="08:00h" incoming>Hello!</ChatBubble>
      <ChatBubble time="08:00h" incoming>How are you today?</ChatBubble>
      <ChatBubble time="08:00h" >I'm fine, thanks!</ChatBubble>
      <ChatBubble time="08:00h" incoming>Happy to hear! 😊</ChatBubble>
      <ChatBubble time="08:00h">😊</ChatBubble>
      <ChatBubble time="08:00h">Loren</ChatBubble>
      <ChatBubble time="08:00h">Ipsun</ChatBubble>
      <ChatBubble time="08:00h" incoming>Dolor</ChatBubble>
      <ChatBubble time="08:00h">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ChatBubble>
      <ChatBubble time="08:00h">Sit</ChatBubble>
      <ChatBubble time="08:00h" incoming>Amet</ChatBubble>
      <ChatBubble time="08:00h">Consecteur</ChatBubble>
      <ChatBubble time="08:00h" incoming>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ChatBubble>
      <ChatBubble time="08:00h">Adpsing</ChatBubble>
      <ChatBubble time="08:00h">Elit</ChatBubble>
    </div>
  );
}
