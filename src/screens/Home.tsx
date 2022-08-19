import Header from "../components/Header/Header";
import ScreenContent from "../components/ScreenContent/ScreenContent";
import { Camera, MagnifyingGlass, SlidersHorizontal } from "phosphor-react";
import SmallCatTitle from "../components/SmallCatTitle/SmallCatTitle";
import FriendChatLink from "../components/FriendChatLink/FriendChatLink";
import SeeMore from "../components/SeeMore/SeeMore";
import GroupChatLink from "../components/GroupChatLink/GroupChatLink";
import Community from "../components/Community/Community";

export default function Home() {
  const msg = "Lorem ipsun dolort sit amet";

  return (
    <div className="canva">
      <Header title="Home" leftIcon={<Camera size={28} />} rightIcon={<MagnifyingGlass size={26} />} />
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
        <SmallCatTitle title="GROUP CHAT" />
        <ul className="flex flex-col w-full space-y-3">
          <GroupChatLink name="School" msgPreview={msg} unreadCount={2} time="14:03" user="John" />
          <GroupChatLink name="Work" msgPreview={msg} unreadCount={0} time="10:15" user="Jane" />
        </ul>
        <SeeMore />
        <SmallCatTitle title="Communities" />
        <div className="grid grid-cols-2 gap-2">
          <Community id={"01"} name="Developers" />
          <Community id={"01"} name="Developers" />
        </div>
      </ScreenContent>
    </div>
  );
}
