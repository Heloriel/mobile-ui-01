import { SlidersHorizontal } from "phosphor-react";
import { useEffect, useState } from "react";
import Community from "../../basic/Community/Community";
import ScreenTitle from "../../basic/ScreenTitle/ScreenTitle";
import SeeMore from "../../basic/SeeMore/SeeMore";
import SmallCatTitle from "../../basic/SmallCatTitle/SmallCatTitle";
import FriendChatLink from "../../composite/FriendChatLink/FriendChatLink";
import GroupChatLink from "../../composite/GroupChatLink/GroupChatLink";

export default function AllChats() {
  const msg = "Lorem ipsun dolort sit amet consecteur adpsin elit";

  return (
    <div>
      <div className="flex w-full justify-between">
        <ScreenTitle title="Chats" />
        <div>
          <SlidersHorizontal size={32} />
        </div>
      </div>
      <SmallCatTitle title="FRIENDS" className="my-4 w-full" />
      <ul className="flex flex-col w-full">
        <FriendChatLink name="John Doe" msgPreview={msg} unreadCount={2} time="14:03" userAvatar="/images/profiles/01.jpg" />
        <FriendChatLink name="Jane Doe" msgPreview={msg} unreadCount={10} time="10:15" userAvatar="/images/profiles/02.jpg" />
        <FriendChatLink name="Mr. Nobody" msgPreview={msg} time="22:50" userAvatar="/images/profiles/03.jpg" />
      </ul>
      <SeeMore url="#" />
      <SmallCatTitle title="GROUP CHAT" className="my-4" />
      <ul className="flex flex-col w-full space-y-3">
        <GroupChatLink name="School" msgPreview={msg} unreadCount={2} time="14:03" user="John" groupImage="/images/profiles/05.jpg" />
        <GroupChatLink name="Work" msgPreview={msg} unreadCount={0} time="10:15" user="Jane" groupImage="/images/profiles/04.jpg"  />
      </ul>
      <SeeMore url="#" />
      <div className="flex justify-between mb-2 items-center">
        <div>
          <SmallCatTitle title="Communities" />
        </div>
        <div>
          <SeeMore url="#" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Community url="#" id={"01"} name="DEVELOPERS" />
        <Community url="#" id={"02"} name="MUSIC" />
      </div>
    </div>
  );
}
