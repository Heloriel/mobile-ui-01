import classNames from "classnames";
import { useEffect, useState } from "react";
import {GroupProfile} from "../GroupProfile/GroupProfile";
import {truncate} from '../../../helpers/truncate';

type Props = {
  name: string;
  msgPreview: string;
  unreadCount?: number;
  time: string;
  user: string;
  groupImage: string;
};

export default function GroupChatLink({ name, msgPreview, unreadCount = 0, time, user, groupImage }: Props) {
  return (
    <a className="flex w-full" href="#">
      <li className="flex w-full items-center justify-between">
        <div className="mr-4">
          <GroupProfile src={groupImage} unread={unreadCount} />
        </div>
        <div className="inline-block flex-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
          <span className={classNames("block", { "font-bold": unreadCount })}>{name}</span>
          <span className="font-sm text-zinc-500">
            <b>{user}:</b> {truncate(msgPreview, 50)}
          </span>
        </div>
        <span className="font-bold text-zinc-500 text-sm ml-4">{time}</span>
      </li>
    </a>
  );
}
