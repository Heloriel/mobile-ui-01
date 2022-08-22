import { ArrowSquareOut, CaretLeft } from "phosphor-react";
import Header from "../components/organisms/Header/Header";
import ScreenContent from "../components/templates/ScreenContent/ScreenContent";
import UserProfile from "../components/organisms/UserProfile/UserProfile";
import BackButton from "../components/atoms/BackButton/BackButton";
import ProfileLastMessages from "../components/organisms/ProfileLastMessages/ProfileLastMessages";
import SmallCatTitle from "../components/atoms/SmallCatTitle/SmallCatTitle";

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
