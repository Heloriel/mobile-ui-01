import classNames from "classnames";
import { useEffect, useState } from "react";
import FriendProfile from "../../basic/FriendProfile/FriendProfile";

type Props = {
  name: string;
  time: string;
  viewed?: boolean;
};

export default function FriendStatusLink({ name, time, viewed = false }: Props) {
  const [dog, setDog] = useState("./src/assets/user_default.jpg");

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
          <img src={dog} alt="" className={classNames({ grayscale: viewed, "border-4 border-project-secondary": !viewed }, "h-12 w-12 rounded-full")} />
        </div>
        <div className="inline-block flex-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
          <span className={classNames("block", { "font-bold": !viewed })}>{name}</span>
          <span className=" w-full font-sm text-zinc-500 ">{time}</span>
        </div>
      </li>
    </a>
  );
}
