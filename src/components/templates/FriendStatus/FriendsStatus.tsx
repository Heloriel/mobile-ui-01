import { Eye } from "phosphor-react";
import SmallCatTitle from "../../basic/SmallCatTitle/SmallCatTitle";

export default function FriendsStatus() {
  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="text-2xl font-bold">All Chats</div>
        <div>
          <Eye />
        </div>
      </div>
      <SmallCatTitle title="NEW" className="my-4" />
      <ul className="flex flex-col w-full space-y-3"></ul>
      <SmallCatTitle title="VIEWED" className="my-4" />
      <ul className="flex flex-col w-full space-y-3"></ul>
    </div>
  );
}
