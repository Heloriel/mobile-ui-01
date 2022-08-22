import Header from "../components/composite/Header/Header";
import ScreenContent from "../components/templates/ScreenContent/ScreenContent";
import { Camera, SlidersHorizontal } from "phosphor-react";
import SmallCatTitle from "../components/basic/SmallCatTitle/SmallCatTitle";
import FriendChatLink from "../components/composite/FriendChatLink/FriendChatLink";
import SeeMore from "../components/basic/SeeMore/SeeMore";
import GroupChatLink from "../components/composite/GroupChatLink/GroupChatLink";
import Community from "../components/basic/Community/Community";
import SearchButton from "../components/basic/SearchButton/SearchButton";

export default function Home() {
  const msg = "Lorem ipsun dolort sit amet consecteur adpsin elit";

  return (
    <div className="canva">
      <Header title="Home" leftIcon={<Camera size={28} />} rightIcon={<SearchButton />} />
      <ScreenContent>
        <div className="flex w-full justify-between">
          <div className="text-2xl font-bold">All Chats</div>
          <div>
            <SlidersHorizontal size={32} />
          </div>
        </div>
        <SmallCatTitle title="FRIENDS" className="my-4" />
        <ul className="flex flex-col w-full space-y-3">
          <FriendChatLink name="John Doe" msgPreview={msg} unreadCount={2} time="14:03" />
          <FriendChatLink name="Jane Doe" msgPreview={msg} unreadCount={10} time="10:15" />
          <FriendChatLink name="Mr. Nobody" msgPreview={msg} time="22:50" />
        </ul>
        <SeeMore />
        <SmallCatTitle title="GROUP CHAT" className="my-4" />
        <ul className="flex flex-col w-full space-y-3">
          <GroupChatLink name="School" msgPreview={msg} unreadCount={2} time="14:03" user="John" />
          <GroupChatLink name="Work" msgPreview={msg} unreadCount={0} time="10:15" user="Jane" />
        </ul>
        <SeeMore />
        <div className="flex justify-between mb-2 items-center">
          <div>
            <SmallCatTitle title="Communities" />
          </div>
          <div>
            <SeeMore />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Community id={"01"} name="DEVELOPERS" />
          <Community id={"02"} name="MUSIC" />
        </div>
      </ScreenContent>
    </div>
  );
}
