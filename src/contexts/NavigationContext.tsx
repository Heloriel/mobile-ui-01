import { createContext, useState } from "react";

export interface INavigationContext {
  currentScreen: "chats" | "status" | "calls";
  setCurrentScreen: Function;
}

type Props = {
  children: React.ReactNode;
};

export const NavContext = createContext({} as INavigationContext);

export function NavigationContext({ children }: Props) {
  const [currentScreen, setCurrentScreen] = useState("chats" as const);
  const currentScreenPack = { currentScreen, setCurrentScreen };

  return <NavContext.Provider value={currentScreenPack}>{children}</NavContext.Provider>;
}
