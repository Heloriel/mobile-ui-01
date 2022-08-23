import classNames from "classnames";
import { useContext } from "react";
import { INavigationContext, NavContext } from "../../../contexts/NavigationContext";

export default function NavTabs() {
  const context = useContext<INavigationContext>(NavContext);

  return (
    <div className="flex w-full justify-between items-center bg-project-secondary rounded-full p-1 space-x-3">
      <a role={"button"} className={classNames({ "bg-project-primary": context.currentScreen === "chats" ? true : false }, "rounded-full flex-1 text-center py-2")} onClick={() => context.setCurrentScreen("chats")}>
        Chat
      </a>
      <a role={"button"} className={classNames({ "bg-project-primary": context.currentScreen === "status" ? true : false }, "rounded-full flex-1 text-center py-2")} onClick={() => context.setCurrentScreen("status")}>
        Status
      </a>
      <a role={"button"} className={classNames({ "bg-project-primary": context.currentScreen === "calls" ? true : false }, "rounded-full flex-1 text-center py-2")} onClick={() => context.setCurrentScreen("calls")}>
        Call
      </a>
    </div>
  );
}
