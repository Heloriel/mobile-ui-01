import BackButton from "../../basic/BackButton/BackButton";
import FriendProfile from "../../basic/FriendProfile/FriendProfile";

export default function ChatHeading() {
  return (
    <div className="flex w-full py-2 px-4 justify-between items-center fixed t-0 bg-project-primary z-10">
      <BackButton />
      <a href="/profile" className="text-white">
        Matheus Andrade
      </a>
      <a href="/profile">
        <FriendProfile src="https://github.com/Heloriel.png" />
      </a>
    </div>
  );
}
