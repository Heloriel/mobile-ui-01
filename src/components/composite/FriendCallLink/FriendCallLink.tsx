import { PhoneIncoming, PhoneSlash, PhoneX } from "phosphor-react";
import { useEffect, useState } from "react";
import FriendProfile from "../../basic/FriendProfile/FriendProfile";

type Props = {
  name: string;
  time: string;
  status: "accepted" | "lost" | "rejected";
};

export default function FriendCallLink({ name, status, time }: Props) {
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
    <a className="flex w-full py-2" href="/chat">
      <li className="flex w-full items-center justify-between">
        <div className="mr-4">
          <FriendProfile src={dog} />
        </div>
        <div className="inline-block flex-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
          <span className="block">{name}</span>
          <span className="font-bold text-zinc-500 text-sm">{time}</span>
        </div>
        <div>
          {status == "accepted" ? (
            <div className="rounded-lg p-1 bg-green-600">
              <PhoneIncoming color="white" weight="fill" size={20} />
            </div>
          ) : (
            <></>
          )}
          {status == "lost" ? (
            <div className="rounded-lg p-1 bg-red-600">
              <PhoneX color="#fff" size={20} />
            </div>
          ) : (
            <></>
          )}
          {status == "rejected" ? (
            <div className="rounded-lg p-1 bg-yellow-600">
              <PhoneSlash color="#fff" size={20} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </li>
    </a>
  );
}
