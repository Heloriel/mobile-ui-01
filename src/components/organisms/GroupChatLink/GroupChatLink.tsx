import classNames from "classnames";
import { useEffect, useState } from "react";
import GroupProfile from "../GroupProfile/GroupProfile";

type Props = {
  name: string;
  msgPreview: string;
  unreadCount?: number;
  time: string;
  user: string;
};

export default function GroupChatLink({ name, msgPreview, unreadCount = 0, time, user }: Props) {
  const [dog, setDog] = useState("");

  function truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) + " ..." : str;
  }

  function fetchDog<T>(url: string) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  useEffect(() => {
    fetchDog<{ message: string }>("https://dog.ceo/api/breeds/image/random")
      .then(({ message }) => {
        setDog(message);
      })
      .catch((error) => {
        return "";
      });
  }, []);

  return (
    <a className="flex w-full" href="#">
      <li className="flex w-full items-center justify-between">
        <div>
          <GroupProfile src={dog} unread={unreadCount} />
        </div>
        <div className="flex-1 px-4">
          <span className={classNames("block", { "font-bold": unreadCount })}>{name}</span>
          <span className="block font-sm text-zinc-500 overflow-hidden">
            <b>{user}:</b> {truncate(msgPreview, 20)}
          </span>
        </div>
        <span className="font-bold text-zinc-500 text-sm">{time}</span>
      </li>
    </a>
  );
}
