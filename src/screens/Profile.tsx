import { ArrowSquareOut, CaretLeft } from "phosphor-react";
import Header from "../components/composite/Header/Header";
import ScreenContent from "../components/templates/ScreenContent/ScreenContent";
import UserProfile from "../components/composite/UserProfile/UserProfile";
import BackButton from "../components/basic/BackButton/BackButton";
import ProfileLastMessages from "../components/composite/ProfileLastMessages/ProfileLastMessages";
import SmallCatTitle from "../components/basic/SmallCatTitle/SmallCatTitle";
import OpenExternalProfileButton from "../components/basic/OpenExternalProfileButton/OpenExternalProfileButton";

export default function Profile() {
  return (
    <div className="canva">
      <Header title="Profile" disableNavTabs leftIcon={<BackButton />} rightIcon={<OpenExternalProfileButton url="https://github.com/Heloriel" />}/>
      <UserProfile />
      <ScreenContent>
        <SmallCatTitle title="LAST MESSAGES" className="mb-2" />
        <ul className="flex w-full flex-col">
          <ProfileLastMessages message="Hello" time="11:15h" date="28/08/22" />
          <ProfileLastMessages message="Loren ipsun" time="13:00h" date="28/08/22" />
        </ul>
      </ScreenContent>
    </div>
  );
}
