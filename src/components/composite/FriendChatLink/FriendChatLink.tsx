import classNames from "classnames";
import { useEffect, useState } from "react";
import FriendProfile from "../../basic/FriendProfile/FriendProfile";

type Props = {
  name: string;
  msgPreview: string;
  unreadCount?: number;
  time: string;
};

export default function FriendChatLink({ name, msgPreview, unreadCount = 0, time }: Props) {
  const [dog, setDog] = useState("./src/assets/user_default.jpg");

  function truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) : str;
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
    <a className="flex w-full" href="/chat">
      <li className="flex w-full items-center justify-between">
        <div className="mr-4">
          <FriendProfile src={dog} unread={unreadCount} />
        </div>
        <div className="inline-block flex-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
          <span className={classNames("block", { "font-bold": unreadCount })}>{name}</span>
          <span className=" w-full font-sm text-zinc-500 ">{truncate(msgPreview, 50)}</span>
        </div>
        <span className="font-bold text-zinc-500 text-sm ml-4">{time}</span>
      </li>
    </a>
  );
}