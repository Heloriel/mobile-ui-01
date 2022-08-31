import { useEffect, useState } from "react";
import CallStatus from "../../basic/CallStatus/CallStatus";
import FriendProfile from "../../basic/FriendProfile/FriendProfile";

type Props = {
  name: string;
  time: string;
  status: "accepted" | "lost" | "rejected";
  userAvatar: string;
};

export default function FriendCallLink({ name, status, time, userAvatar }: Props) {
  return (
    <a className="flex w-full py-2" href="/chat">
      <li className="flex w-full items-center justify-between">
        <div className="mr-4">
          <FriendProfile src={userAvatar} />
        </div>
        <div className="inline-block flex-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
          <span className="block">{name}</span>
          <span className="font-bold text-zinc-500 text-sm">{time}</span>
        </div>
        <div>
          <CallStatus status={status} />
        </div>
      </li>
    </a>
  );
}
