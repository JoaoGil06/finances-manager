import styled from "styled-components";
import { ReactSVG } from "react-svg";

export const DropdownContainer = styled.div`
  position: relative;
`;

type DropdownButtonProps = {
  isActive: boolean;
};

export const DropdownButton = styled.div<DropdownButtonProps>`
  padding: 0.8rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: -0.25px;
  user-select: none;
  color: var(--ruinedSmores);
  &:hover {
    cursor: pointer;
  }

  border: ${(props) =>
    props.isActive
      ? "1px solid var(--venetianNights)"
      : "1px solid var(--stoicWhite)"};
  border-radius: 0.4rem;
`;

export const ChevronDown = styled(ReactSVG)``;

export const DropdownContent = styled.div`
  position: absolute;
  top: 150%;
  left: 0;
  width: 100%;
  transition: all 0.2s;
  border-radius: 0.4rem;

  background-color: var(--white);
  box-shadow: 0 15px 20px rgba(72, 84, 159, 0.25);
`;

export const DropdownItem = styled.div`
  width: 100%;
  display: flex;
  padding: 1.6rem 2.4rem;

  color: var(--ruinedSmores);
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: -0.25px;
  border-bottom: 1px solid var(--stoicWhite);

  cursor: pointer;

  &:hover {
    color: var(--venetianNights);
  }

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;
