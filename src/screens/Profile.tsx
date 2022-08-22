import { ArrowSquareOut, CaretLeft } from "phosphor-react";
import Header from "../components/composite/Header/Header";
import ScreenContent from "../components/templates/ScreenContent/ScreenContent";
import UserProfile from "../components/composite/UserProfile/UserProfile";
import BackButton from "../components/basic/BackButton/BackButton";
import ProfileLastMessages from "../components/composite/ProfileLastMessages/ProfileLastMessages";
import SmallCatTitle from "../components/basic/SmallCatTitle/SmallCatTitle";

export default function Profile() {
  return (
    <div className="canva">
      <Header title="Profile" disableNavTabs leftIcon={<BackButton />} rightIcon={<ArrowSquareOut size={22} />} />
      <UserProfile />
      <ScreenContent>
        <SmallCatTitle title="LAST MESSAGES" className="mb-2" />
        <ul className="flex w-full flex-col">
          <ProfileLastMessages message="Hello" />
          <ProfileLastMessages message="dev!" />
        </ul>
      </ScreenContent>
    </div>
  );
}
