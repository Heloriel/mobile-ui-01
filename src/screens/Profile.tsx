import { ArrowSquareOut, CaretLeft } from "phosphor-react";
import Header from "../components/organisms/Header/Header";
import ScreenContent from "../components/templates/ScreenContent/ScreenContent";
import UserProfile from "../components/organisms/UserProfile/UserProfile";
import BackButton from "../components/atoms/BackButton/BackButton";

export default function Profile() {
  return (
    <div className="canva">
      <Header title="Profile" disableNavTabs leftIcon={<BackButton />} rightIcon={<ArrowSquareOut size={22} />} />
      <UserProfile />
      <ScreenContent>aaaa</ScreenContent>
    </div>
  );
}
