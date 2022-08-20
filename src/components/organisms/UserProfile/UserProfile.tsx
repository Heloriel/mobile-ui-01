import SmallCatTitle from "../../atoms/SmallCatTitle/SmallCatTitle";
import UserStatus from "../../molecules/UserStatus/UserStatus";

export default function UserProfile() {
  return (
    <div className="flex flex-col w-full items-center mb-8">
      <img src="https://github.com/Heloriel.png" className="rounded-2xl w-28 h-28 object-cover" />
      <span className="text-white text-2xl mt-4 font-bold">Matheus Andrade</span>
      <SmallCatTitle title="@andradematheus" className="my-0 mb-6" />
      <UserStatus />
    </div>
  );
}
