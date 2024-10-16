import { BiHomeAlt } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";
import Link from "next/link";


export const Menu = () => {
  return (
    <StyledMenu>
      <StyledWrapperMenu>
        <StyledMenuItem>
          <BiHomeAlt size="1.5rem" color="#38aede" />
          <Link href="/">Inicio</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <BiSearch size="1.5rem" color="#38aede" />
          <Link href="/search">Busca</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <BiHeart size="1.5rem" color="#38aede" />
          <Link href="/favorites">Favoritos</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <BiUserCircle size="1.5rem" color="#38aede" />
          <Link href="/profile">Perfil</Link>
        </StyledMenuItem>
      </StyledWrapperMenu>
    </StyledMenu>
  );
};
