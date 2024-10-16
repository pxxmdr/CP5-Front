import { useContext } from "react";

import {
  StyledHeader,
  StyledUserData,
  StyledUserDataButton,
} from "./Header.style";
import { useRouter } from "next/navigation";
import { UserContext, UserContextProps } from "@/context/UserContext";

interface HeaderProps {
  title: string;
  userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => {
  const router = useRouter();
  const { setUserName } = useContext(UserContext) as UserContextProps;

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    setUserName("");
    router.push("/login");
  };

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <div>
        {userName ? (
          <StyledUserData>
            <span>{userName}</span>
            <StyledUserDataButton onClick={handleLogout}>
              Sair
            </StyledUserDataButton>
          </StyledUserData>
        ) : (
          <StyledUserDataButton onClick={handleLogin}>
            Login
          </StyledUserDataButton>
        )}
      </div>
    </StyledHeader>
  );
};
