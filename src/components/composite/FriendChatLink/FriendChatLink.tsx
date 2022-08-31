import classNames from "classnames";
import { useEffect, useState } from "react";
import FriendProfile from "../../basic/FriendProfile/FriendProfile";

type Props = {
  name: string;
  msgPreview: string;
  unreadCount?: number;
  time: string;
  userAvatar: string;
};

export default function FriendChatLink({ name, msgPreview, unreadCount = 0, time, userAvatar }: Props) {
  
  function truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) : str;
  }

  return (
    <a className="flex w-full py-2" href="/chat">
      <li className="flex w-full items-center justify-between">
        <div className="mr-4">
          <FriendProfile src={userAvatar} unread={unreadCount} />
        </div>
        <div className="inline-block flex-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
          <span className={classNames("block", { "font-bold": unreadCount })}>{name}</span>
          <span className="w-full font-sm text-zinc-500 ">{truncate(msgPreview, 50)}</span>
        </div>
        <span className="font-bold text-zinc-500 text-sm ml-4">{time}</span>
      </li>
    </a>
  );
}