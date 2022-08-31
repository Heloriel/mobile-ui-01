import FriendCallLink from "../../composite/FriendCallLink/FriendCallLink";
import { X } from "phosphor-react";
import ScreenTitle from "../../basic/ScreenTitle/ScreenTitle";
import { useState } from "react";

export default function FriendsCalls() {
  const [userAvatar, setUserAvatar] = useState("./src/assets/user_default.jpg");
  
  return (
    <div>
      <div className="flex w-full justify-between items-center">
        <ScreenTitle title="Calls" />
        <a href="#">
          <X size={24} />
        </a>
      </div>
      <ul className="flex flex-col w-full space-y-3">
        <FriendCallLink name="John Doe" status="accepted" time="18:30h - 24/08/2022" userAvatar={userAvatar} />
        <FriendCallLink name="John Doe" status="rejected" time="10:15h - 24/08/2022" userAvatar={userAvatar} />
        <FriendCallLink name="John Doe" status="lost" time="11:10h - 24/08/2022" userAvatar={userAvatar} />
      </ul>
    </div>
  );
}
