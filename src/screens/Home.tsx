import { useContext } from "react";

import { INavigationContext, NavContext } from "../contexts/NavigationContext";

import Header from "../components/composite/Header/Header";
import ScreenContent from "../components/templates/ScreenContent/ScreenContent";
import SearchButton from "../components/basic/SearchButton/SearchButton";

import AllChats from "../components/templates/AllChats/AllChats";
import FriendsStatus from "../components/templates/FriendStatus/FriendsStatus";
import FriendsCalls from "../components/templates/FriendCalls/FriendCalls";

import { Camera } from "phosphor-react";

export default function Home() {
  const context = useContext<INavigationContext>(NavContext);
  return (
    <div className="canva">
      <Header title="Home" leftIcon={<Camera size={28} />} rightIcon={<SearchButton />} />
      <ScreenContent>
        {context.currentScreen == "chats" ? <AllChats /> : <></>}
        {context.currentScreen == "status" ? <FriendsStatus /> : <></>}
        {context.currentScreen == "calls" ? <FriendsCalls /> : <></>}
      </ScreenContent>
    </div>
  );
}
