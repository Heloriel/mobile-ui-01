import classNames from "classnames";
import { ThumbsUp } from "phosphor-react";
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
        return;
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
        return;
      });
  }, []);

  return (
    <li className="flex w-full items-center justify-between">
      <a className="flex w-full" href="/chat">
        <div className="mr-4">
          <img src={dog} alt="" className={classNames({ grayscale: viewed, "border-4 border-project-secondary": !viewed }, "h-12 w-12 rounded-full object-cover object-center")} />
        </div>
        <div className="inline-block flex-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
          <span className={classNames("block", { "font-bold": !viewed })}>{name}</span>
          <span className=" w-full font-sm text-zinc-500 ">{time}</span>
        </div>
      </a>
      <a className="mr-4 p-2" href="#">
        <ThumbsUp size={28} />
      </a>
    </li>
  );
}
