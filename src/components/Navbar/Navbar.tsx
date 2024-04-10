import React from "react";
import {
  NavbarContainer,
  LogoContainer,
  LogoIcon,
  LogoShadowContainer,
  ActionsContainer,
  MoonIcon,
  UsernameContainer,
  LinksContainer,
  LinkItem,
  LinkIcon,
  LinkTitle,
} from "./styles/Navbar.styledcomponent";
import IconLogo from "../../assets/logo.svg";
import IconMoon from "../../assets/icon-moon.svg";
import IconDashboard from "../../assets/icon-dashboard.svg";
import IconList from "../../assets/icon-expense.svg";
import IconCategory from "../../assets/icon-category.svg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoIcon src={IconLogo} />
        <LogoShadowContainer />
      </LogoContainer>
      <LinksContainer>
        <Link to="/">
          <LinkItem>
            <LinkIcon src={IconDashboard} />
            <LinkTitle>Dashboard</LinkTitle>
          </LinkItem>
        </Link>
        <Link to="/expenses">
          <LinkItem>
            <LinkIcon src={IconList} />

            <LinkTitle>Expenses</LinkTitle>
          </LinkItem>
        </Link>
        <Link to="/categories">
          <LinkItem>
            <LinkIcon src={IconCategory} />

            <LinkTitle>Categories</LinkTitle>
          </LinkItem>
        </Link>
      </LinksContainer>
      <ActionsContainer>
        <MoonIcon src={IconMoon} />
        <UsernameContainer>João Gil</UsernameContainer>
      </ActionsContainer>
    </NavbarContainer>
  );
};
