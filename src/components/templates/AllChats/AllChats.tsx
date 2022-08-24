import { SlidersHorizontal } from "phosphor-react";
import Community from "../../basic/Community/Community";
import SeeMore from "../../basic/SeeMore/SeeMore";
import SmallCatTitle from "../../basic/SmallCatTitle/SmallCatTitle";
import FriendChatLink from "../../composite/FriendChatLink/FriendChatLink";
import GroupChatLink from "../../composite/GroupChatLink/GroupChatLink";

export default function AllChats() {
  const msg = "Lorem ipsun dolort sit amet consecteur adpsin elit";

  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="text-2xl font-bold">All Chats</div>
        <div>
          <SlidersHorizontal size={32} />
        </div>
      </div>
      <SmallCatTitle title="FRIENDS" className="my-4 w-full" />
      <ul className="flex flex-col w-full">
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
    </div>
  );
}
