"use client"
import UserContextProvider from "@/context/UserContext";
import { Menu } from "../Menu/Menu";
import { StyledLayout } from "./Layout.style";
import { GlobalStyles } from "@/styles/GlobalStyles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <UserContextProvider>
        <GlobalStyles />
        <main>{children}</main>
        <Menu />
      </UserContextProvider>
    </StyledLayout>
  );
};
