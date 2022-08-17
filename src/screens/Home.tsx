import Header from "../components/Header/Header";
import ScreenContent from "../components/ScreenContent/ScreenContent";
import { SlidersHorizontal } from "phosphor-react";
import SmallCatTitle from "../components/SmallCatTitle/SmallCatTitle";
import FriendChatLink from "../components/FriendChatLink/FriendChatLink";
import SeeMore from "../components/SeeMore/SeeMore";

export default function Home() {
  const msg = "Lorem ipsun dolort sit amet";

  return (
    <div className="flex min-h-screen flex-col justify-center ">
      <Header title="Home" />
      <ScreenContent>
        <div className="flex w-full justify-between">
          <div className="text-2xl font-bold">All Chats</div>
          <div>
            <SlidersHorizontal size={32} />
          </div>
        </div>
        <SmallCatTitle title="FRIENDS" />
        <ul className="flex flex-col w-full space-y-3">
          <FriendChatLink name="John Doe" msgPreview={msg} unreadCount={2} time="14:03" />
          <FriendChatLink name="Jane Doe" msgPreview={msg} unreadCount={10} time="10:15" />
          <FriendChatLink name="Mr. Nobody" msgPreview={msg} time="22:50" />
        </ul>
        <SeeMore />
      </ScreenContent>
    </div>
  );
}
