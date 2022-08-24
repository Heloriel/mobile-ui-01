import { Eye } from "phosphor-react";
import SmallCatTitle from "../../basic/SmallCatTitle/SmallCatTitle";
import FriendStatusLink from "../../composite/FriendStatusLink/FriendStatusLink";

export default function FriendsStatus() {
  return (
    <div>
      <div className="flex w-full justify-between items-center">
        <span className="text-2xl font-bold">All Chats</span>
        <span>
          <Eye size={24} />
        </span>
      </div>
      <SmallCatTitle title="NEW" className="my-4" />
      <ul className="flex flex-col w-full space-y-3">
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" />
      </ul>
      <SmallCatTitle title="VIEWED" className="my-4" />
      <ul className="flex flex-col w-full space-y-3">
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
      </ul>
    </div>
  );
}
