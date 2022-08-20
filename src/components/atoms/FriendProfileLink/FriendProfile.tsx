import classNames from "classnames";

type Props = {
  src: string;
  unread?: number;
};

export default function FriendProfileLink({ src, unread }: Props) {
  const hasUnreadMessage = !unread;

  return (
    <a className="block relative" href="/profile">
      <b className={classNames({ hidden: hasUnreadMessage }, "inline-flex absolute -top-2 left-6 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white")}>{unread}</b>
      <img className="rounded-full w-11 h-11 object-cover" src={src} />
    </a>
  );
}
