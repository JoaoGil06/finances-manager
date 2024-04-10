import { styled } from "styled-components";
import { ReactSVG } from "react-svg";

export const NavbarContainer = styled.nav`
  min-height: 100vh;
  max-width: 15rem;
  background: #373b53;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 15rem;
  background: var(--venetianNights);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const LogoShadowContainer = styled.div`
  width: 100%;
  height: 7.5rem;
  background-color: var(--forgottenPurple);
  position: absolute;
  bottom: 0;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1;
`;

export const LogoIcon = styled(ReactSVG)`
  z-index: 2;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-bottom: 1px solid var(--venetianNights);
  gap: 0.8rem;

  &:hover {
    background: var(--venetianNights);
  }
  transition: all 0.2s;
`;

export const LinkIcon = styled(ReactSVG)`
  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: var(--white);
  }
`;

export const LinkTitle = styled.span`
  font-size: 2rem;
  color: var(--white);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 3rem;
`;

export const MoonIcon = styled(ReactSVG)`
  cursor: pointer;
`;

export const UsernameContainer = styled.div`
  width: 100%;
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid #979797;
  color: var(--white);
  font-size: 1.4rem;
`;
